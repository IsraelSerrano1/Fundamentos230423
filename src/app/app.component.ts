import { Component } from '@angular/core';
import { ServicioMenuService } from './servicio-menu.service';
import { Menu } from './_modelo/menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundamentos_13';
  menus: Menu[];

  constructor(private servicioMenu: ServicioMenuService){
    this.menus = servicioMenu.menus;
  }
  shouldRun = true;
}

