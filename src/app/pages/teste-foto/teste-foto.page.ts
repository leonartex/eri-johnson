import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);
import { Plugins, CameraResultType } from '@capacitor/core';
import { EriJService } from 'src/app/services/eri-j.service';
import { DomSanitizer } from '@angular/platform-browser';

const { Camera } = Plugins;

@Component({
  selector: 'app-teste-foto',
  templateUrl: './teste-foto.page.html',
  styleUrls: ['./teste-foto.page.scss'],
})
export class TesteFotoPage implements OnInit {
  imagem: any;
  /*private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }*/

  constructor(private eri: EriJService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.baterFoto();
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

    this.eri.verificaEri(file).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }

}
