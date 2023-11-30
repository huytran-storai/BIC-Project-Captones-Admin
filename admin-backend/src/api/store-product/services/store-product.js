'use strict';

/**
 * store-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::store-product.store-product');
