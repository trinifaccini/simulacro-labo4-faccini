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
import { TablaPeliculasComponent } from '../tabla-peliculas/tabla-peliculas.component';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, TablaPeliculasComponent, DetallePeliculaComponent],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class PeliculasComponent {

  listaPeliculas: Pelicula[] = [];
  peliculasSubscription: Subscription = new Subscription();
  router = inject(Router);
  http = inject(HttpClient);
  peliculaService = inject(PeliculaService);
  errorMessage: any = null;
  peliculaSeleccionada: Pelicula | null = null;

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  ngOnDestroy(): void {
    if (this.peliculasSubscription) {
      this.peliculasSubscription.unsubscribe();
    }
  }

  obtenerPeliculas() {
    this.peliculasSubscription = this.peliculaService.obtenerPeliculas().subscribe(peliculas => {
      this.listaPeliculas = peliculas;
      console.log(this.listaPeliculas);
    });
  }

  mostrarDetalle(pelicula: any) {
    this.peliculaSeleccionada = pelicula;
  }

}
