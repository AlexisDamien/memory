import { RouterProvider } from "react-router-dom";
import ApplicationRouter from "./router/router";
import React, { useEffect } from "react";

const App: React.FC = () => {

    useEffect(() => {
        if (Notification.permission === 'default') {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              console.log('Permission granted');
            } else {
              console.log('Permission denied');
            }
          });
        }
    
        // Enregistrer le service worker
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/worker.js').then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
          }).catch(error => {
            console.error('Service Worker registration failed:', error);
          });
        }
      }, []);
    
      const showNotification = (title:string, body:string) => {
        if (Notification.permission === 'granted') {
          navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(title, { body });
          });
        }
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          if (now.getHours() === 9 && now.getMinutes() === 0) {
            showNotification('Daily Reminder', 'Here is your daily notification!');
          }
        }, 60000); // Vérifie toutes les minutes
    
        return () => clearInterval(interval);
      }, []);

    return <RouterProvider router={ApplicationRouter} />;
};

export default App;
