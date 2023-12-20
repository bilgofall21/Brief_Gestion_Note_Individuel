import { Component , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashbord-matiere',
  templateUrl: './dashbord-matiere.component.html',
  styleUrls: ['./dashbord-matiere.component.css']
})
export class DashbordMatiereComponent implements OnInit {

  public storedUsers: any;
  public usersdata: any;

  public storeMatiere: any;
  public usersMat: any;

  public storeclasse: any;
  public userClasse: any;

  public storeEvaluation: any;
  public userEvaluation: any;

  public storeNotes: any;
  public usersNotes: any

  public userid: any = 0;
  public userfoundid: any;
  public useretat: any;
  emelementSelectioner : any ;

  public Matiere: any[] = [
    {
      id: 0,
      matiere :"",
    }
  ];
  formuMatiere : any = {
    id: 0,
      matiere :""
  };

   ngOnInit(): void {
this.storeMatiere = localStorage.getItem('Matiere')
if(this.storeMatiere){
  this.usersMat = JSON.parse(this.storeMatiere);
  console.warn(this.storeMatiere);
} else{
  localStorage.setItem('Matiere',JSON.stringify(this.Matiere))
}
   }

   ajouterMatiere (){
    // assiger sur le Local des id pour chak apprenant
    this.formuMatiere.id = this.usersMat.length + 1;


    // ajouter le formulaire dans le tableau

        // avec le destructuring {...} pour recuperer pour crer une copie de l'objet
    this.usersMat.push({...this.formuMatiere});

     // vider le formulaire apre ajout
    this.formuMatiere= {};
    // methode sauvegarde dans localstorage

  this.saveClasse();
  }

  saveClasse (){
    localStorage.setItem('Matiere',JSON.stringify(this.usersMat))
  }

  // methode por selectionner l'element a amodifier
  selectElement (element : any){
    this.emelementSelectioner = {...element};
    }
    index : any;
  modifierElement ( ): void{
    if(this.emelementSelectioner){
  //  recherche de l'index dans le tableau
  this.index =this.usersMat.findIndex((e: { id: any; }) =>e.id === this.emelementSelectioner.id);
  // modifier l'element dans le tableau
  if(this.index !== -1){
    console.log(this.index)
    // mettre a jour l'elment selectionner
    this.usersMat[this.index] = {...this.emelementSelectioner};
    // sauvegarder  des modif dans le stockage local
    this.saveClasse ()
  };
  };
  // reinitialiser element selectioner
  this.emelementSelectioner = null;
  };

  // methode pour supprimer
  supprimerElement(element : any){
    // recherche de le'element via son index
    this.index = this.usersMat.findIndex((e: {id : any}) => e.id === element.id);
    console.log(this.index)
    if(this.index !== -1){
      this.usersMat.splice(this.index, 1)
      // sauvegarde modification dans local storage
      this.saveClasse();
    };
  };

   }

  //




