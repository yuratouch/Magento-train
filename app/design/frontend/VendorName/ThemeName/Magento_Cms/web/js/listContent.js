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
                cityStores: "citiesSidebar:cityStores",
                checkedStores: "storesSidebar:checkedStores",
            },
            listens: {
                "citiesSidebar:cityStores": "hasChanged"
            }
        },

        filteredStores: ko.observableArray([]),

        initialize: function () {
            this._super();

            let self = this;
            this.cityStores.subscribe(() => self.filterStores());

            return this;
        },

        filterStores: function () {
            let self = this;
            self.filteredStores([...self.cityStores()]);
            this.checkedStores.subscribe(() => {
                self.checkedStores().length > 0 ? self.filteredStores([]) : self.filteredStores([...self.cityStores()]);

                self.cityStores().forEach( store => {
                    self.checkedStores().forEach( checked => {
                        if (checked === store.name ) {
                            self.filteredStores.push(store)

                        }
                    })
                })
            })
        }
    })
});
