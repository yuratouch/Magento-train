/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'ko',
    'uiComponent'
], function ($, ko, Component) {
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

            this.cityStores.subscribe(() => {
                this.pageNumber(0);
                this.filterStores();
            });

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

            this.totalPagesRender = ko.computed(function (){
                let self = this,
                    totalPagesArr = [];
                for (let i = 0; i <= self.totalPages(); i++) {
                    totalPagesArr.push(i);
                }
                return totalPagesArr;
            }, this)

            return this;
        },

        nextPage: function () {
            let self = this,
                nextPageFunc = function () {
                    if (self.pageNumber() < self.totalPages()) {
                        self.pageNumber(self.pageNumber() + 1);
                    }
                };

            self.fadeEffect(nextPageFunc);
        },

        previousPage: function () {
            let self = this,
                previousPageFunc = function () {
                    if (self.pageNumber() !== 0) {
                        self.pageNumber(self.pageNumber() - 1);
                    }
                };

            self.fadeEffect(previousPageFunc);
        },

        goToPage: function (data) {
            let self = this,
                goToPageFunc = function () {
                    self.pageNumber(data);
                };

            self.fadeEffect(goToPageFunc);
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
        },

        // Fade effect for pagination pages
        fadeEffect: function (handler) {
            let storeList = $("ul.storeList-content");

            storeList.addClass('fade-effect');
            setTimeout(() => {
                handler();
                storeList.removeClass('fade-effect');
                storeList.addClass('fade-effect--active');
                setTimeout(() => {
                    storeList.removeClass('fade-effect--active');
                }, 700);
            }, 800);
        },
    })
});
