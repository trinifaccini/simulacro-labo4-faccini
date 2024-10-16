import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-tabla-actores',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css'],
  schemas: []
})

export class TablaActoresComponent {

  @Input() actores: any[] = [];
  @Output() actorSeleccionado = new EventEmitter<any>();

  seleccionarActor(actor: any) {
    this.actorSeleccionado.emit(actor);
  }

}
