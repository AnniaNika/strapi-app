import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedUserInfo extends Schema.Component {
  collectionName: 'components_shared_user_infos';
  info: {
    displayName: 'UserInfo';
    icon: 'user';
  };
  attributes: {
    greeting: Attribute.String & Attribute.DefaultTo<'Hello,'>;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedMeta extends Schema.Component {
  collectionName: 'components_shared_metas';
  info: {
    displayName: 'meta';
    icon: 'command';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMenuItem extends Schema.Component {
  collectionName: 'components_shared_menu_items';
  info: {
    displayName: 'MenuItem';
    icon: 'plus';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface SharedMenuColumn extends Schema.Component {
  collectionName: 'components_shared_menu_columns';
  info: {
    displayName: 'MenuColumn';
    icon: 'bold';
  };
  attributes: {
    label: Attribute.String;
    page: Attribute.Relation<
      'shared.menu-column',
      'oneToOne',
      'api::page.page'
    >;
    navSlug: Attribute.String;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedLoginForm extends Schema.Component {
  collectionName: 'components_shared_login_forms';
  info: {
    displayName: 'Login Form';
    icon: 'information';
  };
  attributes: {
    registerForm: Attribute.Boolean;
  };
}

export interface SharedItem extends Schema.Component {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'Item';
    icon: 'bold';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    page: Attribute.Relation<'shared.item', 'oneToOne', 'api::page.page'>;
    navSlug: Attribute.String;
    icon: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.user-info': SharedUserInfo;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.meta': SharedMeta;
      'shared.menu-item': SharedMenuItem;
      'shared.menu-column': SharedMenuColumn;
      'shared.media': SharedMedia;
      'shared.login-form': SharedLoginForm;
      'shared.item': SharedItem;
    }
  }
}
