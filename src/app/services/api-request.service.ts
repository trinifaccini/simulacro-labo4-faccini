import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiRequestService {
  http = inject(HttpClient);

  private apiUrl = 'https://restcountries.com/v3.1/';

  datos: any = {};

  constructor() {}

  obtenerPais(filtro: string, clave: string) {
    // "https://api.github.com/users/usuario?ejemplo=labo4";

    const peticion = this.http.get(this.apiUrl + filtro +  '/' + clave)
    return peticion;
  }



  // Método para obtener todos los países con solo algunos campos
  obtenerPaises(): Observable<any[]> {
    const url = `${this.apiUrl}all?fields=name,capital,region,flags,population`;
    return this.http.get<any[]>(url);
  }

  // Método para buscar un país por nombre y obtener solo algunos campos
  obtenerPaisPorNombre(nombre: string): Observable<any> {
    const url = `${this.apiUrl}name/${nombre}?fields=name,capital,region,flags,population`;
    return this.http.get<any>(url);
  }
}