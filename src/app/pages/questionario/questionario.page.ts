import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from 'src/app/services/questionario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.page.html',
  styleUrls: ['./questionario.page.scss'],
})
export class QuestionarioPage implements OnInit {
  questoes: any;
  quantidadeQuestoes: number;
  questaoAtual: any;
  contador = 1;
  pontuacao = 0;
  alternativaEscolhida = null;
  constructor(private questionario: QuestionarioService, private router: Router) { }

  ngOnInit() {
    this.questoes = this.questionario.pegaQuestionario();
    this.quantidadeQuestoes = this.questoes.length;
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
    this.alternativaEscolhida = null;
  }

  resultado() {
    localStorage.removeItem('resultadoQuestionario');
    localStorage.setItem('resultadoQuestionario', String(this.pontuacao / this.quantidadeQuestoes));
    this.router.navigate(['/resultado']);
  }

}
