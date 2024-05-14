'use strict';

/**
 * payment-management service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-management.payment-management');
