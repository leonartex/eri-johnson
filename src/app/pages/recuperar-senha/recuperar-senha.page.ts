import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {
  email = '';
  sucesso = false;
  constructor(private login: LoginService) { }

  ngOnInit() {
  }

  emailVazio() {
    return this.email === '';
  }

  recuperar() {
    this.login.recuperarSenha(this.email).then(
      res => this.sucesso = res
    );
  }
}
