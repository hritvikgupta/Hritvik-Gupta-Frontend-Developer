# SpaceX Explorer

This is a project built with [React](https://reactjs.org/), [Bootstrap](https://react-bootstrap.netlify.app/), [Tailwind CSS](https://tailwindcss.com/), and other technologies like  to display data about SpaceX's rockets, capsules, and other assets. The data comes from [SpaceX's open-source API](https://docs.spacexdata.com/).


https://github.com/hritvikgupta/Hritvik-Gupta-Frontend-Developer/assets/60143996/a4c854f5-79cc-4759-9508-128a4d6d02b0




## About SpaceX

SpaceX is a private American aerospace manufacturer and space transportation company founded in 2002 by Elon Musk. They have open-sourced their data, which is available at [SpaceX Data](https://docs.spacexdata.com/).



## Project Description

This project aims to build an interactive web application that utilizes the SpaceX Data API to provide information about SpaceX's various activities, missions, and assets.

## Features

- A landing page displaying data about either Rockets or Capsules.
- An authorized REST API built in PHP to fetch and send data between SpaceX and the app.
- Search functionality for users to find capsules by status, original launch, and type.
- A data grid with an elegant design and pagination displaying the right amount of data.
- Responsive design that works across all screen sizes and browsers.

## Main Components

Here's a list of the main components in the project:

- `App.js`: This is the main component that renders the application.
- `components/`: This directory contains various React components used throughout the application.
- `Contexts/`: This directory contains the context provider used to share state across the application.
- `hooks/`: This directory contains custom React hooks.
- `pages/`: This directory contains the components for each page in the application.
- `testing/`: This directory contains tests for the components.

## In Depth Project Structure

Here's a brief description of the main directories and files in the project:

- `node_modules/`: This directory contains all the Node.js packages (dependencies) for the project.
- `package-lock.json`: An automatically generated file that is used to lock the versions of the project's dependencies.
- `package.json`: A file that lists the project's dependencies and defines scripts for common tasks.
- `postcss.config.js`: Configuration file for PostCSS, a tool for transforming CSS.
- `public/`: This directory contains static files that are not processed by Webpack (the bundler used by Create React App).
- `src/`: This directory contains all the JavaScript source code for the project.
  - `App.js`: The main component that renders the application.
  - `index.js`: The entry point for the application.
  - `index.css`: The main stylesheet for the application.
  - `components/`: Directory containing various React components used throughout the application.
    - `Header.js`: Renders the header of the application.
    - `LoadingState.js`: Renders a loading state when data is being fetched.
  - `Contexts/`: Directory containing the context provider used to share state across the application.
    - `AuthProvider.js`: Provides user authentication context.
  - `hooks/`: Directory containing custom React hooks.
    - `useCapsuleSearch.js`: Provides a function for searching capsules.
    - `useCompany.js`: Fetches and provides company information.
    - `useFetch.js`: A generic hook for fetching data.
    - `useRoutes.js`: Handles routing.
  - `pages/`: Directory containing the components for each page in the application.
    - `Capsules.js`: Renders information about capsules.
    - `Cores.js`: Renders information about cores.
    - `Crew.js`: Renders information about crew members.
    - `Dragons.js`: Renders information about dragons.
    - `Error.js`: Renders error messages.
    - `Homepage.js`: Renders the homepage.
    - `Landpads.js`: Renders information about landing pads.
    - `Launches.js`: Renders information about launches.
    - `Launchpads.js`: Renders information about launch pads.
    - `MissionLaunch.js`: Renders information about specific missions.
    - `Payloads.js`: Renders information about payloads.
    - `RecentMissions.js`: Renders information about recent missions.
    - `Roadster.js`: Renders information about the Roadster.
    - `Rockets.js`: Renders information about rockets.
    - `Ships.js`: Renders information about ships.
    - `SingleCrew.js`: Renders detailed information about a specific crew member.
    - `SingleDragon.js`: Renders detailed information about a specific dragon.
    - `SingleLandPad.js`: Renders detailed information about a specific landing pad.
    - `SingleLaunch.js`: Renders detailed information about a specific launch.
    - `SingleLaunchPad.js`: Renders detailed information about a specific launch pad.
    - `SingleRocket.js`: Renders detailed information about a specific rocket.
    - `SingleShip.js`: Renders detailed information about a specific ship.
    - `Starlink.js`: Renders information about Starlink.
  - `testing/`: Directory containing tests for the components.
    - `Header.test.js`: Contains tests for the Header component.
- `tailwind.config.js`: Configuration file for Tailwind CSS, a utility-first CSS framework.
- `README.md`: This file, which provides an overview of the project.


## Installation and Usage

To run this project, you'll need Node.js and npm installed on your computer. From your command line:

1. Clone this repository:
git clone https://github.com/hritvikgupta/spacex-project.git
2. Navigate into the project directory:
cd spacex-project
3. Install the project dependencies:
npm install
4. Start the project:
npm start
The project should now be running at `localhost:3000`.

## Testing

To run the tests for the components, use the following command:

npm test

## Contribution and Issues

Feel free to contribute to this project by submitting a pull request. If you find any issues or have suggestions for improvements, please submit an issue.

## License

This project is open source and available under the [MIT License](https://choosealicense.com/licenses/mit/).

## Note

This project is part of a technical assignment and is confidential. Please do not share or distribute the code.
