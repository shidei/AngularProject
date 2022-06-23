import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComposantComponent } from './composant/composant.component';
import { HomeComponent } from './home/home.component';
import { EquipeComponent } from './equipe/equipe.component';
import { Routing } from './app.routing';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TableauComponent } from './tableau/tableau.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComposantComponent,
    HomeComponent,
    EquipeComponent,
    FormulaireComponent,
    TableauComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
