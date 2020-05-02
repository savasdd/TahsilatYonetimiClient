import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {LoginInterface} from "./login-interface";

@Injectable({
  providedIn: 'root'
})
export class IzinService {
  private girisTemp: boolean;
  private giriskaynak = new Subject<boolean>();

  constructor() {
    this.girisTemp = false;
  }

  kullaniciGisi(): boolean {
    return !!this.girisTemp;
  }

  public girisKontrol(girisI: LoginInterface): boolean {
    if (girisI.kullaniciAdi === "sdede" && girisI.sifre === "123") {
      this.giriskaynak.next(true);
      this.girisTemp = true;
    } else {
      this.giriskaynak.next(false);
      this.girisTemp = false;
    }
    return this.girisTemp;
  }

  girisObservable(): Observable<boolean> {
    return this.giriskaynak.asObservable();
  }


  cikisYap() {
    this.girisTemp = false;
    this.giriskaynak.next(false);
    this.giriskaynak = null;
  }
}
