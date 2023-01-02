Simple todo application, written with React.js

State management is done by using Redux; in some cases where state is only needed locally, state hook from React is used instead 

React-router is used for routing.

Several other libraries are used for styling (e.g. react-dropdown for usernames dropdown menu, mui for todo card, etc.)

To run the project: 

after cloning the repository, run "npm install", then run "npm start".

Project structure : 

The main code is written in src folder, which has App.js and index.js (for initial view of the website), and 3 subdirectories : 

"components" subfolder for react components

"redux" subfolder for state management files

"css" subfolder for styling files
  
Page composition : whenever a component is updated, only that component is re-rendered, and the rest of the page is not rendered. (e.g. modifying a todo list of some 

user only re-render the list itself, while other components, like button for creating new todo item is not re-rendered).
