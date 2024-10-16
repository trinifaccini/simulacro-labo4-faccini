import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Actor } from '../models/actor.interface';

@Injectable({
  providedIn: 'root'
})

export class ActorService {

  constructor(private firestore: AngularFirestore) {}

  // Función para agregar un actor
  agregarActor(actor: any): Promise<any> {
    return this.firestore.collection('actores').add(actor);
  }

  obtenerActores(): Observable<Actor[]> {
    return this.firestore.collection('actores').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        let data = a.payload.doc.data() as Actor;
        data.uid = a.payload.doc.id;
        return {...data };
      }))
    );
  }


  obtenerActorPorUid(uid: string): Observable<Actor | undefined> {    
    return this.firestore.doc<Actor>(`actores/${uid}`).get().pipe(
      map(doc => {
        if (doc.exists) {
          return doc.data() as Actor;
        }
        return undefined;
      })
    );
  }
  
}
