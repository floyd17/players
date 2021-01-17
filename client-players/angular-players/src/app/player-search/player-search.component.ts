import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { Player } from 'src/service/model/player';
import { PlayerService } from 'src/service/player-.service';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent  {

  players : Player[]

  player = this.fb.group({
     name: ['', Validators.required]
  })

  constructor(private ps: PlayerService,
              private fb: FormBuilder) {}

  onSubmit() {
     
     this.ps.searchAllPlayers(this.player.value.name)
                  .subscribe(data => { this.players = data }, 
                             error => { console.error(error) })
  }

}
