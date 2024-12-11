# To-Do App

## About

A To-Do App that allows users to create and manage their tasks. It provides a simple and intuitive interface for users to add, edit, delete, and complete tasks.

## Features

### Task Management

- Add a new task.
- View tasks in different categories: All/Active/Completed tasks.
- Mark tasks as completed or uncompleted.
- Edit and delete tasks.
- Sort tasks by creation date.
- Progress Bar: Displays the percentage of completed tasks.

### Additional Functionalities

- Switch between light and dark themes.
- Displays current weather data based on the user's location.
- Store tasks in cookies.

## Weather Widget

### Custom Hooks

The app includes a custom useWeather hook that integrates the weather API into the app.

### Location/API

The application uses geolocation to determine the user's current position. After receiving the user's permission, it fetches the weather data from the Open-Meteo API.

## Technology Stack

- Frontend: React.js
- Styling: Styled-components & Material-UI (MUI)
- Testing: Jest & React Testing Library
- API: Open-Meteo
- Data Storage: Cookies
- Deployment: Netlify
