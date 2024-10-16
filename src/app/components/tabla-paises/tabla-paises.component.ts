import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})


export class TablaPaisesComponent {

  @Input() paises: any[] = [];
  @Output() paisSeleccionado = new EventEmitter<any>();
  paisSeleccionadoLista: any;

  seleccionarPais(pais: any) {
    this.paisSeleccionadoLista = pais
    this.paisSeleccionado.emit(pais);
  }


}
