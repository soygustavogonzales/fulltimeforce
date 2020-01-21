import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
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
