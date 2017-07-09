# Angular Material
    $ npm install -save @angular/material
    $ npm install -save @angular/animations
    $ npm install -save @angular/cdk

# Import in app.module.ts
    import { MaterialModule } from '@angular/material';

# Add css in index.html
    <link href="node_modules/@angular/material/prebuilt-themes/indigo-pink.css" rel="stylesheet">


# Add config in systems.config.js
    '@angular/material' : 'npm:@angular/material/bundles/material.umd.js'
    '@angular/cdk' : 'npm:@angular/cdk/bundles/cdk.umd.js',
    '@angular/animations' : 'npm:@angular/animations/bundles/animations.umd.js',
    '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations',
    'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js'
   