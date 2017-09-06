import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../common/guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userId: string;   // authService user.id
  userPass: string; // authService user.pass

  constructor( public authService: AuthService, public router: Router ) { }

  private doLogin() {
    console.log('login process = ', this.authService.isLogin);

    if ( this.authService.isLogin ) {
      const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/notice';
      // const navigationExtras: NavigationExtras = {
      //   preserveQueryParams: true,
      //   preserveFragment: true
      // };
      console.log('router url = ', redirect);
      this.router.navigate([redirect]);
    } else {
      alert('Login Falied');
    }
  }

  login( userId, userPass ) {

    if ( this.authService.login(userId, userPass) ) {
      return this.doLogin();
    }
  }

  logout() {
    this.authService.logout();
  }

}
