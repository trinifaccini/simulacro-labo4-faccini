import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ActorService } from '../../services/actor.service';
import { Actor } from '../../models/actor.interface';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css'],
  imports: [CommonModule]
})
export class DetallePeliculaComponent implements OnChanges, OnDestroy{

  @Input() pelicula: any;
  actorProtagonista: Actor | undefined;

  actoresSubscription: Subscription = new Subscription();


  constructor(private actorService: ActorService) {}

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['pelicula'] && changes['pelicula'].currentValue) {
      
      const peliculaSeleccionada = changes['pelicula'].currentValue;      

      this.actoresSubscription = this.actorService.obtenerActorPorUid(peliculaSeleccionada.protagonista_id).subscribe(actor => {
        if (actor) {
          this.actorProtagonista = actor;
        } else {
          console.log('El protagonista no fue encontrado en Firestore.');
        }
      });
      
    }
  }

  ngOnDestroy(): void {
    if (this.actoresSubscription) {
      this.actoresSubscription.unsubscribe();
    }
  }
}
