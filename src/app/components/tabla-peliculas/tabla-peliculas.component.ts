import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output} from '@angular/core';


@Component({
  selector: 'app-tabla-peliculas',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css'],
  schemas: []
})


export class TablaPeliculasComponent {

  @Input() peliculas: any[] = [];
  @Output() peliculaSeleccionada = new EventEmitter<any>();
  peliculaSeleccionadaLista: any;

  seleccionarPelicula(pelicula: any) {
    this.peliculaSeleccionadaLista = pelicula;
    this.peliculaSeleccionada.emit(pelicula);    
  }

}
