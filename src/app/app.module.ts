import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { InicioComponent } from './inicio/inicio.component';
import { EntradasComponent } from './entradas/entradas.component';
import { SalidasComponent } from './salidas/salidas.component';
import { CambiosComponent } from './cambios/cambios.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EntradasComponent,
    SalidasComponent,
    CambiosComponent,
    DevolucionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
