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
            listens: {
                "citiesSidebar:cityStores": "hasChanged"
            }
        },

        storeNames: ko.observableArray([]),

        showStoreNames: function () {
            let self = this;

            this.cityStores.subscribe(cityStores => {
                self.checkedStores([]);
                self.storeNames([]);
                cityStores.forEach( store => {

                    if( !self.storeNames().includes(store.name) ) {
                        self.storeNames.push(store.name);
                    }
                })

                console.log(self.storeNames());
            })
        },

        initialize: function () {
            this._super();

            this.showStoreNames();

            this.checkedStores.subscribe( checkedStore => {
                console.log(checkedStore);
            })

        },
    })
});
