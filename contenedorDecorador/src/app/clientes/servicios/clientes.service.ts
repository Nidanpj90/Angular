import { Injectable } from '@angular/core';
import { Cliente } from '../cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes:Cliente[]=[
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
];

  constructor() { }

  anadirCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  clienteNuevo(): Cliente {
    return {
      nombre: 'DesarrolloWeb.com',
      cif: 'B123',
      direccion: 'Oficinas de EscuelaIT, C/ Formación online nº 1',
      id: 30,
      grupo: 22
    };
  }
}
