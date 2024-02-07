"use client";

import Image from "next/image";
// import css
import "./ManageProgress.css";

// icons
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

const ManageProgress = () => {
  return (
    <div>
      {/* main container */}
      <div className="flex flex-col md:flex-row mt-10">
        <div className="center">
          <h1>Progress Dashboard</h1>
          <div className="row1">
            <div className="card1">
              <div className="deadline">
                <span>deadline</span>
                <span>12:00 AM</span>
              </div>
              <div className="exam-unit">Workout - Module 5</div>
              <div className="description">Calisthenics for beginners</div>
              <div className="start-testing">
                <div className="members">
                  <div className="member">
                    <Image
                      width={100}
                      height={100}
                      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      alt="member"
                    />
                  </div>
                  <div className="member">
                    <Image
                      width={100}
                      height={100}
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                      alt="member"
                    />
                  </div>
                  <div className="member">
                    <Image
                      width={100}
                      height={100}
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      alt="member"
                    />
                  </div>
                  <div className="member">+8</div>
                </div>
                <div>
                  <a href="#">Start working out</a>
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="checkmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                  <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                </svg>
              </div>
              <h1>Modules</h1>
              <p>
                For today's <br /> lesson.
              </p>
            </div>
            <div className="card3">
              <div className="checkmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                  <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                </svg>
              </div>
              <h1>Running</h1>
              <p>
                250 steps per <br /> week.
              </p>
            </div>
          </div>
          <div className="row2">
            <div className="card1">
              <div className="header">
                <span>Group Info</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                </svg>
              </div>
              <div className="nr-of-students">13 members in the group</div>
              <div className="group-homework">
                <h1>Group challenges</h1>
                <p>
                  5 member from your group
                  <br />
                  online now
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </div>
              <div className="timetable-lesson">
                <span>Today's workout</span>
                <span>12:00</span>
              </div>
              <div className="unit-desc">Module 6 - Push ups</div>
            </div>
            <div className="card2">
              <div className="spanish-flag">
                {/* <Image width={300} height={300} src="https://freesvg.org/img/claudita-Flag-of-Spain.png"  alt="spanish flag"/> */}
                <DirectionsRunIcon fontSize="large" />
              </div>
              <h1>Cardio for beginners</h1>
              <div className="progress-bar">
                <div className="value">75%</div>
                <div className="bar">
                  <div className="filled"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row3">
            <div className="card1">
              <div className="edit-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </div>
              <div className="text">
                <h1>Schedule</h1>
                <p>+ 30 workout rules</p>
              </div>
              <div className="arrow-right-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="profile">
            <div className="profile-picture-wrapper">
              <Image
                width={200}
                height={200}
                src="https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg"
                alt="profile-picture"
              />
            </div>
            <h2>Chandler Bing</h2>
            <p>Pro Member</p>
          </div>
          <div className="card">
            <div className="text">
              <h2>Get -10% sell price</h2>
              <p>for Meditation course</p>
            </div>
            <div className="arrow-right-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </div>
          <div className="courses">
            <h1>Courses Progress</h1>
            <div className="course">
              <div className="complete-percentage">63%</div>
          
              <div className="description">
                <h2>Power Cardio</h2>
                <p>Grow your stamina.</p>
              </div>
            </div>

            <div className="course3">
              <div className="complete-percentage">34%</div>
              {/* <div className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <g />
                  <g>
                    <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z" />
                    <g>
                      <path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z" />
                      <path d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z" />
                      <path d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z" />
                    </g>
                  </g>
                </g>
              </svg>
            </div> */}
              <div className="description">
                <h2>Yoga</h2>
                <p>Become more flexible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManageProgress;
