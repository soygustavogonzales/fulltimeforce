import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {SvcUsersService} from './services/svc-users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  postId;
  constructor(
    private http:HttpClient,
    private svcUsers: SvcUsersService
    ){

  }
  ngOnInit(){
    //console.log(this.svcUsers.GetAny())
    /*
    */ 

   this.svcUsers.GetUsers()
    .subscribe((res:any)=>{
      console.log(res)
    })
 

  }
  title = 'myapp';
  searchText;
  users = [
  {
    name:"gustavo",
    lastname:"gonzales",
    email:"gustavo@gmail.com",
    usergroup:"registered",
    lastvisit:"31/07/2006"
  },
  {
    name:"omar",
    lastname:"gonzales",
    email:"omar@gmail.com",
    usergroup:"registered",
    lastvisit:"31/07/2006"

  },
  {
    name:"erick",
    lastname:"gonzales",
    email:"erick@gmail.com",
    usergroup:"registered",
    lastvisit:"30/07/2006"

  }
]
}
