import { RouterProvider } from "react-router-dom";
import ApplicationRouter from "./router/router";
import React, { useEffect } from "react";
import { createCategory, createTheme, createCard } from './service/indexedDb';
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
    
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('./sw.js').then(registration => {
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
        }, 60000); 
    
        return () => clearInterval(interval);
      }, []);


      const generateTestData = async () => {
        try {
          const category = { id: 1, name: 'Sport', description: 'Catégorie de sports' };
          await createCategory(category,);
      
          const footballTheme = { id: 2, categoryId:1 , name: 'Football', description: 'Thème sur le football' };
          await createTheme(footballTheme);
      
          const footballCard = {
            themeId: 2,
            question: 'Quelle est la capitale du football ?',
            answer: 'Le football n’a pas de capitale, c’est un sport universel.'
          };
          const footballCard2 = {
            themeId: 2,
            question: 'Avec quoi ce joue le foot?',
            answer: 'Avec un ballon'
          };
          const footballCard3 = {
            themeId: 2,
            question: 'Meilleur joueur du monde?',
            answer: 'Messi'
          };
          const footballCard4 = {
            themeId: 2,
            question: 'combien ya de joueur dans une equipe?',
            answer: '11'
          };
          const footballCard5 = {
            themeId: 2,
            question: 'combien ya d arbitre dans un match?',
            answer: '3'
          };
          const footballCard6 = {
            themeId: 2,
            question: 'meilleur club français ?',
            answer: 'Marseille'
          };
          await createCard(footballCard);
          await createCard(footballCard2);
          await createCard(footballCard3);
          await createCard(footballCard4);
      
          console.log('Données de test générées avec succès.');
        } catch (error) {
          console.error('Erreur lors de la génération des données de test :', error);
        }
      };
      
      generateTestData();


    return <RouterProvider router={ApplicationRouter} />;
};

export default App;
