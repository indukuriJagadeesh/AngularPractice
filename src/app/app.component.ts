import { Component ,OnInit  } from '@angular/core';
import { ApiService } from './api.service';
import {Observable} from 'rxjs';
import { Customer } from './customer';
import { Router } from '@angular/router'; 

//import { CdkTableModule} from '@angular/cdk/table';
//import {DataSource} from '@angular/cdk/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wells-angular-project';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns1: string[] = ['id', 'username'];
  dataSource = ELEMENT_DATA;
  dataSource1 : Customer[];
  pdf: string = 'http://localhost:8080/pdf/get/TICKET';
  // service object is invoking here 
  constructor(private apiService: ApiService,private router: Router){}
  private results: Customer[];
  
  
  // you need 
  ngOnInit(){
     console.log("NgInit called..!");

     //this.pdf = 'http://www.africau.edu/images/default/sample.pdf';
     this.callUserService1(); 
     
    };


  callUserService1(){
    //alert("clicked me..callUserService1 !");
    this.apiService.getCustomers().subscribe((data)=>{
      //Customer[] cust = data;
        //console.log(data["_body"]);
        console.log('json to string..'+JSON.stringify(data));
        this.results = data;
        this.dataSource1= data;
      });
  }

  callUserService(){
    alert("clicked me.. in routing!");
    this.router.navigate(['/hello']); 
  }
  
  
}
