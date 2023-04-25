import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { GifPageComponent } from './gif-page/gif-page.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    ResultadosComponent,
    GifPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifPageComponent
  ]
})
export class GifsModule { }
