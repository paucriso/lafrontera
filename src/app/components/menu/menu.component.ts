import { MenuService } from './../../services/menu.service';
import {faMapMarkerAlt, faPhoneAlt, faClock} from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faClock = faClock;
  appetizers = [];
  tacos = [];
  tortas = [];
  quesadillas = [];
  tostadas = [];
  burritos = [];
  sopes = [];
  platillos = [];
  caldos = [];
  sideOrders = [];
  constructor(private menuService: MenuService) {
    this.appetizers = menuService.appetizers;
    this.tacos = menuService.tacos;
    this.tortas = menuService.tortas;
    this.quesadillas = menuService.quesadillas;
    this.tostadas = menuService.tostadas;
    this.burritos = menuService.burritos;
    this.sopes = menuService.sopes;
    this.platillos = menuService.platillos;
    this.caldos = menuService.caldos;
    this.sideOrders = menuService.sideOrders;
  }

  ngOnInit(): void {
  }

}
