import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selector=[{
    id:"1",
    name:"select state"
  },
{
  id:"2",
  name:"india"

},{
  id:"3",
  name:"america"
}]

  constructor() { }

  ngOnInit() {
  }

}
