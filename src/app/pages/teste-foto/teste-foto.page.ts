import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);
import { Plugins, CameraResultType } from '@capacitor/core';
import { EriJService } from 'src/app/services/eri-j.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertaService } from 'src/app/services/alerta.service';

const { Camera } = Plugins;

@Component({
  selector: 'app-teste-foto',
  templateUrl: './teste-foto.page.html',
  styleUrls: ['./teste-foto.page.scss'],
})
export class TesteFotoPage implements OnInit {
  imagem: any;
  isResultadoPronto = false;
  resultado;

  constructor(
    private eri: EriJService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private al: AlertaService
  ) { }

  ngOnInit() {
    this.baterFoto();
  }

  public responder() {
    this.router.navigate(['/questionario']);
  }

  async baterFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });

    const byteString = window.atob(image.base64String);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    const file = new File([blob], 'eri.jpg', { type: 'image/jpeg' });
    this.imagem = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));

    const loading = await this.al.loading();
    this.eri.verificaEri(file).subscribe(
      resp => {
        loading.dismiss();
        console.log(resp.images[0].classifiers[0].classes);
        this.resultado = resp.images[0].classifiers[0].classes;
        localStorage.removeItem('resultadoEri');
        localStorage.setItem('resultadoEri', String(this.resultado[0].score));
        localStorage.removeItem('resultadoFausto');
        localStorage.setItem('resultadoFausto', String(this.resultado[1].score));
        this.isResultadoPronto = true;
      },
      error => {
        loading.dismiss();
        console.log(error);
      }
    );
  }

}
