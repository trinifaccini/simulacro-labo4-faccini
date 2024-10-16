import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas-actor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas-actor.component.html',
  styleUrl: './peliculas-actor.component.css'
})

export class PeliculasActorComponent implements OnChanges, OnDestroy {

  @Input() actor_uid: any;
  peliculasActor: any[] = []

  peliculasSubscription: Subscription = new Subscription();

  constructor(private peliculaService: PeliculaService) {}

  ngOnChanges(changes: SimpleChanges): void {

    console.log("aca peliculas actor");
    console.log(this.actor_uid);
    
    
    if (changes['actor_uid'] && changes['actor_uid'].currentValue) {
      
      const actorSeleccionado = changes['actor_uid'].currentValue;      

      this.peliculasSubscription = this.peliculaService.obtenerPeliculasPorProtagonista(actorSeleccionado).subscribe(peliculas => {
        if (peliculas) {          
          this.peliculasActor = peliculas;
        } else {
          console.log('El actor no actua en ninguna pelocula.');
        }
      });
      
    }
  }

  ngOnDestroy(): void {
    if (this.peliculasSubscription) {
      this.peliculasSubscription.unsubscribe();
    }
  }
}
