/* Fil rouge :

Un Sondage est un objet qui contient des Questions qui elles même contiennent des Réponses dont une ou plusieurs sont justes.

Au chargement de la page afficher le titre du sondage, la première question et les différentes réponses possibles. Lorsqu’une réponse est validée, on affiche la questions suivante et on comptabilise la bonne ou mauvaise réponse dans une variable JS.

quand le sondage est terminé : Comptabiliser les bonnes réponses et afficher un score de x/y (si série de y questions, par exemple). Calculer un nombre de points obtenus sur 100.

Demande le nom de l’utilisateur à sa connexion via un petit formulaire pop-up (animé) et enregistrer ce nom dans une variable, qu’il faudra afficher dans une des coins de l’écran et sur l’écran final des scores.


Sondage = { 
    title : “Qui va survivre dans GOT ?”,
    questions : [
    {questionTitle : “est ce que JS va survivre ?”, answers : [ 
        { choice : “oui”, isRight : true},
        { choice : “non” isRight : false}] }
]};
*/
var q = 0 // Variable numero de la question en cours
var goodAns = 0 // Variable du nombre de bonne reponse
var pseudo = undefined // Variable pour stocké le pseudo
$('#popupR').hide(); // cacher les pop-up de fin
$('#popupFondR').hide(); // cacher les pop-up de fin
var reponseUn = document.getElementById("rep1") // Bouton 1
var reponseDeux = document.getElementById("rep2") // Bouton 2
var reponseTrois = document.getElementById("rep3") // Bouton 3
var reponseQuatre = document.getElementById("rep4") // Bouton 4
var messageFin = document.getElementById("affichResult") // Texte du pop-up de fin


// TABLEAU AVEC LES QUESTIONS

const Sondage = {
    title : "Koh-Lanta",
    questions : [

        {titre : "Sur quelle chaîne est diffusé Koh-Lanta ?", 
        reponse : [
            {choix : "TF1", isRight : true},
            {choix : "W9", isRight : false},
            {choix : "NRJ12", isRight : false},
            {choix : "Arte", isRight : false},
        ]},

        {titre : "Qui est le présentateur de Koh-Lanta ?",
        reponse : [
            {choix : "Jean-luc Reichmann", isRight : false},
            {choix : "Nicos Aliagas", isRight : false},
            {choix : "Denis Brogniart", isRight : true},
            {choix : "Il n'y en a pas", isRight : false},
        ]},

        {titre : "Ou se passe la saison actuelle de Koh-Lanta ?",
        reponse : [
            {choix : "Malaisie", isRight : false},
            {choix : "Iles Fidji", isRight : true},
            {choix : "Nouvelle Zelande", isRight : false},
            {choix : "Dans le 77", isRight : false},
        ]},

        {titre : "Que gagne le vainqueur de Koh-Lanta ?",
        reponse : [
            {choix : "Une voiture", isRight : false},
            {choix : "De la célébrité", isRight : false},
            {choix : "100 000€", isRight : true},
            {choix : "Rien c'est pour le fun", isRight : false},
        ]},

    ]

}



// VERIFICATION DE BONNE REPONSE

reponseUn.addEventListener("click", function(){ // Event : click sur le bouton choix numero 1
    let verif = Sondage.questions[q].reponse[0].isRight // Recuperation de la valeur de la reponse
    if(verif === true) { // Verification que la reponse est vraie
        goodAns++ // Ajout d'un point
    }
})

reponseDeux.addEventListener("click", function(){ // Event : click sur le bouton choix numero 2
    let verif = Sondage.questions[q].reponse[1].isRight
    if(verif === true) { // Verification que la reponse est vraie
        goodAns++ // Ajout d'un point
    }
})

reponseTrois.addEventListener("click", function(){ // Event : click sur le bouton choix numero 3
    var verif = Sondage.questions[q].reponse[2].isRight
    if(verif === true) { // Verification que la reponse est vraie
        goodAns++ // Ajout d'un point
    }
})

reponseQuatre.addEventListener("click", function(){ // Event : click sur le bouton choix numero 4
    var verif = Sondage.questions[q].reponse[3].isRight
    if(verif === true) { // Verification que la reponse est vraie
        goodAns++ // Ajout d'un point
    }
})



// FONCTION CHANGEMENT DE QUESTION

function changementQuestion () { // Fonction activé quand un bouton est clické

    if(q === (Sondage.questions.length - 1)) { // Verification que ce n'était pas la dernière question
        $('#popupFondR').show("fast");
        $('#popupR').show("fast");
        messageFin.innerHTML = ("Bravo : " + pseudo + ". Tu as obtenu une note de " + goodAns*25 + "/100 !")
    } else { // Si ce n'est pas la fin, afficher la question suivante
    q++; // Ajout de 1 pour passer à la question suivante
    titreQuestion.innerHTML = Sondage.questions[q].titre
    rep1.innerHTML = Sondage.questions[q].reponse[0].choix
    rep2.innerHTML = Sondage.questions[q].reponse[1].choix
    rep3.innerHTML = Sondage.questions[q].reponse[2].choix
    rep4.innerHTML = Sondage.questions[q].reponse[3].choix
    }


}



// AFFICHAGE PREMIERE QUESTION

titrePage.innerHTML = Sondage.title
titreQuestion.innerHTML = Sondage.questions[0].titre
rep1.innerHTML = Sondage.questions[0].reponse[0].choix
rep2.innerHTML = Sondage.questions[0].reponse[1].choix
rep3.innerHTML = Sondage.questions[0].reponse[2].choix
rep4.innerHTML = Sondage.questions[0].reponse[3].choix



// POP-UP (Jquery c'est trop bien)

$('#envoyerPseudo').click(function(){
    if(document.getElementById("pseudo").value === "") {
        alert('Veuillez entrer un pseudo')
    } else {
        pseudo = document.getElementById("pseudo").value;
        $("#popup").hide("fast");
        $("#popupFond").hide("fast");
    }
})