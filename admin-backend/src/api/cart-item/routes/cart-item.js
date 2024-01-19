'use strict';

/**
 * cart-item router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::cart-item.cart-item');


module.exports = {
    routes: [
      {
        method: "PUT",
        path: "/cart/:ProductId",
        handler: "cart-item.update",
      },
      {
        method: "GET",
        path: "/cart",
        handler: "cart-item.find",
      },
      {
        method: "DELETE",
        path: "/cart/:ProductId",
        handler: "cart-item.delete",
      },
      {
        method: "POST",
        path: "/cart",
        handler: "cart-item.create",
      },
      {
        method: "GET",
        path: "/cart/:ProductId",
        handler: "cart-item.findOne",
      },
    ],
  };
