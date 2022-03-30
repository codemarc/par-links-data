#### `yarn start`
This starts the extension in development mode. Builds the extension in `dist` folder which can be loaded into chrome/firefox/edge.
This is not optimized for production and is configured for development with sourcemaps and HMR enabled.

#### `yarn build`
Builds the extension for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.


## Project structure

```
├── assets [For all images]
├── manifest.json
├── package.json
├── .parcelrc [Parcel config]
└── src
    ├── components [common components to be used across react apps]
    ├── pages [The entry point for different react apps in the extension]
    │   ├── Content [App to be injected to content page using]
    │   │   └── index.js
    │   └── Popup [App for popup]
    │       └── index.js
    │   └── Options [App for options]
    │       └── index.js
    ├── scripts
    │   ├── background.js [Background Script]
    |   └── content.js [Inject react app and other operations]
    └── static [HTML entry point for different part of the extension]
        └── popup.html
        └── options.html
```

