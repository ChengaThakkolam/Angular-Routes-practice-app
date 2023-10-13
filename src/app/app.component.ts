import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routes-app';
  loginStatus:boolean=false;

  constructor(private authService:AuthService){}

  onLogInClick(){
    console.log("login status ",this.loginStatus);
    this.authService.login();
    this.loginStatus=this.authService.isAuthenticated();
    console.log("login status ",this.loginStatus);

  }
  onLogoutClick(){
    console.log("login status ",this.loginStatus);
    this.authService.logOut();
    this.loginStatus=this.authService.isAuthenticated();
    console.log("login status ",this.loginStatus);
  }
}
