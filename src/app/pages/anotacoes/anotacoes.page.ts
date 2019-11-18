import { Component, OnInit } from '@angular/core';
import { AnotacaoService } from 'src/app/services/anotacao.service';
import { Anotacao } from 'src/app/models/Anotacao';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.page.html',
  styleUrls: ['./anotacoes.page.scss'],
})
export class AnotacoesPage implements OnInit {
  usuario = localStorage.getItem('usuario');
  anotacoes;
  anotacaoAtual = new Anotacao();
  constructor(private anota: AnotacaoService, private login: LoginService) { }

  ngOnInit() {
    this.anotacoes = this.anota.listarUsuario(this.usuario);
  }

  gravar() {
    this.anotacaoAtual.usuario = this.usuario;
    this.anota.gravar(this.anotacaoAtual);
    this.anotacaoAtual = new Anotacao();
  }

  editar(item) {
    this.anotacaoAtual = item;
  }

  deletar(uid) {
    this.anota.remover(uid);
  }
}
