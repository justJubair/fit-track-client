----

# FitTrack

FitTrack aims to be a user-friendly fitness app for health enthusiasts and athletes. It provides personalized diet and workout plans, engaging exercise modules, video tutorials, AI guidance, and fun competitions to motivate users.

- [client site](https://fit-track-client.vercel.app)
- [server site](https://fit-track-server.vercel.app/health)

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features

1. **Customized Diet and Workout Plan:**
   - Plans are tailored based on individual preferences, health goals, dietary restrictions, and fitness levels.
   
2. **Module-Based Exercise Plan:**
   - Users unlock new modules upon completing the previous ones.
   - Modules include a balanced combination of cardio, strength, flexibility, and endurance exercises.
   
3. **Video Tutorial of Workout Plans:**
   - Professional trainers demonstrate correct form, proper technique, and variations.
   
4. **AI Chatbot Guidance:**
   - Learns from user feedback and adjusts recommendations based on individual progress.
   
5. **Direct video calling with Trainers:**
   - Users can connect with trainers via in-app video calls.
   - Professional and experienced trainers are available; users can easily send a connect request to any specific trainer, and that trainer will get a live notification of that request.
   
6. **Dashboard:**
   - Role-based user dashboard for Admin, trainers, and regular users.
   
7. **Event-Based Workout Challenges:**
   - Regularly hosted workout challenges to motivate users and foster a sense of community.
   
8. **Users Blog Section:**
   - A dedicated space for users to share fitness journeys, experiences, tips, and success stories.
   
9. **BMI Calculator:**
   - Any user can easily get their accurate BMI via our BMI calculator.
   
10. **Payment Gateway Integration:**
    - Ensures a seamless and secure payment experience for premium users.
    
11. **Workout Timer:**
    - Built-in timer enhances precision during exercise sessions.


## Screenshots

#### Home page
![Home Page](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/HomePage.png)

---
#### AI Personal Trainer
![Ai personal trainer](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/Chatbot.png)

---
#### Services
![Services](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/Services.png)

---
#### BMI Calculator
![BMI calculator](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/BMICalc.png)

---
#### User Dashboard
![User dashboard](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/UserDashboard.png)

---
#### User Analytics
![User analytics](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/UserDashboard02.png)

---
#### Video Call Room
![post a blogs](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/VideoCallRoom.png)

---
#### Video Call Demo
![post a blogs](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/VideoCall.png)

---
#### Challenges Page 
![Challenges home page](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/ChallengesBanner.png)

---
#### Workout Challenges
![workout challenges](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/Challenges.png)

---
#### Workout Modules
![workout modules](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/Module.png)

---
#### Post A Blog
![post a blogs](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/BlogBanner.png)

---
#### Blogs
![blogs](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/Blogs.png)

---
#### Become A Trainer
![be a trainer](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/BeATrainer.png)

---
#### Trainers
![trainers](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/TrainersPage.png)

---
#### Pricing
![be a trainer](https://raw.githubusercontent.com/justJubair/fit-track-client/main/src/assets/readMeAssets/Pricing.png)


## Getting Started

To get started with the project, follow the steps below:

### Dependencies

Make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   https://github.com/justJubair/head-count.git
   ```

2. Navigate to the project directory:

   ```bash
   cd head-count
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```
4. Update the .env.local file with your own imgBB api key

```bash
VITE_ImgbbURL=https://api.imgbb.com/1/upload?expiration=600&key=Your_API_key
```

### Usage

1. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Open the application in your browser: [http://localhost:5173](http://localhost:5173)

## Contributing

If you'd like to contribute to the project, please follow the steps below:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.


## Acknowledgements

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [DaisyUI](https://daisyui.com/)
- [imgBB API](https://imgbb.com)