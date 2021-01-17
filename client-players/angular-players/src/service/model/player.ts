import { HttpParams } from "@angular/common/http";
import { StringifyOptions } from "querystring";

export class Player {

    constructor(
        public name:string,
        public club:string,
        public dob : string,
        public marketvlaue : string
    ) { }

    getParams(): HttpParams{
        return new HttpParams()
        .set('name',this.name)
        .set('club',this.club)
        .set('dob',String(this.dob))
        .set('marketvalue',String(this.marketvlaue))
    }
}
