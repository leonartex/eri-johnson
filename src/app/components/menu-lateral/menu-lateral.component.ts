import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent implements OnInit {
  logado = false;
  constructor(private login: LoginService) { }

  ngOnInit() {
    this.login.isLogado().subscribe(
      res => this.logado = res
    );
  }

}
