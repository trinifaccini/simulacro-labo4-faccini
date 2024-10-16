import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-tabla-actores',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TablaActoresComponent {

  @Input() actores: any[] = [];
  @Output() actorSeleccionado = new EventEmitter<any>();
  actorSeleccionadoLista: any;


  seleccionarActor(actor: any) {
    this.actorSeleccionadoLista = actor;
    this.actorSeleccionado.emit(actor);
  }

}
