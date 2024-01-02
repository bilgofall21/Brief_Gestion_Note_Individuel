import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-professeur',
  templateUrl: './user-professeur.component.html',
  styleUrls: ['./user-professeur.component.css']
})
export class UserProfesseurComponent implements OnInit {

  public Evaluation: any[] = [
    {
      id: '',
      semestre: '',
      date: '',
      type: '',
      etat: '',
      matiere: '',
      professeur: '',
      niveau: ''
    }
  ];
  public Matiere: any[] = [
    {
      id: '',
      matiere :""
    }
  ];
  public classes:  any[] = [
    {
      id: '',
      prenom: '',
      nom: '',
      nomClasse: '',
      noteEleve: '',


    }
  ]



  /**tous les  varibles  */
  public storedUsers: any;
  public usersdata: any;

  public storeMatiere: any;
  public usersMat: any;

  public storeclasse: any;
  public userClasse: any;

  public storeEvaluation: any;
  public userEvaluation: any;
 public  dataEvaluation : any;
  // public addEvaluation: any;

  public storeNotes: any;
  public usersNotes: any

  public userid: any = 0;
  public userfoundid: any;
  public useretat: any;


  public classUser: any;



  //valeur du filter qui correspond a celui du champs recherche
  filterValue = '';
  //les element trouver
  filteredElement:any;


formuEvaluation: any={
  id: 0,
  semestre: '',
  date: '',
  type: '',
  etat: '',
  matiere: '',
  professeur: '',
  niveau: ''
};




//variable classe

recupMatiere : any;
  dataMatiere!: any[];
  recupClass : any;
  dataClasse! : any [];
  selectedItem: any;
  ngOnInit(): void {
   this.recupMatiere = localStorage.getItem('Matiere');
     if (this.recupMatiere) {

       this.dataMatiere= JSON.parse(this.recupMatiere);
      //  console.warn(this.dataMatiere);
     } else {
       // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
   }


   this.recupClass= localStorage.getItem('Classe');
     if (this.recupClass) {
       this.dataClasse = JSON.parse(this.recupClass);
     } else {
       // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
   }

   this.storeEvaluation = localStorage.getItem('evalue');
   if (this.storeEvaluation){
   this.userEvaluation = JSON.parse(this.storeEvaluation);
   console.warn(this.userEvaluation);
   }
    else {
          localStorage.setItem('evalue', JSON.stringify(this.Evaluation));

   }




}


addEvaluation(){
let evaluSemestre = this.formuEvaluation.semestre;
let evaluClasse = this.formuEvaluation.niveau;
let evaluMatiere = this.formuEvaluation.matiere;
let evaluDate = this.formuEvaluation.date;
let evaluType =this.formuEvaluation.type;
let evaluEtat = this.formuEvaluation.etat;

  // ajout de l'element avec la methode push de javascript
  this.userEvaluation.push({
    semestre : evaluSemestre,
    niveau : evaluClasse,
    matiere : evaluMatiere,
    type : evaluType,
    date : evaluDate,
    etat : evaluEtat,
  })
  this.formuEvaluation = {};
  this.saveEvaluation();
 }

 saveEvaluation(){
   localStorage.setItem('evalue', JSON.stringify(this.userEvaluation));
 }

   // Methode de recherche automatique
   onSearch(){
    // Recherche se fait selon le nom ou le prenom
    this.filteredElement = this.Evaluation.filter(
      (elt:any) => (elt?.matiere.toLowerCase().includes(this.filterValue.toLowerCase())) || elt?.date.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

  //recuperation des objets de la classe


   saveClasse(){
     localStorage.setItem('classe', JSON.stringify(this.classes));
   }
}






  //  test





