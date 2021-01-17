import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { PlayerService } from 'src/service/player-.service';
import { Player } from 'src/service/model/player';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent  {

 
  playerName: string
  player = this.fb.group({
   name: ['', Validators.required],
   club: ['', Validators.required],
   dob: ['', Validators.required],
   marketvalue: ['', Validators.required],
 })
 
  constructor(private ps: PlayerService,
              private fb: FormBuilder, 
              private router: Router,
              private activeroute: ActivatedRoute) {
 
     // simple splitting of url parts
     this.playerName = router.url.split('/')[2]
     // preferred way of handling active route
     this.activeroute.params
       .subscribe(params => { this.playerName = params['name'];
                              this.ps.searchOnePlayer(this.playerName)
                                 .subscribe(data => { this.player.controls['name'].setValue(data[0].name)
                                                      this.player.controls['club'].setValue(data[0].club)
                                                      this.player.controls['dob'].setValue(data[0].dob)
                                                      this.player.controls['marketvalue'].setValue(data[0].marketvlaue)
                                                     }, 
                                           error => { console.log(error) })
                             }
                 )
  }
 
  onSubmit() {
     this.ps.editPlayer(new Player(this.player.value.name,
                                     this.player.value.club,
                                     this.player.value.dob,
                                     this.player.value.marketvalue))
     this.router.navigate([''])
  }

}
