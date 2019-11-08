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
      resultType: CameraResultType.Uri
    });

    this.imagem = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath);
    console.log(this.imagem);
    this.eri.verificaEri(this.imagem).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }

}
