import { Component, OnInit } from '@angular/core';
import { AnotacaoService } from 'src/app/services/anotacao.service';
import { Anotacao } from 'src/app/models/Anotacao';
import { LoginService } from 'src/app/services/login.service';
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.page.html',
  styleUrls: ['./anotacoes.page.scss'],
})
export class AnotacoesPage implements OnInit {
  usuario = localStorage.getItem('usuario');
  anotacoes;
  anotacaoAtual = new Anotacao();
  constructor(private anota: AnotacaoService, private login: LoginService, private alerta: AlertaService) { }

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

  deletar(item) {
    this.alerta.alert(
      'Tem certeza que quer apagar "Ser Eri Johnson é ' + item.conteudo + '"?',
      [{
        text: 'Cancel',
      }, {
        text: 'OK',
        handler: () => {
          this.anota.remover(item.uid);
        }
      }],
      { header: 'Confirme sua ação' });
  }
}
