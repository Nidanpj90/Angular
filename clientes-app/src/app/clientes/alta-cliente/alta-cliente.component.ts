import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, Grupo } from 'src/app/cliente.model';
import { ClientesService } from '../servicios/clientes.service';


@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent {

  cliente: Cliente;
  grupos: Grupo[];

  constructor(private router: Router,private clientesService: ClientesService) { }

  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
    this.router.navigate['/listado'];
  }

}

