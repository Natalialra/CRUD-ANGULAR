import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  // O BehaviorSubject é um Observable que pode ser alterado, e fica de olho nas alterações que acontecem.
   private _headerData = new BehaviorSubject<HeaderData>({
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
