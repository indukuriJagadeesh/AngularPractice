import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'apps-login',
  selector: 'app-login',
  // template:`<app-root></app-root>`,
 templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  serverStatus = "offline";
  constructor() { 
    console.log("Constructor called....!");
    
    this.serverStatus = (Math.random()>0.5)?"online":"offline";

  }

  getColor(){
  return this.serverStatus==="offline"?"red":"green";  
  }

  ngOnInit() {
  }

  callUserService(){
    console.log('calling..!');
  }

}
