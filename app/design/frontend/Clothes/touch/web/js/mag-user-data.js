/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([], function () {
    'use strict';

    return {
        /**
         * Return user data
         *
         * @returns {Object}
         */
        name: "John",
        surname: "Doe",
        getFullName: function () {
            return `${this.name} ${this.surname}`;
        }
    };
})
