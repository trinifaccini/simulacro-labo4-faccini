import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ActorService } from '../../services/actor.service';
import { Actor } from '../../models/actor.interface';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css'],
  imports: [CommonModule]
})

export class DetalleActorComponent {

  @Input() actor: any;

}
