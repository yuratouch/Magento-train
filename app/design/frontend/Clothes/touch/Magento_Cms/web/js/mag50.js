/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'Magento_Cms/js/mag32'
], function ($) {
    'use strict';

    $.widget('mage.mag50', $.mage.mag32, {
        _init: function() {
            var images = $(".mag-task50-img");

            $(document).on('click', function (){
                images.removeClass("tinyScaled");
            });

            $(this.element).on('click', function (e){
                var element = e.target;
                e.stopPropagation();

                if (images.hasClass("mag-task50-img")) {
                    images.removeClass("tinyScaled");
                }

                if ($(element).hasClass("mag-task50-img")) {
                    $(element).addClass("tinyScaled");
                    if (images.hasClass("tinyScaled")){
                        images.removeClass("tinyScaled");
                        $(element).addClass("tinyScaled");
                    }
                }
            });
        },
    });

    return $.mage.mag50;
});
