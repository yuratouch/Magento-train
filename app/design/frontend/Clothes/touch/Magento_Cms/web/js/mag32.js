/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery'
], function ($) {
    'use strict';

    $.widget('mage.mag32', {

        _init: function() {
            var images = $(".mag-task32-img");
            $(document).on('click', function (){
                images.removeClass("scaled");
            });

            $(this.element).on('click', function (e){
                var element = e.target;
                e.stopPropagation();

                if (images.hasClass("mag-task32-img")) {
                    images.removeClass("scaled");
                }

                if ($(element).hasClass("mag-task32-img")) {
                    $(element).addClass("scaled");
                    if (images.hasClass("scaled")){
                        images.removeClass("scaled");
                        $(element).addClass("scaled");
                    }
                }
            });
        },
    });

    return $.mage.mag32;
});
