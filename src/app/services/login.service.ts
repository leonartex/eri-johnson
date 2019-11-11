import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../models/Usuario';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afa: AngularFireAuth, private fs: AngularFirestore, private route: Router) { }

  get usuarioLogado(): firebase.User {
    return this.afa.auth.currentUser;
  }

  public cadastrar(u: Usuario) {
    this.afa.auth.createUserWithEmailAndPassword(u.email, u.senha).then(
      credenciais => {
        this.fs.doc('/users/' + credenciais.user.uid).set({
          tipo: 'comum'
        })
          .then(() => {
            this.afa.auth.currentUser.sendEmailVerification({
              url: environment.urlBase
            });
          });
      },
      erro => {
        if (erro.code === 'auth/invalid-email') {
          console.log('Email inválido');
        }
        console.log(erro);
      }
    );
  }

  public login(u: Usuario) {
    this.afa.auth.signInWithEmailAndPassword(u.email, u.senha).then(
      user => {
        if (user.user.emailVerified) {
          this.route.navigate(['administracao']);
        } else {
          this.logout();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  public logout() {
    this.afa.auth.signOut();
    this.route.navigate(['login']);
  }

  public isLogado() {
    return this.afa.authState.pipe(
      map(usuario => {
        // se usuario diferente de nulo
        // existe sessão ativa, ou usuario logado
        return usuario !== null;
      })
    );
  }
}
