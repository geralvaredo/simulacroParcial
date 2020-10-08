import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.scss']
})
export class RegionesComponent implements OnInit {

  titulo = 'Americas';
  @Output() region: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.region.emit('Americas');

  }

  cambiarRegion(region: string): void{
    this.titulo = region;
    this.region.emit(region);
  }

}
