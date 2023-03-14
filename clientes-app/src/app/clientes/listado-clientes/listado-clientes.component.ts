import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cliente } from '../cliente.model';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})

export class ListadoClientesComponent implements OnInit, OnDestroy {

  clientes$: Observable<Cliente[]>;
  clientes: Cliente[];
  clientesSubscription: Subscription;
  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientes$ = this.clientesService.getClientes$();
    this.clientesSubscription = this.clientes$.subscribe(clientes => this.clientes = clientes);
  }

  ngOnDestroy() {
    this.clientesSubscription.unsubscribe();
  }

}

