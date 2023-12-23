import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-apprenant',
  templateUrl: './user-apprenant.component.html',
  styleUrls: ['./user-apprenant.component.css']
})
export class UserApprenantComponent implements OnInit {



  public Schooluser: any[] = [
    {
      id: '1',
      nom: 'bah',
      prenom:'habib',
      email: 'habib@gmail.com',
      password: 'habib',
      niveau: '',
      annee: '',
      role:'1',
      etat: '1',
      Matiere: [
        {
          id: '',
          matiere: '',
        }
      ]
    },
  ]
  formuStudent : any = {
    id : 0,
    nom: '',
    prenom:'' ,
    password : '',
    email : '',
    niveau : '',
    annee : '',
    role:'3',
    etat: '1',
    };
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

  recupapprenant : any ;
  dataapprenant! : any [];
item: any;
idappreanant : any;

  ngOnInit(): void {
    this.recupapprenant = localStorage.getItem('Schooluser');
    console.log(this.recupapprenant);
    if (this.recupapprenant) {
      this.dataapprenant = JSON.parse(this.recupapprenant);
    } else {
      // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
      localStorage.setItem('Schooluser', JSON.stringify(this.Schooluser));
  }
  this.formuStudent.id = this.dataapprenant.length + 1;
  this.idappreanant = this.formuStudent.id
  }

}
