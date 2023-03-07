import { Injectable } from '@angular/core';
import { Cliente, Grupo } from 'src/app/cliente.model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes$ = new Subject<Cliente[]>();
  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() {

    this.clientes = [
      {id:1, cif:"333333H",direccion:"La Paza,14", grupo:0, nombre:"Pepe"},
      {id:10, cif:"633333S",direccion:"Vergara,3", grupo:1, nombre:"Luisa"}
    ]


    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      },
    ];
  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  getClientes$(): Observable<Cliente[]>{
    return this.clientes$.asObservable();
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
    this.clientes$.next(this.clientes);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      cif: '',
      direccion: '',
      grupo: 0
    };
  }
}
