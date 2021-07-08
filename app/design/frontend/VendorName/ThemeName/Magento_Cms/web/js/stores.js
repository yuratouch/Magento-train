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
            template: 'Magento_Cms/sidebar-stores',
            cityStores: ko.observableArray([]),
            checkedStores: ko.observableArray([]),
            storeNames: ko.observableArray([]),
            showStoreNames: ko.observable(),
            listens: {
                "citiesSidebar:cityStores": "hasChanged"
            }
        },

        initialize: function () {
            this._super();

            this.renderStoreNames();

            return this;
        },

        renderStoreNames: function () {
            let self = this;

            this.cityStores.subscribe(cityStores => {
                self.checkedStores([]);
                self.storeNames([]);
                cityStores.forEach( store => {
                    if( !self.storeNames().includes(store.name) ) {
                        self.storeNames.push(store.name);
                    }
                })

                self.storeNames().length > 1 ? self.showStoreNames(true) : self.showStoreNames(false);
            })
        }
    })
});
