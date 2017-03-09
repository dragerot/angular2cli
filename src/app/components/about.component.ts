import {Component} from "@angular/core";
import {AppService} from "../services/app.service";

@Component({
  selector: 'about',
  template: `
    <div>First name: <input [value]="firstName"> </div>
  <div>{{lastName}}</div>
  <div>Last name: <input [(ngModel)]="lastName"> </div>
  `,
  providers : [AppService]
})
export class AboutComponent {
    firstName : string = 'Duncan';
     lastName : string = '';

     constructor(private _appService : AppService){
       this.getName();
     }

     getName(){
       this.lastName = this._appService.getName();
     }
}
