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
            checkedStores: ko.observableArray([]),
            imports: {
                cityStores:"citiesSidebar:cityStores",
                checkedStores: "storesSidebar:checkedStores",
            },
            listens: {
                "citiesSidebar:cityStores": "hasChanged"
            }

        },

        filteredStores: ko.observableArray([]),

        filterStores: function () {
            let self = this;

            this.checkedStores.subscribe(checkedStore => {
                console.log(checkedStore);

                self.filteredStores([]);
                self.cityStores().forEach( store => {
                    self.checkedStores().forEach( checked => {
                        if (checked == store.name ) {
                            self.filteredStores.push(store)
                        }
                    })
                })
                console.log(self.filteredStores());
            })
        },

        initialize: function () {
            this._super();

            let self = this;
            this.cityStores.subscribe(cityStores => {

                console.log(cityStores);
                self.filterStores();
            })
        },
    })
});
