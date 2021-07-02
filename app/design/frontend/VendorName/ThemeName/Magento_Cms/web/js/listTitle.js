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
            template: 'Magento_Cms/list-title',
            imports: {
                selectedCity: "citiesSidebar:selectedCity"
            }
        },

        initObservable: function () {
            this._super().observe('selectedCity');

            return this;
        },

        initialize: function () {
            this._super();
        },
    })
});
