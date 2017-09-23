import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  contactMethods=[{
    id:"1",
    name:"student"
  },
  {
    id:"2",
    name:"employee"
  },
  {

    id:"3",
    name:"ceo"
  }
]

  constructor() { }

  ngOnInit() {
  }

}
