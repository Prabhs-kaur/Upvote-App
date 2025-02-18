React Upvote System

A simple React application to manage upvotes on multiple lists. Users can toggle individual upvotes, toggle all upvotes for a list, and add new upvote buttons dynamically.

Features: 
-Upvote List: Create multiple lists with upvote buttons.
-Toggle Upvote: Toggle upvotes for each item in the list.
-Toggle All Upvotes: Toggle all upvotes in the list at once.
-Add Upvote: Add a new upvote button to a list.

Installation:

1. Clone the repository: git clone 
2. Navigate to the project directory: cd upvote-system
3. Install the required dependencies: npm install
4. Start the development server: npm start

Usage:
-The app contains two lists: list1 and list2, each with an initial set of upvote buttons.
-Each upvote button can be toggled on/off by clicking.
-You can add more upvote buttons to any list by clicking the "+" button.

Technologies Used:
-React
-useState, useEffect, useContext (React Hooks)
-localStorage for persisting the upvote state

How it Works:
-The UpvoteContext is used to manage the state of the upvote buttons across lists.
-The state is persisted in the browser's localStorage, allowing upvotes to be retained between page reloads.
-The UpvoteProvider component provides the state and functions for toggling upvotes, adding new upvotes, 

Testing
-This project includes unit tests using **jest** and **React Testing Library**.

>>>> Running Test

To run the tests, use the following command:

- npm test

What This Test Does
-It renders the Upvote component.
-It simulates a click on the button.
-It checks if the onClick function is called, ensuring that the selection toggles correctly.

