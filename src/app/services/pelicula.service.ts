import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pelicula } from '../models/pelicula.interface';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PeliculaService {

  constructor(private firestore: AngularFirestore) {}

  // Función para agregar una película
  agregarPelicula(pelicula: any): Promise<any> {
    return this.firestore.collection('peliculas').add(pelicula);
  }

  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.firestore.collection('peliculas').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        let data = a.payload.doc.data() as Pelicula;
        data.uid = a.payload.doc.id;
        return {...data };
      }))
    );
  }

  obtenerPeliculasPorProtagonista(protagonistaId: string): Observable<Pelicula[]> {
    return this.firestore.collection('peliculas', ref => 
      ref.where('protagonista_id', '==', protagonistaId)
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        let data = a.payload.doc.data() as Pelicula;
        data.uid = a.payload.doc.id;
        return { ...data };
      }))
    );
  }


  
}


