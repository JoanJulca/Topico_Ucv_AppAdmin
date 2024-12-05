import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseApp } from '@angular/fire/compat';
import { User } from 'firebase/auth';
import { FirebaseService_Datos } from 'src/app/services/firebase_Datos.service';
import { UtilsService_Image } from 'src/app/services/utils_Image.service';

@Component({
  selector: 'app-forgot-passwordDoctor_IS-doctor',
  templateUrl: './forgot-passwordDoctor_IS.page.html',
  styleUrls: ['./forgot-passwordDoctor_IS.page.scss'],
})
export class ForgotPasswordDoctor_ISPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

  })
  // creamo esta variable para inyectar el servicio de firebase

  firebaseSvc = inject(FirebaseService_Datos);
  utilSvc = inject(UtilsService_Image)

  ngOnInit() {
  }


  async submit() {
    if (this.form.valid) {

      const loading = await this.utilSvc.loading();
      await loading.present();

      this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then(res => {

        this.utilSvc.presentToast({
          message: 'Correo enviado con exito',
          duration: 2500,
          color: 'secundary',
          position: 'middle',
        }) 
        this.utilSvc.routerLink('/authP-autentificacion');
        this.form.reset();


      }).catch(error => {
        console.log(error);

        this.utilSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
        })

      }).finally(() => {
        loading.dismiss();
      })
    }
  }
  //======================
  


}
