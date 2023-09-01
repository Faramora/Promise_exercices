/* **Exercice 1: Création d'une promesse simple**
Créez une fonction qui retourne une promesse. La promesse doit être résolue avec 
le message "Promesse résolue !" après un délai de 2 secondes.

**Exercice 2: Utilisation de `then` et `catch`**
Utilisez la promesse de l'exercice précédent et utilisez les méthodes **`then`** et
 **`catch`** pour gérer la résolution et le rejet de la promesse. Affichez le message
  résolu dans le **`then`** et un message d'erreur dans le **`catch`**. */



// Create a function that returns a promise
function createPromise() {
    return new Promise((resolve, reject) => {
      // Use setTimeout to simulate a 2-second delay
      setTimeout(() => {
        resolve("Promise resolved!");
      }, 2000);
    });
  }
  
  // Call the function to obtain the promise
  const myPromise = createPromise();
  
  // Use the then method to handle the resolution of the promise
  myPromise.then((message) => {
    console.log("Resolved:", message);
  }).catch((error) => {
    console.error("Error:", error);
  });
  


  /* **Exercice 3: Chaining de promesses**
Créez trois fonctions, chacune retournant une promesse :

1. La première promesse doit résoudre avec le nombre 2 après 1 seconde.
2. La deuxième promesse doit prendre le nombre résolu de la première promesse et le multiplier par 3.
3. La troisième promesse doit prendre le nombre résolu de la deuxième promesse et l'élever au carré.

Chaînez ces trois promesses de manière à ce que chaque promesse utilise le résultat de la précédente. */

// Première promesse : résout avec le nombre 2 après 1 seconde
function promiseOne() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 1000);
    });
  }
  
  // Deuxième promesse : multiplie le nombre par 3
  function promiseTwo(number) {
    return new Promise((resolve, reject) => {
      resolve(number * 3);
    });
  }
  
  // Troisième promesse : élève le nombre au carré
  function promiseThree(number) {
    return new Promise((resolve, reject) => {
      resolve(number ** 2);
    });
  }
  
  // Chaînage des promesses
  promiseOne()
    .then((result) => {
      console.log("Première promesse résolue :", result);
      return promiseTwo(result);
    })
    .then((result) => {
      console.log("Deuxième promesse résolue :", result);
      return promiseThree(result);
    })
    .then((result) => {
      console.log("Troisième promesse résolue :", result);
    })
    .catch((error) => {
      console.error("Une erreur s'est produite :", error);
    });