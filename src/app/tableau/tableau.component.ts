import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import personnes from "./module/personnes.json";


@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {
p:number = 1;

collection : any[] = personnes;
title = 'Tableau de personnes';

listePers:{nom:string,prenom:string,adresse:string}[]=personnes;

}
