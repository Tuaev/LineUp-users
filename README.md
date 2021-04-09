# Line-Up fetch users

## Built with

- [Material-UI](https://material-ui.com/)

  - Large component base, accessability, reponsiveness and supports internationalisation. Uses its own variation of styling components that is similar to the styled-components package.

- [React-Query](https://react-query.tanstack.com/overview)

  - Completely replaces the need for Redux when fetching data.
  - "While most traditional state management libraries are great for working with client state, they are not so great at working with async or server state. This is because server state is totally different." - Tanner Linsley (Creator)

- [React Hook Form](https://react-hook-form.com/)
  - I thought I'd add an extra feature to create a user using the api's POST request.
  - React Hook Form makes it bareable to make forms in React. It reduces the amount of code you need to write, and removing unnecessary re-renders are some of its primary goals.

## Folder Structure

- api
  - Holds all of the API urls that are used across the app.
- components
  - Holds all of the reusable app components
- layout (containers)
  - Resusable app layouts
- theme
  - Material-UI files related to custom theming
- utils
  - Universal utilities for the app such as setting up Axios instance
- views (pages)
  - All of the app pages/screens that are rendered

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the app

   ```sh
   npm start
   ```

## Live versions

You can view the live version of the app on:

1. Netlify: https://lineupusers.netlify.app/

## Misc

- This folder structure and Routes.js setup is how I would start propjects that will grow over time.
- The code is self explanatory. I didn't add to many comments just because it clutters everything
- Added suspense just for the sake of showing it. So while data is being fetched a page loader is displayed (Not my favourite way of doing this)
- Added jsconfig for to replace relative paths ../../ etc with absolute paths src/
- Using Material-UI because im more familar with it than Grommet.io
- Added an extra feature to create new users to shows the power of React-Query and it's invalidation(Quick way to refetch data after an edit/update).
