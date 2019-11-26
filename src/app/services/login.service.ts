import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../models/Usuario';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AlertaService } from './alerta.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afa: AngularFireAuth, private fs: AngularFirestore, private route: Router, private al: AlertaService) { }

  get usuarioLogado(): firebase.User {
    return this.afa.auth.currentUser;
  }

  public async cadastrar(u: Usuario): Promise<boolean> {
    const loading = await this.al.loading();
    return this.afa.auth.createUserWithEmailAndPassword(u.email, u.senha).then(
      credenciais => {
        return this.fs.doc('/users/' + credenciais.user.uid).set({
          tipo: 'comum'
        })
          .then(() => {
            this.afa.auth.currentUser.sendEmailVerification({
              url: environment.urlBase
            });
            loading.dismiss();
            return true;
          });
      },
      error => {
        loading.dismiss();
        if (error.code === 'auth/invalid-email') {
          this.al.toast({ message: 'Email inválido, por favor utilize outro!' });
        } else {
          this.al.toast({ message: error });
        }
        return false;
      }
    );
  }

  public async login(u: Usuario) {
    const loading = await this.al.loading();
    this.afa.auth.signInWithEmailAndPassword(u.email, u.senha).then(
      user => {
        if (user.user.emailVerified) {
          loading.dismiss();
          localStorage.removeItem('usuario');
          localStorage.setItem('usuario', user.user.uid);
          this.route.navigate(['ser-eri']);
        } else {
          loading.dismiss();
          this.logout();
        }
      },
      error => {
        loading.dismiss();
        this.al.toast({ message: error });
        console.log(error);
      }
    );
  }

  public logout() {
    this.afa.auth.signOut();
    localStorage.removeItem('usuario');
    this.route.navigate(['login']);
  }

  public isLogado(): Observable<boolean> {
    return this.afa.authState.pipe(
      map(usuario => {
        return usuario !== null;
      })
    );
  }

  public async recuperarSenha(email: string): Promise<boolean> {
    const loading = await this.al.loading();
    return this.afa.auth.sendPasswordResetEmail(email, { url: environment.urlBase + '/login' }).then(
      res => {
        loading.dismiss();
        return true;
      },
      err => {
        loading.dismiss();
        this.al.toast({ message: err });
        return false;
      }
    );
  }
}
