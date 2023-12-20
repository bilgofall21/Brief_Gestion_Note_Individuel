import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-dashbord-classe',
  templateUrl: './dashbord-classe.component.html',
  styleUrls: ['./dashbord-classe.component.css']
})
export class DashbordClasseComponent implements OnInit {

  public storedUsers: any;
  public usersdata: any;

  public storeMatiere: any;
  public usersMat: any;

  public storeclasse: any;
  public userClasse: any;
  public elementSelectioner : any;

  public storeEvaluation: any;
  public userEvaluation: any;

  public storeNotes: any;
  public usersNotes: any

  public userid: any = 0;
  public userfoundid: any;
  public useretat: any;

  public  Classe: any[] = [
    {
      id: "",
      niveau: "",
      effectif:''
    }
  ];
  formuClass : any = {
    id: 0,
    niveau: "",
    effectif:'',
  };
  element: any;




ngOnInit(): void {
 //* tous les methodes pour manipuler les diiferents local storage


 this.storedUsers = localStorage.getItem('Schooluser');
 console.log(this.storedUsers);
 if (this.storedUsers) {
   this.usersdata = JSON.parse(this.storedUsers);
 } else {
   // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
  //  localStorage.setItem('Schooluser', JSON.stringify(this.Schooluser));
}

// this.tailleenseignant = this.enseignantLength();
//   this.tailleApprenant = this.ApprenantLength();


this.storeMatiere = localStorage.getItem('Matiere');

 if (this.storedUsers) {
  //  this.usersMat = JSON.parse(this.usersMat);
 } else {
   // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
   // localStorage.setItem('Matiere', JSON.stringify(this.Matiere));
}

this.storeclasse = localStorage.getItem('Classe');
// console.log(this.storeclasse);
 if (this.storeclasse) {
   this.userClasse = JSON.parse(this.storeclasse);
  //  console.warn(this.userClasse);
 } else {
   // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
   localStorage.setItem('Classe', JSON.stringify(this.Classe));
}

this.storeEvaluation = localStorage.getItem('Evaluation');
 if (this.storeEvaluation) {
  //  this.userEvaluation = JSON.parse(this.userEvaluation);
 } else {
   // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
   // localStorage.setItem('Evaluation', JSON.stringify(this.Evaluation));
}

this.storeNotes = localStorage.getItem('notes');
 if (this.storeEvaluation) {
  //  this.usersNotes = JSON.parse(this.usersNotes);
 } else {
   // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
   // localStorage.setItem('notes', JSON.stringify(this.notes));
}

}

// Methode pour ajouter cass
ajouterClass (){
  // assiger sur le Local des id pour chak apprenant
  this.formuClass.id = this.userClasse.length + 1;


  // ajouter le formulaire dans le tableau

      // avec le destructuring {...} pour recuperer pour crer une copie de l'objet
  this.userClasse.push({...this.formuClass});

   // vider le formulaire apre ajout
  this.formuClass = {};
  // methode sauvegarde dans localstorage

this.saveClass();
}

saveClass (){
  localStorage.setItem('Classe',JSON.stringify(this.userClasse))
}

// methode pour recuperl 'element specifique
selectElement (element : any){
this.elementSelectioner = {...element};
}
index : any ;
// methode pour modifier
modifierElement() : void{
  if(this.elementSelectioner){
    //  recherche de l'index dans le tableau
    this.index =this.userClasse.findIndex((e: { id: any; }) =>e.id === this.elementSelectioner.id);
    // modifier l'element dans le tableau
    console.log(this.index)
    if(this.index !== -1){
     
      // mettre a jour l'elment selectionner
      this.userClasse[this.index] = {...this.elementSelectioner};
      // sauvegarder  des modif dans le stockage local
      this.saveClass ();
    };
};
// initiaise l'elemnent selectionner
this.elementSelectioner = null;
  };

  // methode por supprimer
  supprimerElement(element : any){
      // recherche de le'element via son index
      this.index = this.userClasse.findIndex((e: {id : any}) => e.id === element.id);
      console.log(this.index)
      if(this.index !== -1){
        this.userClasse.splice(this.index, 1)
        // sauvegarde modification dans local storage
        this.saveClass();
      }
    }
  }
  


