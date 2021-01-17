import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player} from './model/player';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private urlService: string = "http://localhost:3000/players"
  private contentHeaders: HttpHeaders

  constructor( private http : HttpClient) {

    this.contentHeaders = new HttpHeaders().set('Content-Type','applicatioon/x-www-form-urlencoded')
   }
   getAllPlayers():Observable<Player[]>{
    let url = `${this.urlService}`      
    return this.http.get<Player[]>(url)
   }

   addPlayer(player: Player): void {
    let url = `${this.urlService}/add`
    // !!! subscribe is needed to execute POST
    this.http.post(url, player.getParams(),
                  { headers: this.contentHeaders })
                  .subscribe(data => { console.log(data) }, 
                             error => { console.error(error) })
 }

 // Edit a product
 editPlayer(player: Player): void {
    let url = `${this.urlService}/edit`;
    // !!! subscribe is needed to execute POST
    this.http.post(url, player.getParams(),
                  { headers: this.contentHeaders })
                  .subscribe(data => { console.log(data) }, 
                             error => { console.error(error) })
 }

 // Search all product by name
 searchAllPlayers(name: string): Observable<Player[]> {
    let url = `${this.urlService}/searchAll`

    return this.http.post<Player[]>(url, `name=${name}`,
                  { headers: this.contentHeaders })
 }

 // Search one product by name
 searchOnePlayer(name: string): Observable<Player[]> {
    let url = `${this.urlService}/searchOne`

    return this.http.post<Player[]>(url, `name=${name}`,
                  { headers: this.contentHeaders })
 }

 // Delete a product
 deletePlayer(name: string): void {
    let url = `${this.urlService}/delete/${name}`;
    // !!! subscribe is needed to execute DELETE
    this.http.delete(url,
                  { headers: this.contentHeaders })
                  .subscribe(data => { console.log(data) }, 
                             error => { console.error(error) })
 }
}
