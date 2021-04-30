/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery'
], function ($) {
    'use strict';

    var btnPlus = $('[data-task31="plus"]'),
        btnMinus = $('[data-task31="minus"]'),
        qty = $('#qty');

    btnPlus.on('click', function () {
        var qtyValue = qty.val(),
            newValue = parseInt(qtyValue) + 1;
        qty.val(newValue);
    });

    btnMinus.on('click', function () {
        var qtyValue = qty.val();
        if (qty.val() > 1) {
            var newValue = parseInt(qtyValue) - 1;
            qty.val(newValue);
        }
    });
})
