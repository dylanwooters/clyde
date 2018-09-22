# clyde
```
    /\__/\
   /`    '\
 === 0  0 ===
   \  --  /
  /        \
 /          \
|            |
 \  ||  ||  /
  \_oo__oo_/#######o
```

A full-stack TypeScript boilerplate project. Includes:

* __clyde-web__: An Angular front-end with a sample service that connects to the back-end.
* __clyde-api__: A TypeScript REST API for the back-end.
* __clyde-common__: A place to hold shared TypeScript models.

## clyde-web docs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## clyde-api docs

### Initial setup
```
npm install
```

### Swagger Docs Generation

```
npm run swagger
```

### Run project
```
npm start
```

### Run project with nodemon to watch changes
```
nodemon
```

### Start project in cluster
```
npm start:cluster
```

### Test

```
npm run test
```

### Test with coverage reports:

```
npm run test:coverage
```

The coverage report will be saved under ```./coverage``` folder.

### Generate Docs

```
npm run doc
```

The project documentation will be saved under ```./doc``` folder.

## credits

The clyde-api project is [typescript-rest-boilerplate](https://github.com/vrudikov/typescript-rest-boilerplate) with some slight modifications.
