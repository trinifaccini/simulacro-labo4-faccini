import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.css'
})
export class DetallePaisComponent implements OnInit , OnChanges {

  @Input() nombrePais: any;
  pais: any;

  paisesSubscription: Subscription = new Subscription();

  constructor(private paisService: ApiRequestService) {}

  ngOnInit(): void {
      console.log("hola aca");
      
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log("holitas");
    
    if (changes['nombrePais'] && changes['nombrePais'].currentValue) {
      
      const paisSeleccionado = changes['nombrePais'].currentValue;      

      this.paisesSubscription = this.paisService.obtenerPaisPorNombre(paisSeleccionado).subscribe(pais => {
        if (pais) {          
          this.pais = pais[0];
        } else {
          console.log('El pais no fue encontrado la API.');
        }
      });
      
    }
  }

  ngOnDestroy(): void {
    if (this.paisesSubscription) {
      this.paisesSubscription.unsubscribe();
    }
  }

}
