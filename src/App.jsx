import './App.css'
import React, { useState, createContext } from 'react';
import data from './data.json';
import Notification from './components/notification/Notification';



export const Usercontext = createContext()

function App() {



  const [notificationData, setNotificationData] = useState(data);


  
  const handleNotificationClick = (index) => {
    const updatedData = [...notificationData];
    updatedData[index].status = 'read'; // Update the status to 'read' or any other value as needed
    setNotificationData(updatedData);
  };

  const markAllAsRead = () => {
    const updatedData = notificationData.map((notification) => {
      return {
        ...notification,
        status: 'read',
      };
    });
    setNotificationData(updatedData);
  };

  return (
    <>
      <main>
        <div className="head">
          <div className="notifiy">
            <h2>Notifications <span className="number">3</span></h2>
          </div>

          <div className="button" onClick={markAllAsRead}>Mark all as read</div>
        </div>

        <div className="notifications">
          {notificationData.map((notification, index) => (
            <Usercontext.Provider value={notification}>
              <Notification
                key={index}
                onClick={() => handleNotificationClick(index)}
              />
            </Usercontext.Provider>
          ))}
        </div>
      </main>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/mikget66">Michael Anwar</a>.
      </div>
    </>
  )
}

export default App

// <img class="avatar" src="./profile-pictures/avatar-Mark Webber.webp" alt="">
