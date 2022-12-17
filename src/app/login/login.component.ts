import { Component,OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="";
  password="";
  err1="";
  err2="";
  err3="";

  constructor(private router:Router,private auth:AuthService){}

  ngOnInit(): void {
      
  }

  login()
  {
    if(this.username.trim().length === 0 && this.password.trim().length===0)
    {
      this.err3="enter required details";
    }
    else if(this.username.trim().length === 0 )
    {
      this.err1="Username is required";
    }
    else if(this.password.trim().length===0)
    {
      this.err2="Password is required"
    }
    else
    {
     let res = this.auth.login(this.username,this.password)
     if(res===200)
     {
      this.router.navigate(['home']);
     }
     else
     {
      alert("Invalid User");
     }
    }
  }
}
