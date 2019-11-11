export class Usuario {
  email = '';
  senha = '';
  confirmaSenha = '';

  get valid(): boolean {
    return this.email !== '' && this.senha !== '' && this.senha === this.confirmaSenha;
  }
}
