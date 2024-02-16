"use client";

import { Box } from "@mui/system";
import "./DashboardHome.css";
import Image from "next/image";
import { Typography } from "@mui/material";

// icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';


const DashboardHome = () => {
  return (
    <>
      <Box className="content">
        <Box className="left-content">
          <Box className="activities">
            <Typography variant="h5" fontWeight="bold" marginBottom="1rem">Popular Activities</Typography>
            <Box className="activity-container">
              <Box className="image-container img-one">
                <Image
                  width={500}
                  height={500}
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd"
                  alt="tennis"
                />
                <Box className="overlay">
                  <h3>Tennis</h3>
                </Box>
              </Box>

              <div className="image-container img-two">
                <Image width={500} height={500}
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3bab6a71-c842-4a50-9fed-b4ce650cb478"
                  alt="hiking"
                />
                <div className="overlay">
                  <h3>Hiking</h3>
                </div>
              </div>

              <div className="image-container img-three">
                <Image width={500} height={500}
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c8e88356-8df5-4ac5-9e1f-5b9e99685021"
                  alt="running"
                />
                <div className="overlay">
                  <h3>Running</h3>
                </div>
              </div>

              <div className="image-container img-four">
                <Image width={500} height={500}
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/69437d08-f203-4905-8cf5-05411cc28c19"
                  alt="cycling"
                />
                <div className="overlay">
                  <h3>Cycling</h3>
                </div>
              </div>

              <div className="image-container img-five">
                <Image width={500} height={500}
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e1a66078-1927-4828-b793-15c403d06411"
                  alt="yoga"
                />
                <div className="overlay">
                  <h3>Yoga</h3>
                </div>
              </div>

              <div className="image-container img-six">
                <Image width={500} height={500}
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7568e0ff-edb5-43dd-bff5-aed405fc32d9"
                  alt="swimming"
                />
                <div className="overlay">
                  <h3>Swimming</h3>
                </div>
              </div>
            </Box>
          </Box>

          <div className="left-bottom">
            <div className="weekly-schedule">
              <h1>Weekly Schedule</h1>
              <div className="calendar">
                <div className="day-and-activity activity-one">
                  <div className="day">
                    <h1>13</h1>
                    <p>mon</p>
                  </div>
                  <div className="activity">
                    <h2>Swimming</h2>
                    <div className="participants">
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf"
                        style={{ "--i": 1 }}
                        alt="user01"
                      />
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/90affa88-8da0-40c8-abe7-f77ea355a9de"
                        style={{ "--i": 2 }}
                        alt="user02"
                      />
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07d4fa6f-6559-4874-b912-3968fdfe4e5e"
                        style={{ "--i": 3 }}
                        alt="user03"
                      />
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e082b965-bb88-4192-bce6-0eb8b0bf8e68"
                        style={{ "--i": 4 }}
                        alt="user04"
                      />
                    </div>
                  </div>
                  <button className="btn">Join</button>
                </div>

                <div className="day-and-activity activity-two">
                  <div className="day">
                    <h1>15</h1>
                    <p>wed</p>
                  </div>
                  <div className="activity">
                    <h2>Yoga</h2>
                    <div className="participants">
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf"
                        style={{ "--i": 1 }}
                        alt="YogaUser01"
                      />
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/32037044-f076-433a-8a6e-9b80842f29c9"
                        style={{ "--i": 2 }}
                        alt="YogaUser02"
                      />
                    </div>
                  </div>
                  <button className="btn">Join</button>
                </div>

                <div className="day-and-activity activity-three">
                  <div className="day">
                    <h1>17</h1>
                    <p>fri</p>
                  </div>
                  <div className="activity">
                    <h2>Tennis</h2>
                    <div className="participants">
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/32037044-f076-433a-8a6e-9b80842f29c9"
                        style={{ "--i": 1 }}
                        alt="TennisUser01"
                      />
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e082b965-bb88-4192-bce6-0eb8b0bf8e68"
                        style={{ "--i": 2 }}
                        alt="TennisUser02"
                      />
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf"
                        style={{ "--i": 3 }}
                        alt="TennisUser03"
                      />
                    </div>
                  </div>
                  <button className="btn">Join</button>
                </div>

                <div className="day-and-activity activity-four">
                  <div className="day">
                    <h1>18</h1>
                    <p>sat</p>
                  </div>
                  <div className="activity">
                    <h2>Hiking</h2>
                    <div className="participants">
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07d4fa6f-6559-4874-b912-3968fdfe4e5e"
                        style={{ "--i": 1 }}
                        alt="HikingUser01"
                      />
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/32037044-f076-433a-8a6e-9b80842f29c9"
                        style={{ "--i": 2 }}
                        alt="HikingUser02"
                      />
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07d4fa6f-6559-4874-b912-3968fdfe4e5e"
                        alt="HikingUser03"
                      />
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf"
                        style={{ "--i": 4 }}
                        alt="HikingUser04"
                      />
                      <Image width={100} height={100}
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/90affa88-8da0-40c8-abe7-f77ea355a9de"
                        style={{ "--i": 5 }}
                        alt="HikingUser05"
                      />
                    </div>
                  </div>
                  <button className="btn">Join</button>
                </div>
              </div>
            </div>

            <div className="personal-bests">
              <h1>Personal Bests</h1>
              <div className="personal-bests-container">
                <div className="best-item box-one">
                  <p>Fastest 5K Run: 22min</p>
                  <Image width={120} height={100}
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/242bbd8c-aaf8-4aee-a3e4-e0df62d1ab27"
                    alt="RunLogoBanner"
                  />
                </div>
                <div className="best-item box-two">
                  <p>Longest Distance Cycling: 4 miles</p>
                  <Image width={100} height={100}
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a3b3cb3a-5127-498b-91cc-a1d39499164a"
                    alt="Cycling logo"
                  />
                </div>
                <div className="best-item box-three">
                  <p>Longest Roller-Skating: 2 hours</p>
                  <Image width={120} height={100}
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e0ee8ffb-faa8-462a-b44d-0a18c1d9604c"
                    alt="Roller skating logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </Box>

        <div className="right-content">
          <div className="user-info">
            <div className="icon-container">
             <NotificationsIcon/>
             <MessageIcon/>
            </div>
            <div className="flex items-center gap-4">
            <h4>Kelsey Miller</h4>
            <Image width={100} height={100}
               src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/40b7cce2-c289-4954-9be0-938479832a9c"
              alt="user"
            />
            </div>
          </div>

          {/* <div className="active-calories">
            <h1 style={{ alignSelf: "flex-start" }}>Active Calories</h1>
            <div className="active-calories-container">
              <div className="box" style={{ "--i": "85%" }}>
                <div className="circle">
                  <h2>
                    85<small>%</small>
                  </h2>
                </div>
              </div>
              <div className="calories-content">
                <p>
                  <span>Today:</span> 400
                </p>
                <p>
                  <span>This Week:</span> 3500
                </p>
                <p>
                  <span>This Month:</span> 14000
                </p>
              </div>
            </div>
          </div> */}


            {/* Mobile phone */}
          {/* <div className="mobile-personal-bests">
            <h1>Personal Bests</h1>
            <div className="personal-bests-container">
              <div className="best-item box-one">
                <p>Fastest 5K Run: 22min</p>
                <Image width={120} height={100}
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/05dfc444-9ed3-44cc-96af-a9cf195f5820"
                  alt="Fastest run mobile"
                />
              </div>
              <div className="best-item box-two">
                <p>Longest Distance Cycling: 4 miles</p>
                <Image width={100} height={100}
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9ca170e9-1252-4fa6-8677-36493540c1f2"
                  alt="Longest cycling mobile"
                />
              </div>
              <div className="best-item box-three">
                <p>Longest Roller-Skating: 2 hours</p>
                <Image width={100} height={100}
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/262d1611-ed4c-4297-981c-480cf7f95714"
                  alt="Roller skating mobile"
                />
              </div>
            </div>
          </div> */}
{/* 
          <div className="friends-activity">
            <h1>Friends Activity</h1>
            <div className="card-container">
              <div className="card">
                <div className="card-user-info">
                  <Image width={100} height={100}
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9290037d-a5b2-4f50-aea3-9f3f2b53b441"
                    alt="Friends activity"
                  />
                  <h2>Jane</h2>
                </div>
                <Image width={500} height={500}
                  className="card-img"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/bef54506-ea45-4e42-a1b6-23a48f61c5e8"
                  alt="friends card img"
                />
                <p>We completed the 30-Day Running Streak Challenge!🏃‍♀️🎉</p>
              </div>

              <div className="card card-two">
                <div className="card-user-info">
                  <Image width={100} height={100}
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/42616ef2-ba96-49c7-80ea-c3cf1e2ecc89"
                    alt="avatar mike"
                  />
                  <h2>Mike</h2>
                </div>
                <Image width={500} height={500}
                  className="card-img"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2dcc1b94-06c5-4c62-b886-53b9e433fd44"
                  alt="mikes card img"
                />
                <p>I just set a new record in cycling: 30 miles!💪</p>
              </div>
            </div>
          </div> */}
        </div>
      </Box>
    </>
  );
};
export default DashboardHome;
