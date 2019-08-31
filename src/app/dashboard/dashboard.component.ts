import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  id: number;
  private sub: any;
  resultParms :any;
  constructor(private router: Router,private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log('route ngint called..!'+JSON.stringify(params) );
      this.resultParms = params;
      this.id = params['id']; // (+) converts string 'id' to a number
console.log('id value >>>>'+this.id);
      // In a real app: dispatch action to load the details here.
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
