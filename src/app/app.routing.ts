import { Router, RouterModule, Routes } from "@angular/router";
import { EquipeComponent } from "./equipe/equipe.component";
import { FormulaireComponent } from "./formulaire/formulaire.component";
import { HomeComponent } from "./home/home.component";
import { TableauComponent } from "./tableau/tableau.component";



const app_routing : Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'equipe', component:EquipeComponent,},
  {path: 'formulaire', component:FormulaireComponent},
  {path: 'tableau', component:TableauComponent},
];

export const Routing = RouterModule.forRoot(app_routing);
