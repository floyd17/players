import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { PlayerService } from 'src/service/player-.service';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent  {

  playerName: string
  player = this.fb.group({
     name: ['', Validators.required],
  })

  constructor(private ps: PlayerService,
              private fb: FormBuilder, 
              private router: Router) {

     this.playerName = router.url.split('/')[2]
     this.player.controls['name'].setValue(this.playerName)
  }

  onSubmit() {
     this.ps.deletePlayer(this.player.value.name)
     this.router.navigate([''])
  }

}
