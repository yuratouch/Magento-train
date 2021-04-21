/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'js/mag-user-data'
], function (userData) {
    'use strict';

    return function () {
        console.log(userData.getFullName());
    };
})
