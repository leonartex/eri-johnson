import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  resultado = localStorage.getItem('resultadoFinal');
  logado = true;

  constructor( private router: Router, private login: LoginService) {
    this.login.isLogado().subscribe(
      res => this.logado = res
    );
  }

  entrar() {
    this.router.navigate(['/login']);
  }

  testeFoto() {
    this.router.navigate(['/exame-fotografico']);
  }

}
