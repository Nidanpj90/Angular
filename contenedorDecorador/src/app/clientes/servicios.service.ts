import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  clientes: Cliente[]= [
    {
      id:1,
      cif:"33333H",
      direccion:"La Paz 14",
      grupo:22,
      nombre:"Pepe"
    },
    {
      id:10,
      cif:"669999T",
      direccion:"Vergara 33",
      grupo:20,
      nombre:"Luisa"
    },
  ]

  constructor() { }
}
