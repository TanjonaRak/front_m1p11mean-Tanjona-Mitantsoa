import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceModalService {

  constructor() { }

  private closeModal = new Subject<void>();

  closeModal$ = this.closeModal.asObservable();
  
  closeModalFonction():void{
    this.closeModal.next();
  }
}
