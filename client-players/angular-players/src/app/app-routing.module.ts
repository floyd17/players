import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerDeleteComponent } from './player-delete/player-delete.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerSearchComponent } from './player-search/player-search.component';

const routes: Routes = [

  { path: '', component: PlayerListComponent },
  { path: 'add', component: PlayerAddComponent },
  { path: 'search', component: PlayerSearchComponent},
  { path: 'delete', component: PlayerDeleteComponent },
  { path: 'delete/:name', component:PlayerDeleteComponent },
  { path: 'edit/:name', component:PlayerEditComponent },
 // { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
