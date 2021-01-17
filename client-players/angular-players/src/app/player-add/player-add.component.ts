import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Player } from 'src/service/model/player';
import { PlayerService } from 'src/service/player-.service';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',


  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent  {
    player = this.fb.group({
    name:['',Validators.required],
    club:['',Validators.required],
    DOB:['',Validators.required],
    marketvalue:['',Validators.required],
  })
  constructor( private ps :PlayerService,
    private fb: FormBuilder,
    private router : Router
    ) { }

    onSubmit() {
      this.ps.addPlayer(new Player(
                                      this.player.value.name,
                                      this.player.value.club,
                                      this.player.value.dob,
                                      this.player.value.marketvalue))
      this.router.navigate([''])
  }

}
