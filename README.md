# It's a Date!

<a name="Table of Contents"></a>

## Table of Contents

- [App Overview](#app-overview)
- [System Components](#system-components)
  - [1. Frontend](#1-frontend)
  - [2. Backend](#2-backend)
  - [3. Database & ORM](#database-and-orm)
  - [4. External API Usage](#4-external-api-usage)
    - [ Google Maps ](#google-maps)
- [Installation and Setup](#installation-and-setup)
  - [Required downloads](#required-downloads)
  - [Clone the Repository](#clone-the-repository)
  - [Navigate to the Project Directory](#navigate-to-the-project-directory)
  - [Database Setup](#database-setup)
  - [Setting up your .env](#setting-up-your-env)
  - [Adding Pusher](#adding-pusher)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
- [Getting Started](#getting-started)
- [API Documentation](#internal-api-documentation)

<a name="App Overview"></a>

## App Overview

"It's a Date!" – The Ultimate Connection App for Unforgettable Experiences Together

"It's a Date!" is the app that simplifies planning and brings you closer to your friends and partners. Say goodbye to endless messaging and indecisiveness, and hello to seamless coordination for your perfect date! Our app simplifies the process by offering 30 exciting date ideas for you to select from. Whether you're looking for a romantic dinner, an adventurous outdoor escapade, or a cozy movie night, we've got you covered. Invite your friend or partner to a date and they receive an instant notification. When both users choose the same plan, they instantly match and unlock a dedicated page with a detailed description, helpful suggestions, and a map of convenient locations. Users also have access to their notifications and personal profile to review pending invitations and reset their details. 

<a name="System Components"></a>

## System Components

<a name="frontend"></a>

### 1. Frontend

- ReactJS: We will utilize ReactJS to develop a responsive and user-friendly frontend interface. It will handle user interactions, display date ideas, date matches, and provide a seamless experience for our users.

<a name="backend"></a>

### 2. Backend

- Node.js: We will use Node.js for the backend to handle the logic of our application.

<a name="Database and ORM"></a>

### 3. Database & ORM

- MySQL & Sequelize: We will utilize MySQL as the database management system to store information about users, plans, events and selections. We will utilize Sequelize as the ORM to manage our interactions with the database.

<img src="Database Schema.png" width="600" alt="Database schema">

<a name="External API Usage"></a>

### 4. External API Usage

<a name="Google Maps"></a>

#### Google Maps

The Google Maps API is leveraged to display a map on each "match page" with the intention of adding Google Places pins on this map to suggest useful places related ot the chosen date idea.

<a name="Installation and Setup"></a>

## Installation and Setup

<a name="Required downloads"></a>

### Required downloads

- React.js
- MySQL
- Node.js
- NPM

<a name="Clone the Repository"></a>

### Clone the Repository

```
git clone https://github.com/codeop/fs26-group-B.git
```

<a name="Navigate to the Project Directory"></a>

### Navigate to the Project Directory

```
cd group-b-project
```


<a name="Database Setup"></a>

### Database Setup

Before you start, make sure you have MySQL installed on your system. If not, download and install it from [the official MySQL site](https://www.mysql.com/downloads/).

To set up the MySQL database, follow these steps:

1. Open your command line interface and start MySQL with this command:

   ```
   mysql -u root -p
   ```
     
2. Create the "planner" database with this command:
   
   ```
   CREATE DATABASE planner;
   ```
3. Connect to the new database with this command:
   
   ```
   use planner;
   ```

Now, you're ready to use your "planner" database.

<a name="Setting up your env"></a>

### Setting up your .env

Open up the repository in your preferred code editor and create a .env file in the project root directory. In this .env file add the following:

```
DB_HOST=localhost
DB_USER=root
DB_NAME=planner
DB_PASS= [your db password]

SUPER_SECRET=shhhhh

PUSHER_APP_ID=
PUSHER_KEY=
PUSHER_SECRET=
cluster=
```

Now create a .env file in the project root directory. In this .env file add the following:

```
VITE_PUSHER_KEY=
```

*Don't forget to create your .gitignore file and add .env (in both the root directory and client directory)!*

<a name="Adding Pusher"></a>

### Adding Pusher

To populate the Pusher details in your .env files:

1. Navigate to [Pusher](https://pusher.com/) and create an account.
2. Once logged in you should see your [Pusher dashboard](https://dashboard.pusher.com/). Here you need to click "manage" on the channels card.
3. Now you can click "Create app" in the top right of the page and fill in the form:
    - Fill in a name for the app (we used "its-a-date")
    - Select a cluster (we used eu)
    - You don't need to tick the box for "Create apps for multiple environments?"
    - Frontend: React
    - Backend: Node.js
4. Navigate to "App Keys" in the left nav and copy the keys you have generated into the .env files that you've just created.

<a name="Running the Backend"></a>

### Running the Backend

1. Open a new terminal 
2. Navigate to the project directory in the terminal and run the following command to install dependencies:

```
cd group-b-project
```

```
npm install
```

3. Set up the database:

```
npm run migrate
```

```
npm run seed
```

4. Start the application:

```
npm start
```

<a name="Running the Frontend"></a>

### Running the Frontend

1. Open a new terminal (do not close the terminal running the backend)
2. Navigate to frontend directory:

```
cd client
```

3. Install dependencies:

```
npm install
```

4. Start the application:

```
npm run dev
```


<a name="Getting Started"></a>

## Getting Started

Now *It's a Date!* should be accessible from [http://localhost:5173](http://localhost:5173/)
The backend will be running on [port 4000](http://localhost:4000/)


<a name="API Documentation"></a>

## Internal API Documentation

Here is a brief overview of the API endpoints available:

| Method   | URL                                | Description               |
| -------- | ---------------------------------- | ------------------------- |
| `POST`   | `/auth/register`                   | Register user             |
| `POST`   | `/auth/login`                      | Login user                |
| `POST`   | `/auth/profile`                    | Access logged in user info|

