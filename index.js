'use strict';

function resize (gardrPluginApi) {
    gardrPluginApi.on('item:afterrender', function (item) {

        var resizeHorizontal = !!item.options.resizeHorizontal;
        var resizeVertical = !!item.options.resizeVertical;
        var container = item.options.container;
        var rendered = item.rendered;
        var iframe = item.iframe;

        var width = resizeHorizontal ? rendered.width : null;
        var height = resizeVertical ? rendered.height : null;


        if(width) {
            container.style.width = width + 'px';
        }
        if(height) {
            container.style.height = height + 'px';
        }
        if(width || height) {
            iframe.resize(width, height);
        }

    });
}

module.exports = resize;
