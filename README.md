# Gardr Resize Plugin

[![Build Status](https://api.travis-ci.org/gardr/plugin-host-resize.png?branch=master)](https://travis-ci.org/gardr/plugin-host-resize)
[![Dependency Status](https://david-dm.org/gardr/plugin-host-resize.png)](https://david-dm.org/gardr/plugin-host-resize)
[![devDependency Status](https://david-dm.org/gardr/plugin-host-resize/dev-status.png)](https://david-dm.org/gardr/plugin-host-resize#info=devDependencies)


Gardr plugin to resize container to content size

## Install

    npm install gardr-plugin-host-resize --save

## Use
In your host bundle file:

    var gardrHost = require('gardr-host');
    var resize = require('gardr-plugin-host-resize');

    gardrHost.plugin(resize);

    module.exports = gardrHost;

Add resizeHorizontal = true and/or resizeVertical = true to item.options to enable resize for a position

	var gardr = gardrHost(...);
	gardr.queue('position', {
		resizeHorizontal: true,
		resizeVertical: true,
		...
	});
