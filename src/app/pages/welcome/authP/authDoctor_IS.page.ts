import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService_Datos } from 'src/app/services/firebase_Datos.service';
import { UtilsService_Image } from 'src/app/services/utils_Image.service';
import { user_Estructura } from 'src/app/models/user_Estructura.model';

@Component({
  selector: 'app-authDoctor_IS',templateUrl: './authDoctor_IS.page.html',styleUrls: ['./authDoctor_IS.page.scss'],
})
export class AuthDoctor_ISPage implements OnInit {
  form: FormGroup;
  private firebaseSvc = inject(FirebaseService_Datos);
  private utilsSvc = inject(UtilsService_Image);

  constructor() {this.form = this.createForm();}
  ngOnInit() {}

  private createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async submit(): Promise<void> {
    if (this.form.invalid) return;
    const loading = await this.utilsSvc.loading();
    await loading.present();

    try {
      const res = await this.firebaseSvc.signIn(this.form.value as user_Estructura);
      await this.getUserInfo(res.user.uid);
    } catch {
      this.handleError('Usuario o Contraseña Incorrectos');
    } finally {loading.dismiss();
    }
  }

  private async getUserInfo(uid: string): Promise<void> {
    const loading = await this.utilsSvc.loading();
    await loading.present();
  
    try {
      const userDoc = await this.firebaseSvc.getDocument(`administrador/${uid}`);
      const user = userDoc as user_Estructura;

      if (user?.role === 'administrador') {
        this.handleSuccess(user);
      } else {this.handleError('Acceso denegado. Solo los administradores pueden acceder.');}
    } catch {this.handleError('No se pudo guardar la información, contacte con soporte técnico');
    } finally {loading.dismiss();
    }
  }

  private handleSuccess(user: user_Estructura): void {
    this.utilsSvc.saveInLocalStorage('administrador', user);
    this.utilsSvc.routerLink('/main-p/UserUsuario');
    this.form.reset();
    this.presentWelcomeToast(user.name);
  }

  private presentWelcomeToast(name: string): void {
    this.utilsSvc.presentToast({message: `Bienvenido a nuestra app: ${name}`,duration: 1500,
    color: 'dark',position: 'middle',});}
 
    private handleError(message: string): void {
    this.utilsSvc.presentToast({message,duration: 2500,color: 'dark',position: 'middle',
      icon: 'alert-circle-outline',});}
}
