import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchtext="";

selectedoption=0;
  action = [
    {id:0,name:"select Dept"},
    {id:1,name:"CSE"},
    {id:2,name:"ECE"},
    {id:3,name:"EEE"}

  ]

  data = [
    {id:1,usn:"01fe20bcs001",name:"admin"}
  ]
}
