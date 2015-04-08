/*!
 * jQuery EasyRetina.js plugin v0.0.11
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2015, Bogdan Dragomir
 * Released under the MIT license
 * ////////////////////////////////////////////////////////////////////////////
 */
(function ($) {
    $.fn.easyretina = function (options) {
        var settings = {
            // Check for data-retina attribute.
            // If exists, swap out image from data-retina if false it looks for image with @2x and swaps it.
            dataAttribute: true,
            // Check if image exists before swapping out
            checkImage: true
        };

        if (options) {
            jQuery.extend(settings, options);
        }

        var retinaEnabled = false;

        // If retina enabled only
        if (window.devicePixelRatio > 1) {
            retinaEnabled = true;
        }

        // Begin to iterate over the jQuery collection that the method was called on
        return this.each(function () {

            // Cache `this`
            var $this = $(this);

            $this.addClass('retina-off');

            if (!retinaEnabled) {
                return false;
            }

            var newSource = '';

            // Get data-retina attribute
            if (settings.dataAttribute && $this.attr('data-retina')) {
                newSource = $this.attr('data-retina');
            } else {
                if (!newSource) {
                    newSource = $this.attr('src');
                    var suffix = "@2x";
                    var baseFileName = newSource.replace(/.[^.]+$/, '');
                    var baseFileExtension = newSource.replace(/^.*\./, '');
                    newSource = baseFileName + suffix + '.' + baseFileExtension;
                }
            }

            if (settings.checkImage && newSource) {

                $.ajax({
                    url: newSource, type: "HEAD", success: function () {
                        $this.attr('src', newSource);
                        $this.removeClass('retina-off');
                        $this.addClass('retina-on');
                    }
                });
                
            } else if (newSource) {
                $this.attr('src', newSource);
                $this.removeClass('retina-off');
                $this.addClass('retina-on');
            }
        });
    }
}(jQuery));
