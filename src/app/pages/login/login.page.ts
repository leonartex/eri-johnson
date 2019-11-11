import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = new Usuario();
  constructor(private log: LoginService) { }

  ngOnInit() {
  }

  public login() {
    this.log.login(this.usuario);
  }

}
