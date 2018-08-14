import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PopupService} from './services/popup.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = '';
  
  constructor(private popupService:PopupService){

  }

  private openPopup():void{
    this.popupService.openPopUp().subscribe((res)=>{
      console.log('open..');
    });

  }


}
