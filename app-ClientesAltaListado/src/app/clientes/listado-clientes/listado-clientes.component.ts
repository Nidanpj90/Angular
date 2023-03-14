import { Component, OnInit } from '@angular/core';
import { Cliente } from './../cliente.model';
import { ClientesService } from './../clientes.service';
import { Observable } from 'rxjs';
import { __classPrivateFieldSet } from 'tslib';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Cliente[];
  //clientes$: Observable<Cliente[]>;

  constructor(private route: ActivatedRoute,private clientesService: ClientesService) { }

  ngOnInit() {
    
    this.clientesService.getUsuarios()
      .subscribe(arraycli => {
        this.clientes=[];
        let claves=Object.values(arraycli);
        claves.forEach((clave:any) =>{
             this.clientes.push(JSON.parse(clave));
          }
        );
        
        //this.clientes = JSON.parse(arraycli);
        console.log(this.clientes);
      },
        error => console.log(error)
      );
  }

}
