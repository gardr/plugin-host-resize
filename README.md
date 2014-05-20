# Gardr Resize Plugin

Gardr plugin to resize container to content size

## Install

    npm install gardr-plugin-host-resize --save

## Use
In your host bundle file:

    var gardrHost = require('gardr-host');
    var resize = require('gardr-plugin-host-resize');

    gardrHost.plugin(resize);

    module.exports = gardrHost;
	
Add resizeHorizontal = true to item.options to enable resize for a position

	var gardr = gardrHost(...);
	gardr.queue('position', {
		resizeHorizontal: true,
		...
	});