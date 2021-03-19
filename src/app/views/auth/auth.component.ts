import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthResponse } from 'src/app/interfaces/auth-response.interface';
import { IAuthUser } from 'src/app/interfaces/auth-user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authUser: IAuthUser = {
    email: 'luisvilcarromero@galaxy.edu.pe',
    password: '123456'
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authService.signIn(this.authUser)
    .subscribe({
      error: (err) => console.log(err),
      next: (res) => this.setToken(res),
      complete: () => console.log('Completado')
    });
  }

  signUp(): void {
    this.authService.signUp(this.authUser)
    .subscribe(
      (res) => this.setToken(res),
      (err) => console.log(err),
      () => console.log('Completado')
    );
  }

  setToken(res: IAuthResponse): void {
    localStorage.setItem('token', res.accessToken);
    this.goHome();
  }

  goHome(): void {
    this.router.navigateByUrl('/home');
  }

}
