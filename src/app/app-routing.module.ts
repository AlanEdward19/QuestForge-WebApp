import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent} from "./characters/characters.component";
import {ItemsComponent} from "./items/items.component";
import {BackgroundsComponent} from "./backgrounds/backgrounds.component";
import {ClassesComponent} from "./classes/classes.component";
import {RacesComponent} from "./races/races.component";
import {HomeComponent} from "./home/home.component";
import {CharacterDetailsComponent} from "./character-details/character-details.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'characters', component: CharactersComponent },
  {path: 'items', component: ItemsComponent },
  {path: 'backgrounds', component: BackgroundsComponent },
  {path: 'classes', component: ClassesComponent },
  {path: 'races', component: RacesComponent },
  {path : 'character-details', component: CharacterDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
