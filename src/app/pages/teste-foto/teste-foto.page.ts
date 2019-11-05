import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);
import { Plugins, CameraResultType } from '@capacitor/core';

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

  constructor() { }

  ngOnInit() {
    this.baterFoto();
  }

  async baterFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });

    this.imagem = image.dataUrl;
  }

}
