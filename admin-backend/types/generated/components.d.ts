import type { Schema, Attribute } from '@strapi/strapi';

export interface RTests extends Schema.Component {
  collectionName: 'components_r_tests';
  info: {
    displayName: 'tests';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'r.tests': RTests;
    }
  }
}
