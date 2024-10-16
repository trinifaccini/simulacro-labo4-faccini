import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { ActorService } from '../../services/actor.service';
import { Actor } from '../../models/actor.interface';
import { Subscription } from 'rxjs';
import { Pelicula } from '../../models/pelicula.interface';
import { TablaActoresComponent } from '../tabla-actores/tabla-actores.component';
import { DetalleActorComponent } from '../detalle-actor/detalle-actor.component';
import { DetallePaisComponent } from '../detalle-pais/detalle-pais.component';

@Component({
  selector: 'app-actores',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, TablaActoresComponent, DetalleActorComponent, DetallePaisComponent],
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class ActoresComponent {

  listaActores: Actor[] = [];
  actoresSubscription: Subscription = new Subscription();
  router = inject(Router);
  http = inject(HttpClient);
  actorService = inject(ActorService);
  errorMessage: any = null;
  actorSeleccionado: Actor | null = null;

  ngOnInit(): void {
    this.obtenerActores();
  }

  ngOnDestroy(): void {
    if (this.actoresSubscription) {
      this.actoresSubscription.unsubscribe();
    }
  }

  obtenerActores() {
    this.actoresSubscription = this.actorService.obtenerActores().subscribe(actores => {
      this.listaActores = actores;
      console.log(this.listaActores);
    });
  }

  mostrarDetalle(actor: any) {
    console.log(actor);
    this.actorSeleccionado = actor;
  }

}
