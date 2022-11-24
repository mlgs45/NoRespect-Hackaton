# Hackaton - wild Code School

##  Envisioned Journey

This project was developed during a hackathon organized by the Wild Code School around the theme of travel. 
The instructions were to create our site with the React library and to use a public API. 
We decided to create a travel booking website. By specifying a destination or not, a budget, the number of travelers and their interests, the user can book a "turnkey" trip. 
The application proposes a series of activities, hotels, restaurants and associated means of transport, day by day. 
An ecological dimension was retained for choosing the transportation. 
To realize this project, we used the MapQuest API (https://www.mapquest.com/).
The name of the application: Envisioned Journey.

### Wireframes

![alt text](./frontend/src/assets/img/wireframes/home.png)
![alt text](./frontend/src/assets/img/wireframes/quiz.png)
![alt text](./frontend/src/assets/img/wireframes/travel.png)
![alt text](./frontend/src/assets/img/wireframes/contact.png)

### Logo

![alt text](./frontend/src/assets/img/envisioned_logo.svg)

### Font & Colors

- Font: Lato
  
- BackgroundColor: #e8e0e0;
- BackgroundColor header and footer: #202020;
- Others : #AED768
- Others : #975AB6
- Others : #171212

### Dependancies
- Axios
- React-router-dom
- React-burger-menu
- React-toastify
- React-lottie-player

## Setup & Use

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `dev` : Starts both servers in one terminal
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated

