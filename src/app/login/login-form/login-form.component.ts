import {Component, OnInit} from '@angular/core';
import {LoginInterface} from "../../security/login-interface";
import {Router} from "@angular/router";
import {IzinService} from "../../security/izin.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  girisI: LoginInterface;

  constructor(private router: Router, private service: IzinService, private msb: MatSnackBar) {
  }

  ngOnInit(): void {
    this.girisI = {kullaniciAdi: '', sifre: ''}
  }

  giris() {
    const giris = this.service.girisKontrol(this.girisI);
    if (!giris) {
      this.msb.open('Kullanıcı adı ve şifrenizi kontrol ediniz', 'Uyarı', {duration: 3000})
    } else {
      this.router.navigate(['/home']);
    }
  }

}
