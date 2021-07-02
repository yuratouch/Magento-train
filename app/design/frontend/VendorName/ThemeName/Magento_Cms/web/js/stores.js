/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'uiComponent',
    'ko',
    'sidebarCities'
], function (Component, ko, sidebarCities) {
    'use strict';
    return Component.extend({
        defaults: {
            template: 'Magento_Cms/sidebar-stores',
            cityStores: ko.observableArray([]),
            listens: {
                "citiesSidebar:cityStores": "hasChanged"
            }
        },

        storeNames: ko.observableArray([]),

        initialize: function () {
            this._super();

            let self = this;

            this.cityStores.subscribe(cityStores => {
                self.storeNames([]);
                cityStores.forEach( store => {

                    if( !self.storeNames().includes(store.name) ) {
                        self.storeNames.push(store.name);
                    }
                })

                console.log(self.storeNames());
            })
        },
    })
});
