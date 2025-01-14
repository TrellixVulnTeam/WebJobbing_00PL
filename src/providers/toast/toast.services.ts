import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";


@Injectable()
export class ToastService2 {
    constructor(private toastCtrl: ToastController) {

    }

    show(message: string, duration: number = 3000) {
        return this.toastCtrl.create({
            message,
            duration,
        })
        .present();
    }
}