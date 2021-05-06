/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery'
], function ($) {
    'use strict';

    var mag32WidgetMixin = {

        _init: function () {
            var images = $(".mag-task32-img");

            $(document).on('dblclick', function (){
                images.removeClass("grayscale");
            });

            $(this.element).on('dblclick', function (e){
                e.stopPropagation();

                if (images) {
                    images.addClass("grayscale");
                }
            });

            return this._super();
        }
    };

    return function (targetWidget) {
        $.widget('mage.mag32Mixin', targetWidget, mag32WidgetMixin);

        return $.mage.mag32Mixin;
    };
});
