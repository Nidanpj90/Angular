import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

  clientes:Cliente[]/*=[
    {
    id:1,
    cif:"12345678U",
    direccion:"La paz, 14",
    nombre:"Pepe",
    grupo:2
    },
    {
      id:2,
      cif:"12345678Z",
      direccion:"Vergara, 14",
      nombre:"Lola",
      grupo:20
      }
];*/

  constructor(public clientesService: ClientesService) {
    
   }

  ngOnInit() {
    //console.log(this.clientesService);
    this.clientes=this.clientesService.clientes;
  }

  procesaPropagar(mensaje) {
    console.log(mensaje);
    alert(this.clientes[mensaje-1].nombre);
  }

}
