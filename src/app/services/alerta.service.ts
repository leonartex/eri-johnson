import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { LoadingOptions, AlertOptions, ToastOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController, private toastCtrl: ToastController) { }

  async loading(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
      ...options
    });
    await loading.present();
    return loading;
  }

  async alert(msg: string, botoes, options?: AlertOptions): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      message: msg,
      buttons: botoes,
      ...options
    });
    await alert.present();
    return alert;
  }

  async toast(options?: ToastOptions): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      position: 'bottom',
      duration: 5000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      ...options
    });
    await toast.present();
    return toast;
  }
}
