const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

module.exports = {
  projects: {
    app: {
      schema: ['./schema.generated.graphql'],
      documents: ['./src/graphql/**/*.ts'],
      extensions: {
        endpoints: {
          default: {
            url: process.env.CMS_URL,
            headers: { Authorization: process.env.CMS_BEARER_TOKEN },
          },
        },
      },
    },
  },
};
