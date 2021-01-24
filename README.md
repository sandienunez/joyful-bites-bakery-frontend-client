# Joyful Bites Bakery 

<img width="639" alt="JBlogo" src="https://user-images.githubusercontent.com/61069416/105638769-a7bd8500-5e42-11eb-9736-cb12b9273724.jpg">

Welcome to the Joyful Bites Bakery App! This is my final project for the Flatiron School. It allows clients to create and save bakery orders, as well as delete any order that was previously made. This repository contains the React/Redux frontend of the project.

## Backend

The backend for the Joyful Bites Bakery App can be found [here](https://github.com/sandienunez/joyful-bites-bakery-backend).

## Inspiration 

My objective was to create an incredibly healthy, sustainable and whole bakery with treats that make people feel good. As a person who has suffered  from dairy and gluten allergies, I know first hand the difficulty of finding delicious deserts that do not make you feel sick, sluggish, bad about yourself, tired and leave you with an awful sugar crash. When my father was diagnosed with pre-diabetes and extra high cholesterol, I set out on a mission to create the most delicious baked goods that are not only nutritious, dairy-free, gluten-free , anti-inflammatory and low-glycemic but give you the energy you need to do the work God has called you to do. 

You do not have to sacrifice "yummy-in-my-tummy" moments or give up your sweet tooth cravings. Everyone deserves the right to enjoy treats, cookies, cakes, fresh-made breads and deserts. Baked goods are meant to make you smile, meant to be shared with the special people in our lives and help make our family/friend celebrations sweeter. Joyful Bites encompasses what America's heart is a lot about, helping your neighbor and serving others. That's why for every one treat you buy, one is given to someone in need. 

## Demo & Blog Post

* [Click Here](https://www.youtube.com/watch?v=u2vA5oPlYN0&feature=youtu.be) to view a demo of the Joyful Bites Bakery App.
* to read my blog post about the Joyful Bites Bakery app.

## Installation 

Follow these steps to start up the Joyful Bites Bakery app:

1. Fork and clone this repository onto your own computer and run `cd joyful_bites_bakery_client`.
2. Navigate to the backend repository and follow the installation instructions, up to and including starting the Rails server.
3. From the `joyful_bites_bakery_client` directory, run `npm install` and `npm start` or `yarn-start`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You're all set to use this app!

## Usage

The Joyful Bites Bakery app is a single-page application that serves two main purposes: Clients can both create and save bakery orders, as well as delete orders previously made and view all the client summaries or list order objects. Clients can also visit 8 different routes including clicking to read the bakery menu items for the day, about us, our story, contact information and see all of the orders made in the Joyful Bites Community Order Feed on each route rendered in the Parents app component. 

Once the app loads, you can do any of the following:

1. Click on the "Menu" tab to see which baked good selection you will make. Create a new bakery order by navigating to the "New Order" page and filling out the form. 
   * On that form, you can fill out the client name, fill in the date the order was created, the quantity of baked goods wanted and select which specific baked goods you want to add to your order.
   * You can also delete a client order with the "Delete" button. 
2. Once you submit the form, you can click on the "Client Orders" page to see your full client order data displayed. 
3. You also have the option of deleting any of your client orders; just click on its "Delete" button.

## Concepts Utilized in app:

* ES6 syntax/higher-level methods => arrow functions, map, filter, spread operator.
* Create-react-app generator to start project
* Index.js page HTML page renders my react-redux application
* 5 stateless components
* 8 routes
* React-router and proper RESTful routing 
* Redux middleware to respond to and modify state change
* Async actions and redux-thunk middleware to send data to and receive data from a server.
* Rails API handles my data persistence with a database. 
* Use fetch within my actions to GET and POST data from my API
* Client-side application handles the display of data with minimal data manipulation
* Hooks to create like/thumbs down component functionality

## Built With

* Ruby on Rails
* JavaScript
* React
* Redux
* Thunk 
* HTML, CSS


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/sandienunez/joyful-bites-bakery-frontend-client. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
MIT © https://github.com/sandienunez 

## Code of Conduct

Everyone interacting in Joyful Bite’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the https://github.com/sandienunez/joyful-bites-bakery-frontend-client/blob/master/app/CODE_OF_CONDUCT.md

## Development Notes

In addition to the Node packages provided by Create React App, the following packages were used:
  * [Redux](https://redux.js.org/)
  * [React Redux](https://react-redux.js.org/)
  * [Redux Thunk](https://github.com/reduxjs/redux-thunk)
  * [React Router](https://reactrouter.com/web/guides/quick-start)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

