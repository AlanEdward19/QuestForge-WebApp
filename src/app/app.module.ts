import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CharactersComponent } from './characters/characters.component';
import { ItemsComponent } from './items/items.component';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { ClassesComponent } from './classes/classes.component';
import { RacesComponent } from './races/races.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {CharactersService} from "./services/characters.service";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {CharacterDataService} from "./services/character-data-service.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { AttributeComponentComponent } from './attribute-component/attribute-component.component';
import { CoinIconComponent } from './coin-icon/coin-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    ItemsComponent,
    BackgroundsComponent,
    ClassesComponent,
    RacesComponent,
    HomeComponent,
    CharacterDetailsComponent,
    AttributeComponentComponent,
    CoinIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [CharactersService, CharacterDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
