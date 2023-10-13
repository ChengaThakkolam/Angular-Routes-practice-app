import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { time } from 'console';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:{id:string;name:string}={id:'simple',name:'sample'};

  constructor(private existingRoutes:Router,private activeRoutes:ActivatedRoute) { }

  ngOnInit(): void {
    this.user={
      id:this.activeRoutes.snapshot.params['id'],
      name:this.activeRoutes.snapshot.params['name']
    }
    this.activeRoutes.params.subscribe(
      (data:Params)=>{
       this.user={
        id:data['id'],
        name:data['name']
       }
      }
    );
    this.activeRoutes.queryParams.subscribe(
      (data)=>
      {
        console.log("Query Params =>"+data['page'],data['search']);
      }
    );

    
    this.activeRoutes.fragment.subscribe(
      (data)=>
      {
        console.log("fragments Params =>"+data);
      }
    );

  }
  goToCategories(){
    this.existingRoutes.navigateByUrl('/categories');

  }

  getAnotherPersonDetails(){
    this.existingRoutes.navigate(['/users',5,'Simple']
    ,{
      queryParams:{page:9,search:'anotherPerson'},
      fragment:"loading"
    });
  }

}
