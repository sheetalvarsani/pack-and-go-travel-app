
# Pack & Go - The Travel Bucket List Project

## Welcome to the  **Travel Bucket List  project!** 

 This application helps you **organize** and **track** your travel dreams and adventures. 
 Whether you're an *avid traveler* or someone with a growing _wanderlust_, this app is designed to make your travel aspirations come to life.
---

# Getting Started

Follow these steps to set up and run the project on your local machine.

## Prerequisites

Make sure you have the following installed:

- Node.js and npm - [Download and Install Node.js](https://nodejs.org/)
- Git - [Download and Install Git](https://git-scm.com/)

 ## Collaborators Clone the Repository:
```
git clone https://github.com/movi1/the-last-project-cfg.git
```
---

##  Navigate to the project folder:

```
cd the-last-project-cfg
```
## Install Dependencies:

+ Inside project folder, install dependencies:
```
npm install
```
## Open the Project in Your Code Editor If you're using Visual Studio Code:
```
code .
```

## Set Up Environment Variables

### Option 1: For Windows Users:
```
npm run windows:env
```
- Open the .env file.

---

### Option 2: For GIT BASH, Linux, or Mac Users
```
npm run create:env
```
- Open the .env file.

---

### Option 3: Manually Locate and Copy
- Navigate to the "backend" folder.
- Locate the .env.example file.
- Copy it and rename the copy to .env.
- Open the .env file.

---

# Fill in Database Connection Details


## In the opened .env file, provide the necessary information for your database connection:

DB_HOST=localhost

DB_USER=myuser

DB_PASSWORD=mypassword

DB_DATABASE=mydatabase

PORT=3306

---

 ### Adjust the values according to your database configuration.

---

# Install Database and Start the Project
## In the root directory of the project, run the following commands:

```
npm run install:database
```

---
## Start the Development Server:

+ After installing dependencies, collaborators can start the development server:
```
npm start
```
---

## Make changes

### Committing Changes 

* Check the status (optional):

```
git status
```
---
* Add, commit, and push changes to the main repository:

```
git add .
git commit -m "Descriptive commit message"
git push 
```

## Color and Font Legend

## Colors Used

- **Light Gray:** #f4f4f4
- **Charcoal:** #22333b
- **Dark Khaki:** #5e503f
- **Camel:** #C6AC8F
- **White:** #ffffff
- **Black:** #0A0908
- **Champagne:** #eae0d5
- **Google Blue:** #4285f4
- **Gainsboro Gray:** #f0f0f0
- **Shadowy Black:** rgba(0, 0, 0.5, 0.5)
- **Shadowy Brown:** rgb(94, 80, 63)

## Responsive Design
- Mobile View (max-width: 600px)
- Tablet View (min-width: 601px) and (max-width: 1024px)
- Laptop and Desktop View (min-width: 1025px)
### Fonts:
The application uses the following fonts:

- **Raleway**
- **EB Garamond** 

# Project Structure

## Backend

The backend of the project follows a modular structure with the following main components:

- **prisma:**
  - **migration:** 
     + Contains files responsible for defining and applying changes to the database schema.
     + Each file represents a migration, containing SQL instructions for creating or modifying tables and relationships.
  - **schema.prisma:** 
    + Outlines the structure of the 'users' table, serving as a blueprint for organizing user-related data in the MySQL database.
    + Generates a JavaScript client for smooth interaction with the database.
  - **index.js:**
    + Entry point for a Node.js Express application with user authentication endpoints and MySQL database connection setup..
  - **middleware.js:** 
    +  Configures CORS for secure cross-origin communication and sets up JSON parsing middleware to handle incoming request data in the backend.
  - **webpack.config.js:**
    + Sets up the development environment for the client-side application, defining rules for JavaScript, JSX, and CSS files.

## Frontend

The frontend of the project follows a modular structure with the following main components:

- **components:**
  - **about:** React component for displaying information about the project or team.
  - **bucket-list:** React component for managing the user's travel bucket list.
  - **contact-us:** React component for the contact us page.
  - **faq-page:** React component for frequently asked questions.
  - **footer:** React component for the footer section of the application.
  - **header:** React component for the application's header and navigation.
  - **home:** React component for the homepage or landing page.
  - **login:** React component for user login functionality.
  - **map:** React components related to mapping functionality.
  - **pack-list:** React component for managing packing lists.
  - **testimonial-carousel:** React component for displaying testimonials.
  - **weather:** React components for displaying weather information.
  - **weatherCTA:** React component for weather-related calls-to-action.

- **tests:**
  - Test files for unit or integration testing.




