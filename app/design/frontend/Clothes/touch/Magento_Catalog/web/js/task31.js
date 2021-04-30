/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery'
], function ($) {
    'use strict';

    var btnPlus = $('#task31-plus'),
        btnMinus = $('#task31-minus'),
        qty = document.querySelector('#qty');

    btnPlus.click(function () {
        qty.value = (parseInt(qty.value) +1 ).toString();
    });

    btnMinus.click(function () {
        if (qty.value > 1) {
            qty.value = (parseInt(qty.value) -1 ).toString();
        }
    });
})
