import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  resultadoQuestionario = localStorage.resultadoQuestionario;
  resultadoEri = localStorage.resultadoEri;
  resultadoFausto = localStorage.resultadoFausto;
  media = (Number(this.resultadoEri) + Number(this.resultadoQuestionario)) / 2;
  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.setItem('resultadoFinal', String(this.media));
  }

  recomeco() {
    this.router.navigate(['/exame-fotografico']);
  }

}
