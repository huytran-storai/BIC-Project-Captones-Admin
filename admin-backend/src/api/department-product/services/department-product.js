'use strict';

/**
 * department-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::department-product.department-product');
