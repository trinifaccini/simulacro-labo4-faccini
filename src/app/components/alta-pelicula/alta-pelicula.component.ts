import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, OnDestroy, EventEmitter, Output, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { ActorService } from '../../services/actor.service';
import { Actor } from '../../models/actor.interface';
import { Subscription } from 'rxjs';
import { TablaActoresComponent } from '../tabla-actores/tabla-actores.component';

@Component({
  selector: 'app-alta-pelicula',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, TablaActoresComponent],
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AltaPeliculaComponent implements OnInit, OnDestroy {

  listadoActores: Actor[] = [];
  actoresSubscription: Subscription = new Subscription();

  fb = inject(FormBuilder);
  router = inject(Router);
  http = inject(HttpClient);
  peliculaService = inject(PeliculaService);
  actorService = inject(ActorService);
  errorMessage: any = null;

  actorSeleccionado: Actor | null = null;

  formPelicula = this.fb.nonNullable.group({
    id: ['', Validators.required],
    nombre: ['', Validators.required],
    tipo: ['', Validators.required],
    fecha_estreno: ['', Validators.required],
    cantidad_publico: ['', Validators.required],
    imagen: ['', Validators.required],
  });



  ngOnInit(): void {
    this.obtenerActores();
  }

  ngOnDestroy(): void {
    if (this.actoresSubscription) {
      this.actoresSubscription.unsubscribe();
    }
  }

  async onSubmit(): Promise<void> {
    try {
      this.altaPelicula();
      this.router.navigate(['/home']);
    } catch (e) {
      this.errorMessage = e;
    }
  }

  altaPelicula() {
    const form = this.formPelicula.getRawValue();
  
    if (!this.actorSeleccionado) {
      this.errorMessage = 'Por favor, selecciona un actor para el protagonista';
      return;
    }
  
    const nuevaPelicula = {
      cantidad_publico: form.cantidad_publico,
      fecha_estreno: new Date(form.fecha_estreno),
      id: form.id,
      imagen: form.imagen,
      nombre: form.nombre,
      protagonista_id: this.actorSeleccionado.uid,  // Asigna el ID del actor seleccionado
      tipo: form.tipo
    };
  
    this.peliculaService.agregarPelicula(nuevaPelicula)
      .then(() => {
        console.log('Película agregada exitosamente');
        // this.peliculaAgregada.emit(nuevaPelicula); // Emitir la película agregada
        this.router.navigate(['/Peliculas']);
      })
      .catch(error => {
        console.error('Error al agregar película:', error);
        this.errorMessage = error.message;
      });
  }
  

  obtenerActores() {
    this.actoresSubscription = this.actorService.obtenerActores().subscribe(actores => {
      this.listadoActores = actores;
      console.log(this.listadoActores);
    });
  }

  seleccionarActor(actor: any) {
    this.actorSeleccionado = actor;
  }

}
