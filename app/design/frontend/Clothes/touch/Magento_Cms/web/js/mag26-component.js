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
            countTest: ko.observable('This is string from MAG-26 here'),
            template: 'Magento_Cms/mag26'
        },
        initialize: function () {
            this._super();
            console.log('MAG-26 initialize')
        }
    })
});
