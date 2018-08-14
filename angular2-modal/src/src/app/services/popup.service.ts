import { Injectable } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { PopupComponent } from './../popup/popup.component';

@Injectable()
export class PopupService {

  constructor(private modalService: NgbModal) { }

  openPopUp(): Observable<any> {
    return new Observable<any>((subscriber) => {
      const refPop = this.modalService.open(PopupComponent, { backdrop: 'static' });
    });
  }

}