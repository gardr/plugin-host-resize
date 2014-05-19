var assert = require('assert');
var resize = require('./index.js');
var PluginApi = require('gardr-core-plugin').PluginApi;
var sinon = require('sinon');

function mockItem () {
	return { 
		options: {
			container: {
				style: {
					width: '100px'
				}
			}
		},
		iframe: {
			resize: sinon.spy(),
			height: 100
		}	
	};
}

describe('resize-host', function () {
	var pluginApi;

	beforeEach(function () {
		pluginApi = new PluginApi();
	});
	
	it('should be a function', function () {
		assert.equal(typeof resize, 'function');
	});
	
	it('should not resize if item.options.resizeHorizontal is not true', function () {
		var item = mockItem();
		resize(pluginApi);
		pluginApi.trigger('item:afterrender', item);	
		
		assert.equal(item.options.container.style.width, '100px');
		assert(!item.iframe.resize.called, 'item resize called');
	});
	
	it('should resize if item.options.resizeHorizontal is true', function () {
		var item = mockItem();
		item.options.resizeHorizontal = true;
		resize(pluginApi);
		item.rendered = {width: 120};
		pluginApi.trigger('item:afterrender', item);
		
		assert.equal(item.options.container.style.width, '120px');
		assert(item.iframe.resize.calledOnce, 'item resize called');
		assert(item.iframe.resize.calledWith(item.rendered.width, item.iframe.height), 'called with new width');
	});
});