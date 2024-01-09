import type { Schema, Attribute } from '@strapi/strapi';

export interface AccessoriesOptionsAccessoriesOptions extends Schema.Component {
  collectionName: 'components_accessories_options_accessories_options';
  info: {
    displayName: 'AccessoriesOptions';
  };
  attributes: {};
}

export interface ApparelCustomizationDetailsCustomizableAttributes
  extends Schema.Component {
  collectionName: 'components_apparel_customization_details_customizable_attributes';
  info: {
    displayName: 'customizable_attributes';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface CustomizationDetailsCustomizationDetails
  extends Schema.Component {
  collectionName: 'components_customization_details_customization_details';
  info: {
    displayName: 'CustomizationDetails';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface CustomizationOptionsCustomizations extends Schema.Component {
  collectionName: 'components_customization_options_customizations';
  info: {
    displayName: 'customizations';
    icon: 'chartBubble';
  };
  attributes: {};
}

export interface EnvironmentalImpactEnvironmentalImpact
  extends Schema.Component {
  collectionName: 'components_environmental_impact_environmental_impacts';
  info: {
    displayName: 'environmental_impact';
    icon: 'write';
  };
  attributes: {
    water_footprint: Attribute.String;
    energy_consumption: Attribute.String;
    recyclability: Attribute.String;
  };
}

export interface LayeringAndCombinationOptionsLayeringAndCombinationOptions
  extends Schema.Component {
  collectionName: 'components_layering_and_combination_options_layering_and_combination_options';
  info: {
    displayName: 'layeringAndCombinationOptions';
  };
  attributes: {};
}

export interface MaterialPropertiesProperties extends Schema.Component {
  collectionName: 'components_material_properties_properties';
  info: {
    displayName: 'properties';
    icon: 'layer';
    description: '';
  };
  attributes: {
    softness: Attribute.String;
    breathability: Attribute.String;
    warmth: Attribute.String;
    durability: Attribute.String;
    wrinkle_resistance: Attribute.String;
    sub_categories: Attribute.Relation<
      'material-properties.properties',
      'oneToMany',
      'api::sub-category.sub-category'
    >;
    moisture_wicking: Attribute.String;
    quick_drying: Attribute.String;
  };
}

export interface SeasonalThemesOptionsSeasonalThemesOptions
  extends Schema.Component {
  collectionName: 'components_seasonal_themes_options_seasonal_themes_options';
  info: {
    displayName: 'seasonalThemesOptions';
  };
  attributes: {};
}

export interface SizeAndFitOptionsSizeAndFitOptions extends Schema.Component {
  collectionName: 'components_size_and_fit_options_size_and_fit_options';
  info: {
    displayName: 'SizeAndFitOptions';
  };
  attributes: {};
}

export interface TextureOptionsTextureOptions extends Schema.Component {
  collectionName: 'components_texture_options_texture_options';
  info: {
    displayName: 'TextureOptions';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'accessories-options.accessories-options': AccessoriesOptionsAccessoriesOptions;
      'apparel-customization-details.customizable-attributes': ApparelCustomizationDetailsCustomizableAttributes;
      'customization-details.customization-details': CustomizationDetailsCustomizationDetails;
      'customization-options.customizations': CustomizationOptionsCustomizations;
      'environmental-impact.environmental-impact': EnvironmentalImpactEnvironmentalImpact;
      'layering-and-combination-options.layering-and-combination-options': LayeringAndCombinationOptionsLayeringAndCombinationOptions;
      'material-properties.properties': MaterialPropertiesProperties;
      'seasonal-themes-options.seasonal-themes-options': SeasonalThemesOptionsSeasonalThemesOptions;
      'size-and-fit-options.size-and-fit-options': SizeAndFitOptionsSizeAndFitOptions;
      'texture-options.texture-options': TextureOptionsTextureOptions;
    }
  }
}
