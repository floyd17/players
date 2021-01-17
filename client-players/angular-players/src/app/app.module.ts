import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerService } from 'src/service/player-.service';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerDeleteComponent } from './player-delete/player-delete.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerSearchComponent,
    PlayerAddComponent,
    PlayerDeleteComponent,
    PlayerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,     
    ReactiveFormsModule
   
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
