/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'mage/utils/wrapper'
], function (wrapper) {
    'use strict';

    return function (magUserData) {
        magUserData.age = 25;
        return magUserData;
    };
});
