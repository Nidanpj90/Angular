import { Component } from '@angular/core';
import { Cliente } from 'src/app/cliente.model';
import { ClientesService } from '../servicios/clientes.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent {
  clientes$: Observable<Cliente[]>;
  clientes: Cliente[];
  clientesSubscription: Subscription;
  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
    this.clientes$ = this.clientesService.getClientes$();
    this.clientesSubscription = this.clientes$.subscribe(clientes => this.clientes = clientes);//Preguntar
  }

  ngOnDestroy(){
    this.clientesSubscription.unsubscribe();
  }

}
