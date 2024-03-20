import { Component } from '@angular/core';

import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {

  input_buscador: string = '';

  constructor( private pepito: GifsService ) {}

  BuscarGif(){
    console.log(this.input_buscador);

    if ( this.input_buscador.trim().length == 0 ) {
      return;
    }

    this.pepito.buscarGifs( this.input_buscador );

    this.input_buscador = '';
  }

}
