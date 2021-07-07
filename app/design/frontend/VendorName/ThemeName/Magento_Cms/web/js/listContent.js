/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'ko',
    'uiComponent'
], function (ko, Component) {
    'use strict';
    return Component.extend({
        defaults: {
            template: 'Magento_Cms/list-content',
            cityStores: ko.observableArray([]),
            checkedStores: ko.observableArray([]),
            filteredStores: ko.observableArray([]),
            pageNumber: ko.observable(0),
            storesPerPage: 4,
            imports: {
                cityStores: "citiesSidebar:cityStores",
                checkedStores: "storesSidebar:checkedStores",
            },
            listens: {
                "citiesSidebar:cityStores": "hasChanged"
            }
        },

        initialize: function () {
            this._super();

            // pagination functionality
            this.totalPages = ko.computed(function (){
                let content = Math.floor(this.filteredStores().length / this.storesPerPage);

                content += this.filteredStores().length % this.storesPerPage > 0 ? 1 : 0;
                return content - 1;
            }, this);

            this.paginated = ko.computed(function (){
                let first = this.pageNumber() * this.storesPerPage;

                return this.filteredStores().slice(first, first + this.storesPerPage);
            }, this);

            this.hasPrevious = ko.computed(function (){
                return this.pageNumber() !== 0;
            }, this);

            this.hasNext = ko.computed(function (){
                return this.pageNumber() !== this.totalPages();
            }, this);

            this.pageNumberRender = ko.computed(function (){
                return this.pageNumber() + 1;
            }, this)

            this.totalPagesRender = ko.computed(function (){
                return this.totalPages() + 1;
            }, this)
            // pagination functionality ends

            this.cityStores.subscribe(() => {
                this.pageNumber(0);
                this.filterStores();
            });

            return this;
        },

        nextPage: function () {
            let self = this;
            if (self.pageNumber() < self.totalPages()) {
                self.pageNumber(self.pageNumber() + 1);
            }
        },

        previousPage: function () {
            let self = this;
            if (self.pageNumber() != 0) {
                self.pageNumber(self.pageNumber() - 1);
            }
        },

        filterStores: function () {
            let self = this;
            self.filteredStores([...self.cityStores()]);
            this.checkedStores.subscribe(() => {
                self.pageNumber(0);
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
