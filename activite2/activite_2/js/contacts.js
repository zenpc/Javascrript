/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
//Liste des contact
var carnetContact = []
//objet personne
var personne = {
  nom: '',
  prenom: '',
  newPersonne : function(prenom,nom){
      this.nom=nom;
      this.prenom=prenom;
  }
}
// fonction permettant l'ajout d'un contact
function addCarnetContact () {
  var nom = prompt('entrée le nom ', 'nom');
  var prenom = prompt('entrée le prenom ', 'prenom');
  carnetContact.push(new personne.newPersonne(prenom,nom));
  console.log('Le nouveau contact à été ajouté');
}
//Liste des contacts
function listingCarnetContact () {
  for (var per in carnetContact) {
    console.log('Nom : ' + carnetContact[per].nom + ', ' + 'prénom : ' + carnetContact[per].prenom);
  }
}

/**
 * Par défaut 
 * ajout des deux parsonnes 
 * */ 
function init () {
  carnetContact.push(new personne.newPersonne("carole","Lévisse"));  
  carnetContact.push(new personne.newPersonne("Mélodie","Nelsonne"));
}
init();

// Début du progrramme
console.log('Bbienvenue dans le gestionnaire des contacts !')
// Liste des choix
console.log('1 : Lister les contacts');
console.log('2 : Ajouter un contact');
console.log('0 : Quitter');
// Demande de choix
var option;
// Traitement du choix
do{
  option = Number(prompt('Choisissez une option', 'option'));
  if (option === 1) {
    listingCarnetContact();
  } else  if (option === 2) {
    addCarnetContact();
  }
}while(Number(option) !== 0)

console.log('Au revoir !');
