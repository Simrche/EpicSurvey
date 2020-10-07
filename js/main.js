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

const Sondage = {
    title : "Koh-Lanta",
    questions : [

        {titre : "Qui va être l'équipe gagnante de koh-lanta ?", 
        reponse : [
            {choix : "Rouge", isRight : true},
            {choix : "Violet", isRight : false},
            {choix : "Orange", isRight : false},
            {choix : "Bleu", isRight : false},
        ]},

        {titre : "Qui est le présentateur de Koh-Lanta ?",
        reponse : [
            {choix : "Jean-luc Reichmann", isRight : false},
            {choix : "Nicos Aliagas", isRight : false},
            {choix : "Denis Brogniart", isRight : true},
            {choix : "Harry Roselmack", isRight : false},
        ]},

        {titre : "Ou se passe la saison actuelle de Koh-Lanta ?",
        reponse : [
            {choix : "Malaisie", isRight : false},
            {choix : "Iles Fidji", isRight : true},
            {choix : "Nouvelle Zelande", isRight : false},
            {choix : "Viet Nam", isRight : false},
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

    var reponseUn = document.getElementById("rep1")
    var reponseDeux = document.getElementById("rep2")
    var reponseTrois = document.getElementById("rep3")
    var reponseQuatre = document.getElementById("rep4")

    reponseUn.addEventListener("click", function(){
        console.log(q)
        let verif = Sondage.questions[q].reponse[0].isRight
        if(verif === true) {
            goodAns++
            console.log('bonne reponse = ' + goodAns)
        }
    })

    reponseDeux.addEventListener("click", function(){
        console.log(q)
        let verif = Sondage.questions[q].reponse[1].isRight
        if(verif === true) {
            goodAns++
            console.log('bonne reponse = ' + goodAns)
        }
    })

    reponseTrois.addEventListener("click", function(){
        console.log(q)
        var verif = Sondage.questions[q].reponse[2].isRight
        if(verif === true) {
            goodAns++
            console.log('bonne reponse = ' + goodAns)
        }
    })

    reponseQuatre.addEventListener("click", function(){
        console.log(q)
        var verif = Sondage.questions[q].reponse[3].isRight
        if(verif === true) {
            goodAns++
            console.log('bonne reponse = ' + goodAns)
        }
    })


var q = 0
var goodAns = 0

function changementQuestion () {

    if(q === (Sondage.questions.length - 1)) {
        //document.location.href="classement.html";
    } else {
    q++;
    titreQuestion.innerHTML = Sondage.questions[q].titre
    rep1.innerHTML = Sondage.questions[q].reponse[0].choix
    rep2.innerHTML = Sondage.questions[q].reponse[1].choix
    rep3.innerHTML = Sondage.questions[q].reponse[2].choix
    rep4.innerHTML = Sondage.questions[q].reponse[3].choix
    }


}

titrePage.innerHTML = Sondage.title

titreQuestion.innerHTML = Sondage.questions[0].titre
rep1.innerHTML = Sondage.questions[0].reponse[0].choix
rep2.innerHTML = Sondage.questions[0].reponse[1].choix
rep3.innerHTML = Sondage.questions[0].reponse[2].choix
rep4.innerHTML = Sondage.questions[0].reponse[3].choix

$('#envoyerPseudo').click(function(){
    if(document.getElementById("pseudo").value === "") {
        alert('Veuillez entrer un pseudo')
    } else {
        var input = document.getElementById("pseudo").value;
        $("#popup").hide();
        $("#popupFond").hide();
    }
})