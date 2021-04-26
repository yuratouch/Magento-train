/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([], function () {
    'use strict';

    var mixin = {
        extraMethod: function () {
            console.log('Extra method added')
        },

        initialize: function () {
            this._super();
            return this.extraMethod();
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});
