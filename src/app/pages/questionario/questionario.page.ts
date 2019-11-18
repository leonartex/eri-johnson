import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from 'src/app/services/questionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.page.html',
  styleUrls: ['./questionario.page.scss'],
})
export class QuestionarioPage implements OnInit {
  questoes: any;
  questaoAtual: any;
  contador = 1;
  pontuacao = 0;
  constructor(private questionario: QuestionarioService, private router: Router) { }

  ngOnInit() {
    this.questoes = this.questionario.pegaQuestionario();
    this.questaoAtual = this.questoes[0];
  }

  responder(opcao) {
    console.log('Opção: ', opcao);
    if (this.questaoAtual.correta === opcao) {
      this.pontuacao++;
    }
    console.log('Pontuação: ', this.pontuacao);
    this.questoes.shift();
    this.questaoAtual = this.questoes[0];
    this.contador++;
  }

  resultado() {
    localStorage.pontuacaoQuestionario = this.pontuacao;
    this.router.navigate(['/resultado']);
  }

}
