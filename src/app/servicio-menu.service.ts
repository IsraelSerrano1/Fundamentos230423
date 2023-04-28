import { Injectable } from '@angular/core';
import { Menu } from './_modelo/menu';

@Injectable({
  providedIn: 'root',
})
export class ServicioMenuService {
  menus: Menu[] = [
    new Menu('home','Inicio', '/inicio'),
    new Menu('assignment_return','Entradas', '/entradas'),
    new Menu('exit_to_app','Salidas', '/salidas'),
    new Menu('compare_arrows','Cambios', '/cambios'),
    new Menu('autorenew','Devoluciones', '/devoluciones')
  ];

  constructor() {}
}
