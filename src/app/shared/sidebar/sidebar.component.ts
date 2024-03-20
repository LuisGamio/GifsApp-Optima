import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  get historial() {
    return this.gifsService.historial;
  }

  constructor( private gifsService: GifsService  ) { }

  buscar( termino: string ) {
    this.gifsService.buscarGifs( termino );
  }

  ngOnInit(): void {
  }


}
