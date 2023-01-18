'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'filterButton',
    plugin: 'filter-button',
    type: 'string',
  })
};
