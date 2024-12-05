import { Component, Input, OnInit, inject } from '@angular/core';
import { UtilsService_Image } from 'src/app/services/utils_Image.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

 @Input() isModal!:boolean;
 @Input() showMenu!:boolean;
 @Input() title!:string;
 @Input() backButton!: string;


 utilSvc = inject(UtilsService_Image);


  ngOnInit() {}

  dismissModal(){
    this.utilSvc.dismissModal();
  }

}
