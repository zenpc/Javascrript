/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var nbEssai = 0
do {
  valeurSaisie = parseInt(prompt('Entrée la une valeur entre 1 et 100', 'valeur'))
  if (valeurSaisie < solution) {
    console.log(valeurSaisie + ' est trop petit')
    nbEssai++
  }
  else if (valeurSaisie === solution) {
    console.log('Bravo la solution était ' + solution)
    console.log('Vous avez trouvé en ' + nbEssai + ' essai(s)')
  } else {
    console.log(valeurSaisie + ' est trop grand')
    nbEssai++;
  }
  if(solution !== valeurSaisie && nbEssai===6){
      console.log('Perdu... La solution était '+solution);
  }
} while (valeurSaisie !== solution && nbEssai < 6)
