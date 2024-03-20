import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscadorComponent } from './buscador/buscador.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BuscadorComponent,
    ContenedorComponent,
    ResultadoComponent
  ],
  exports: [
    ContenedorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GifModule { }
