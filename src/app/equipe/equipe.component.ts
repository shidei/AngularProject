import { Component, OnInit } from '@angular/core';

type personne= Array<{commentaire:string, path:string}>;

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

 commentaire = "Some quick example text to build on the card title and make up the bulk of the card's content";

 Personnes : personne  =[
  {commentaire :this.commentaire, path:'../../assets/images/tom-jerry.png'},
  {commentaire :this.commentaire, path:'../../assets/images/tom-jerry.png'},
  {commentaire :this.commentaire, path:'../../assets/images/tom-jerry.png'},
 ]

  constructor() { }

  ngOnInit(): void {
  }


}
