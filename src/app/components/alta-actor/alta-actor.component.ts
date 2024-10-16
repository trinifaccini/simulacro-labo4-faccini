import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActorService } from '../../services/actor.service';
import { Subscription } from 'rxjs';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { ApiRequestService } from '../../services/api-request.service';


@Component({
  selector: 'app-alta-actor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, TablaPaisesComponent],
  templateUrl: './alta-actor.component.html',
  styleUrl: './alta-actor.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AltaActorComponent {

  listadoPaises: any[] = [];
  paisesSubscription: Subscription = new Subscription();

  fb = inject(FormBuilder);
  router = inject(Router);
  http = inject(HttpClient);
  paisService = inject(ApiRequestService);
  actorService = inject(ActorService);
  errorMessage: any = null;

  paisSeleccionado: any;

  formActor = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    dni: ['', Validators.required],
    edad: ['', Validators.required],
  });


  ngOnInit(): void {
    this.obtenerPaises();
  }

  ngOnDestroy(): void {
    if (this.paisesSubscription) {
      this.paisesSubscription.unsubscribe();
    }
  }


  async onSubmit(): Promise<void> {
    try {
      this.altaActor();
      this.router.navigate(['/Actores']);
    } catch (e) {
      this.errorMessage = e;
    }
  }


  altaActor() {
    const form = this.formActor.getRawValue();
  
    if (!this.paisSeleccionado) {
      this.errorMessage = 'Por favor, selecciona un pais para el actor';
      return;
    }
  
    const nuevoActor = {
      nombre: form.nombre,
      apellido: form.apellido,
      edad: form.edad,
      dni: form.dni,
      pais: this.paisSeleccionado.name.common
    };
  
    this.actorService.agregarActor(nuevoActor)
      .then(() => {
        console.log('Actor agregado exitosamente');
        // this.peliculaAgregada.emit(nuevaPelicula); // Emitir la película agregada
        this.router.navigate(['/Actores']);
      })
      .catch(error => {
        console.error('Error al agregar actor:', error);
        this.errorMessage = error.message;
      });
  }


  obtenerPaises(): void {

    this.paisService.obtenerPaises().subscribe({
      next: (data) => {
        this.listadoPaises = data;
        console.log('Todos los países:', this.listadoPaises);
      },
      error: (error) => {
        console.error('Error al obtener todos los países:', error);
      },
      complete: () => {
        console.log('Solicitud completada');
      }
    });

  }

  seleccionarPais(pais: any) {
    this.paisSeleccionado = pais;
  }

}
