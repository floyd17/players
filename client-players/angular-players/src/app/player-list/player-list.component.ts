import { Component, OnInit } from '@angular/core';
import { Player } from 'src/service/model/player';
import { PlayerService } from 'src/service/player-.service';



@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {

  products: Player[]

  constructor(private ps: PlayerService) {}

  ngOnInit(): void {
      this.ps.getAllPlayers()
                 .subscribe(data => { this.products = data }, 
                            error => { console.error(error) })
  }

}
