# Gardr Resize Plugin

Gardr plugin to resize container to content size

## Install

    npm install gardr-resize-host --save

## Use
In your host bundle file:

    var gardrHost = require('gardr-host');
    var resize = require('gardr-resize-host');

    gardrHost.plugin(resize);

    module.exports = gardrHost;
	
Add resizeHorizontal = true to item.options to enable resize for a position

	var gardr = gardrHost(...);
	gardr.queue('position', {
		resizeHorizontal: true,
		...
	});