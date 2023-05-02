## [Tutorial Link](https://www.youtube.com/watch?v=asB-dUwpH4Y)

## Setup Notes

### Local Gatsby Setup

```
npm install
gatsby clean && gatsby develop
```

### Local Strapi (V3) Setup
```
npx create-strapi-app@3.6.8 cronit-strapi --quickstart
npm run develop
```

### Strapi Provider Upload Cloudinary
[NPM package](https://www.npmjs.com/package/strapi-provider-upload-cloudinary)

1. Install Package
```
npm i strapi-provider-upload-cloudinary
```

2. In strapi codebase, create a file ./config/plugins.js and add the following config
```
module.exports = {
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: 'cloud_name',
      api_key: 'api_key',
      api_secret: 'api_secret',
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
};
```

### Other notes
1. All components ready to go (including imports)
2. Use main.css - less imports
3. Limit amount of components - better overview
4. React Icons

[react icons] https://react-icons.github.io/react-icons/

```javascript
import { FaHome } from "react-icons/fa"
const Component = () => {
  return <FaHome className="icon"></FaHome>
}
```

5. Use constants to avoid repetition.

6. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```
