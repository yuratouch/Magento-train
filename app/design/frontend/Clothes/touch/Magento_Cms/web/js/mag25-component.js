/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'uiComponent',
    'ko'
], function (Component, ko) {
    'use strict';
    return Component.extend({
        defaults: {
            countTest: ko.observable('1')
        },
        initialize: function () {
            this._super();
            console.log(this.countTest());
            console.log('MAG-25 initialize');
        }
    })
});
