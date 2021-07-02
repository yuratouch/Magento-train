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
            template: 'Magento_Cms/list-content',
            cityStores: ko.observableArray([]),
            imports: {
                cityStores:"citiesSidebar:cityStores"
            },
            listens: {
                "citiesSidebar:cityStores": "hasChanged"
            }

        },

        initialize: function () {
            this._super();
            this.cityStores.subscribe(cityStores => {

                console.log(cityStores);
            })
        },
    })
});
