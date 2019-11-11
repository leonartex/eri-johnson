import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  usuario = new Usuario();

  constructor(private login: LoginService) { }

  ngOnInit() {
  }

  cadastrar() {
    this.login.cadastrar(this.usuario);
  }

}
