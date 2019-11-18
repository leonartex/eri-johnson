import { Injectable } from '@angular/core';
import questionario from '../../assets/questionario.json';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  constructor() { }

  public pegaQuestionario() {
    return questionario;
  }
}
