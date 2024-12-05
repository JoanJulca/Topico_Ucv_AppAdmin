import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { user_Estructura } from 'src/app/models/user_Estructura.model';
import { FirebaseService_Datos } from 'src/app/services/firebase_Datos.service';
import { UtilsService_Image } from 'src/app/services/utils_Image.service';

@Component({
  selector: 'app-main-p_Barra_IS',
  templateUrl: './main-p_Barra_IS.page.html',
  styleUrls: ['./main-p_Barra_IS.page.scss'],
})
export class MainP_Barra_ISPage implements OnInit {

  pages =[
    {title:'Administracion-Doctores',url:'/main-p/UserDoctor',icon:'medical-outline'},
    {title:'Administracion-Usuarios',url:'/main-p/UserUsuario',icon:'medical-outline'},
    {title:'Reporte General de citas',url:'/main-p/reportes',icon:'medical-outline'},

]

 router = inject(Router);
 firebaseSvc = inject(FirebaseService_Datos);
 utilsSvc = inject(UtilsService_Image);


 currentPath: string ='';


  ngOnInit() {
    this.router.events.subscribe((event: any)=>{
      if(event?.url) this.currentPath = event.url;
    })
  }


  user(): user_Estructura {
    return this.utilsSvc.getFromLocalStorage('users');
  }


//cerrar sesion
  singOut(){
    this.firebaseSvc.sigOut();
  }

  constructor() { }



}
