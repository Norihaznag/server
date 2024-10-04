import type { Schema, Attribute } from '@strapi/strapi';

export interface OwnerOrder extends Schema.Component {
  collectionName: 'components_owner_orders';
  info: {
    displayName: 'Order';
  };
  attributes: {};
}

export interface SharedSize extends Schema.Component {
  collectionName: 'components_shared_sizes';
  info: {
    displayName: 'size';
    description: '';
  };
  attributes: {
    names: Attribute.Enumeration<['Small', 'Medium', 'Large']>;
  };
}

export interface SharedOwner extends Schema.Component {
  collectionName: 'components_shared_owners';
  info: {
    displayName: 'Owner';
    icon: 'user';
  };
  attributes: {
    name: Attribute.String;
    Phone: Attribute.BigInteger;
    Adress: Attribute.Text & Attribute.Required;
  };
}

export interface SharedOption extends Schema.Component {
  collectionName: 'components_shared_options';
  info: {
    displayName: 'Option';
    description: '';
  };
  attributes: {
    price: Attribute.Decimal;
    size: Attribute.Enumeration<['small', 'medium', 'large', 'XL']> &
      Attribute.DefaultTo<'medium'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'owner.order': OwnerOrder;
      'shared.size': SharedSize;
      'shared.owner': SharedOwner;
      'shared.option': SharedOption;
    }
  }
}
