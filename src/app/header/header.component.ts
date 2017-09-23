import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
headerList=[
  {
    id:"1",
    name:"Find Rental Properties",
    Route:"FindRentalProperties"
  },
  {
    id:"2",
    name:"Sign In",
    Route:"signin"
  },
  {
    id:"3",
    name:"Sign Up",
    Route:"signup"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
