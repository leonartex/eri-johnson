import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent implements OnInit {
  logado = false;
  naoLogado = false;
  constructor(private login: LoginService, private router: Router, private menu: MenuController) {
    this.login.isLogado().subscribe(
      res => {
        this.logado = res;
        this.naoLogado = !res;
      }
    );
  }

  ngOnInit() { }

  toggleMenu() {
    this.menu.toggle();
  }

}
