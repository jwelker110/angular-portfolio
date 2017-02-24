# Portfolio

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

Checkout the live version [here](http://jwelker.com).

## Setup
1. [clone](https://github.com/jwelker110/ng2-portfolio.git) or [download](https://github.com/jwelker110/ng2-portfolio/archive/master.zip)
this repository.
2. `cd` to the project root. You will need to have typescript installed.
`npm install -g typescript`.
3. Follow the angular-cli installation [instructions](https://github.com/angular/angular-cli#installation).
4. Run `npm install` after you install angular-cli.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Adjusting the colors
1. Colors are stored in _styles/\_colors.scss_. Change the value of _$theme-highlight-color_ to change the 
project-wide color.
2. A "Dark Theme" has been included as well, and is disabled by default. To enable it, open 
_styles/\_variables.scss_ and uncomment `//@import "themes/dark";`
3. The colors provided consist of a "dark", "neutral", and "light" variant for most of them. Use "light"
colors in combination with the "Dark Theme" and "dark" colors with the default theme. Neutral colors tend
to look fine paired with either theme.

### Dark Theme
<img max-width="100%" src="https://github.com/jwelker110/ng2-portfolio/blob/master/src/assets/screenshots/theme-dark.png" >

### Default Theme
<img max-width="100%" src="https://github.com/jwelker110/ng2-portfolio/blob/master/src/assets/screenshots/theme-default.png" >
