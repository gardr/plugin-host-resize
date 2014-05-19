function resize (gardrPluginApi) {
    gardrPluginApi.on('item:afterrender', function (item) {
        if (item.options.resizeHorizontal) {
            var container = item.options.container;
            container.style.width = item.rendered.width + 'px';
            item.iframe.resize(item.rendered.width, item.iframe.height);
        }
    });
}

module.exports = resize;
