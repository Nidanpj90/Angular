import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pueblos } from '../../provincias-pueblos.model';
import { ServicioPvPbService } from '../../Servicios/servicio-pv-pb.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-lista-pueblos',
  templateUrl: './lista-pueblos.component.html',
  styleUrls: ['./lista-pueblos.component.css']
})
export class ListaPueblosComponent implements OnInit {
  pueblos: Pueblos[];
  nombreProv: string;

  constructor(private rutaActiva: ActivatedRoute,
    private servicioPueblos: ServicioPvPbService,
    private location: Location) {
    this.pueblos = [];
    this.nombreProv = "";
  }


  ngOnInit(): void {







    this.rutaActiva.params.subscribe(param => {
      this.nombreProv = param['nombre'];
      let localpueblos = JSON.parse(localStorage.getItem("pueblos")) || {};
      
      
      if (localpueblos[param['id']]) {
        this.pueblos = Object.values(localpueblos[param['id']]);
      }
      else {
        this.servicioPueblos.getPueblos(param['id'])
          .subscribe({
            next: pueblos => {
              this.pueblos = Object.values(pueblos);
              localpueblos[param['id']] = pueblos;
              localStorage.setItem("pueblos", JSON.stringify(localpueblos));
            }
          })


      }

    })
  }

  volver(): void {
    this.location.back();
    //window.history.back() //Con este no haria falta usar el objeto location, es una funcion javascript del objeto window
  }


}
