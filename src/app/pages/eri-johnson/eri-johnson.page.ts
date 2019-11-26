import { Component, OnInit } from '@angular/core';
import { AnotacaoService } from 'src/app/services/anotacao.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-eri-johnson',
  templateUrl: './eri-johnson.page.html',
  styleUrls: ['./eri-johnson.page.scss'],
})
export class EriJohnsonPage implements OnInit {
  anotacoes;
  carregado = false;
  isLogado = false;
  constructor(private anota: AnotacaoService, private router: Router, private login: LoginService) {
    this.login.isLogado().subscribe(
      res => this.isLogado = res
    );
  }

  ngOnInit() {
    this.anotacoes = this.anota.listar().subscribe(
      res => {
        this.anotacoes = res;
        this.carregado = true;
      }
    );
  }

  public anotar() {
    this.router.navigate(['/ser-eri/escrever']);
  }

}
