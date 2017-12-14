# Flairoo Front-End Challenge

## Details to Implementation

* I am not using any kind of EventBus since I don't think it's necessary when using Vuex. Vue components are triggering events that can dispatch some actions. The Vuex store can listen to those actions and handling state modifications and side-effects appropriately. Adding EventBus would mean adding another source of truth and that's usually not what you want.
* I am using Bulma as CSS library of my choice <3.
* Usually I do more testing as I develop new features, but since I don't have too much of free time (with 2 kids at home), I have just skipped a lot of tests!
* I am using the Drag and Drop API which is supported by most of the current browsers, but will probably not work on mobile. Mobile applications should be specially designed to support drag&drop. For example NO scrollbars! To choose category on mobile I would suggest a `<select>` with categories for each user.
* Currently only `name`, `gender`, `name`, `company` and `address` are searchable, but it's configurable in `src/store/persons.js` file.

## Setup

``` bash
yarn install
```

## Run in Development Mode

Start mock middleware to sever persons.json:

``` bash
yarn start
```

It's basically a simple express sever that can server `persons.json` on `/api/persons` endpoint.

Start WebPack development server:

``` bash
yarn dev
```

## Build for Production

``` bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

**Production build will not properly fetch the persons data unless you configure your nginx to do so. I do not ship this code challenge with "production-ready" back-end server!**

## Testing

``` bash
# Run unit tests
yarn unit

# Run e2e tests
yarn e2e

# Run all tests
yarn test
```
