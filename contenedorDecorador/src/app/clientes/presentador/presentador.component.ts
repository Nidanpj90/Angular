import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-presentador',
  templateUrl: './presentador.component.html',
  styleUrls: ['./presentador.component.css']
})
export class PresentadorComponent implements OnInit {
  @Input()
  id:number;
  @Input()
  nombre:String;
  @Input()
  cif:String;
  @Input()
  direccion:String;
  @Input()
  grupo:number;
  @Input()
  cliente:Cliente;
  @Input()
  clientes:Cliente[];

  @Output()
  propagar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onPropagar(dato:number) {
    this.propagar.emit(dato);
  }

}
