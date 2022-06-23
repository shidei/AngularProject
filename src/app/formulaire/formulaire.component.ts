import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from './model/user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

  public user : User = new User();
  constructor() { }

  ngOnInit() {

  }

}
