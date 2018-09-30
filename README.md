# Ionic_Demo

Creer une application ionic version 2

  - Tout d’abord il vous faut installer Ionic de manière globale avec l’outil avec le gestionnaire de package NPM, il suffit d’exécuter cette commande en ligne de commande :
  
  #npm install -g ionic cordova
 
 - Ensuite on va pouvoir créer notre premier projet avec une barre de menu sur le côté :
 
  #ionic start NomDeMonProjet ionic2
  
 - On peut maintenant tester notre application sur le navigateur web avec la commande
 
  #ionic serve ou #ionic serve --lab pour le lacer avec un emulateur android/ios
  
Compiler son application mobile

  - La compilation de l’application s’effectue de la même manière que sur Cordova, il vous suffira de taper ces commandes (en ligne de commande) :
  
  Sous android : 
  #Ionic platform add android  
  #Ionic build android
  
  Sous ios :
  #Ionic platform add ios 
  #Ionic build ios
  
