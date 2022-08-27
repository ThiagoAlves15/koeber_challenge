# Koeber Challenge

A interface that logins in a user from Auth0, searches for a user using the e-mail provided and loads the user posts, with the ability to add a new post.

## Functionalities:

 * Auth0 login: not available due to not authorized response, skipped for now.
 * Fetch user from API: enter user email from the available users in the list [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) to fetch the respective user posts. If no user is found, a alert mensage will be shown.
 * Create posts: after the current user is identified, click `Create post` button and enter post title and body, then click `Submit` button to create a new post at the top of the posts list.

## Available Scripts

### `npm install`

Start of by installing the project dependencies;

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
