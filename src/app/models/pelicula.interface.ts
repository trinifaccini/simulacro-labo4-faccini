import { Timestamp } from "firebase/firestore";

export interface Pelicula {
   uid:string,
   id: number,
   nombre: string,
   fecha_estreno: Timestamp,
   protagonista_id: string,
   cantidad_publico: number,
   tipo: string,
   imagen: string,
}