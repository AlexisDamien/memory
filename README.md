Projet React avec IndexedDB
Ce projet est une application React qui utilise IndexedDB pour la gestion de données locales. L'application permet de gérer des catégories, des thèmes et des cartes associées à ces thèmes.

Fonctionnalités
Gestion des catégories : Ajouter, supprimer et afficher des catégories.
Gestion des thèmes : Ajouter, supprimer et afficher des thèmes dans une catégorie donnée.
Gestion des cartes : Ajouter, supprimer, mettre à jour et afficher des cartes dans un thème donné.
Révision espacée : Possibilité de réviser un nombre spécifié de cartes pour un thème sélectionné.
Prérequis
Avant de démarrer, assurez-vous d'avoir Node.js installé sur votre machine.

Installation
Clonez le repository :

Copier le code
git clone https://github.com/votre-utilisateur/projet-react-indexeddb.git
Installez les dépendances :

Copier le code
cd projet-react-indexeddb
npm install
Configuration
Aucune configuration spécifique n'est nécessaire pour le fonctionnement de base. Assurez-vous que votre navigateur prend en charge IndexedDB pour une exécution correcte de l'application.
Les données tests sont directment intégrés à l'app.

Utilisation
Démarrez l'application en mode développement :

Copier le code
npm run dev
Ouvrez votre navigateur et accédez à http://localhost: [port] pour voir l'application en action.

Vous pouvez utiliser l'interface utilisateur pour créer, gérer et réviser des catégories, des thèmes et des cartes.

Structure du projet
public/ : Contient le fichier HTML principal et les ressources statiques.
src/ : Contient le code source de l'application React.
components/ : Composants réutilisables de l'interface utilisateur.
service/ : Fonctions pour interagir avec IndexedDB (CRUD pour catégories, thèmes, cartes).
pages/ : Composants de pages spécifiques de l'application (par exemple, Page d'accueil, Page de catégories, Page de thèmes).
App.tsx : Composant principal de l'application.

Technologies utilisées
React : Bibliothèque JavaScript pour la création d'interfaces utilisateur.
IndexedDB : API de base de données de navigateur pour le stockage de données côté client.
Material-UI : Bibliothèque de composants React pour une conception rapide et facile.
Node.js : Environnement d'exécution JavaScript côté serveur.
npm : Gestionnaire de paquets Node.js pour l'installation des dépendances.
cdn tailwind : framework css