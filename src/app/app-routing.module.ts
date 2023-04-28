import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EntradasComponent } from './entradas/entradas.component';
import { SalidasComponent } from './salidas/salidas.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { CambiosComponent } from './cambios/cambios.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'entradas', component:EntradasComponent},
  {path: 'salidas', component:SalidasComponent},
  {path: 'devoluciones', component:DevolucionesComponent},
  {path: 'cambios', component:CambiosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
