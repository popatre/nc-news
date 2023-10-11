# NC News - Front End/UI React App

NC News is a news aggregation client demo, built in React.js, along with Material UI/React Bootstrap components and Sass/SCSS.

This project aims to demonstrate some of the skills learnt in front end part of the Northcoders bootcamp, mostly dedicated to React subjects including:

-   React Virtual DOM
-   React Lifecycle
-   React Routing
-   Optimistic Rendering
-   Error Handling
-   API requests and handling/displaying response data

This front end application interacts with the back end NC News RESTful API created during the backend part of the course.

Details of the API may be found on Github: https://github.com/popatre/nc_news

A hosted version of the API can be found at: https://nc-news-ts.onrender.com/api

## Using NC News

A hosted version of the demo can be found at https://jmg-nc-news.netlify.app

The site is responsive with a mobile first approach, and uses Material UI breakpoints for different screen sizes.

### Functionality

**Home and Topic Routes**

On loading, the demo requests the current topics held on the backend API database. These are able to be selected to view the articles contained within each.
The topic can also be changed from the dropdown menu inside each topic>article display page.

On this page, the articles can sorted by:

-   date created
-   votes
-   comment count

Authorised users may also vote to like an article by using the heart icon. The amount of votes is displayed next to the icon.

A user can sign in my selecting the 'sign in' icon/text from the navbar. This account page will display the available usernames from the backend API.
Once selected, that user is logged in and their details will display in the account page.

**Individual Articles**

The Article component requests and displays an article based on the supplied route. It displays:

The full article & associated meta data:

-   author
-   publication date
-   topic
-   vote and comment counts
-   comments associated with the article

Authorised users may:

-   vote to like the article
-   publish comments on the article
-   delete their own comments
-   Add a new article
-   Create a new topic

**Errors**

Bad route errors result in the relevant 400/404 page.

Bad requests include:

-   Page route does not exist
-   Topic does not exist
-   Article Id does not exist

API errors result in the API error status code and message being displayed to the user.

## Installing a local copy of NC News

These instructions will help you to get a copy of NC News up and running on your local machine for testing purposes.

### Installing

Ensure you have [Node.js](https://nodejs.org/en/download/) version 14.16.0 (or higher) installed

Fork or clone the repository to you local machine: https://github.com/popatre/nc-news

Inside this directory, install the necessary npm packages by running the following code:

        $ npm install

To start the application, run the following code in the terminal:

        $ npm start

_If an error occurs in any of the previous two steps, ensure you are in the nc-news directory_

If successful, your browser should open http://localhost:3000.

### Built using

-   React.js
-   Sass
-   Material UI
-   React bootstrap
-   Axios

-   Here is a change ive made
