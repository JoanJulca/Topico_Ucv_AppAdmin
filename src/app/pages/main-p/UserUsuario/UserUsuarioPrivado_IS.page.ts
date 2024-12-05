import { Component, OnInit, inject } from '@angular/core';
import { getFirestore, query, onSnapshot, collection, where, doc, getDoc, updateDoc } from 'firebase/firestore';
import { user_Estructura } from 'src/app/models/user_Estructura.model';
import { FirebaseService_Datos } from 'src/app/services/firebase_Datos.service';
import { UtilsService_Image } from 'src/app/services/utils_Image.service';

@Component({
  selector: 'app-UserUsuarioPrivado_IS',
  templateUrl: './UserUsuarioPrivado_IS.page.html',
  styleUrls: ['./UserUsuarioPrivado_IS.page.scss'],
})
export class UserUsuarioPrivado_ISPage implements OnInit {
  firebaseSvc = inject(FirebaseService_Datos);
  utilsSvc = inject(UtilsService_Image);
  users: user_Estructura[] = [];
  loading: boolean = false;

  ngOnInit() {
    this.ionViewWillEnter(); // Puedes invocar el método aquí para obtener usuarios cuando se inicializa el componente
  }

  user(): user_Estructura {
    return this.utilsSvc.getFromLocalStorage('user');
  }

  ionViewWillEnter() {
    this.getUsers();
  }

  doRefresh(event: any) {
    this.getUsers();
    event.target.complete(); // Completa el evento después de la llamada
  }

  async getUsers() {
    this.loading = true;

    try {
      const usersQuery = query(collection(getFirestore(), 'user'), where('role', '==', 'student'));

      onSnapshot(usersQuery, (querySnapshot) => {
        const usersList: user_Estructura[] = [];
        querySnapshot.forEach((doc) => {
          usersList.push(doc.data() as user_Estructura);
        });
        this.users = usersList;
        this.loading = false;
      }, (error) => {
        console.error('Error al obtener los usuarios:', error);
        this.loading = false;
      });

    } catch (error) {
      console.error('Error en la consulta de usuarios:', error);
      this.loading = false;
    }
  }

  async updateUserAccountStatus(userId: string, newStatus: string) {
    try {
      const userRef = doc(getFirestore(), 'user', userId);
      const userSnapshot = await getDoc(userRef);

      if (userSnapshot.exists()) {
        await updateDoc(userRef, { estadocuenta: newStatus });
        console.log('Estado de la cuenta actualizado con éxito');
      } else {
        console.error('El usuario no existe');
      }
    } catch (error) {
      console.error('Error al actualizar el estado de la cuenta:', error);
    }
  }
}
