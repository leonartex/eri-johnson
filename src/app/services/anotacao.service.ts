import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Anotacao } from '../models/Anotacao';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {

  constructor(private afs: AngularFirestore, ) { }

  public gravar(anotacao: Anotacao) {
    if (anotacao.uid) {
      const url = 'anotacao/' + anotacao.uid;
      this.afs.doc(url).update({ ...anotacao });
    } else {
      this.afs.collection('anotacao').add({
        ...anotacao
      });
    }
  }

  public remover(uid: string) {
    this.afs.collection('anotacao').doc(uid).delete();
  }

  public listar() {
    return this.afs
      .collection('anotacao')
      .snapshotChanges()
      .pipe(
        map(item =>
          item.map(anotacao => {
            const uid = anotacao.payload.doc.id;
            const dados = anotacao.payload.doc.data();
            return { uid, ...dados };
          })
        )
      );
  }

  public listarUsuario(usuario) {
    return this.afs
      .collection('anotacao', ref => ref.where('usuario', '==', usuario))
      .snapshotChanges()
      .pipe(
        map(item =>
          item.map(anotacao => {
            const uid = anotacao.payload.doc.id;
            const dados = anotacao.payload.doc.data();
            return { uid, ...dados };
          })
        )
      );
  }
}
