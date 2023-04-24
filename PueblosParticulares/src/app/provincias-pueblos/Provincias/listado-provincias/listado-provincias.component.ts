import { Component, OnInit } from '@angular/core';
import { Provincia } from '../../provincias-pueblos.model';
import { ServicioPvPbService } from '../../Servicios/servicio-pv-pb.service';

@Component({
  selector: 'app-listado-provincias',
  templateUrl: './listado-provincias.component.html',
  styleUrls: ['./listado-provincias.component.css']
})
export class ListadoProvinciasComponent implements OnInit {
  listaProvincias: Provincia[] = []; //haciendo referencia al modelo e inicializando

  constructor(private servicio: ServicioPvPbService) {

  }

  ngOnInit(): void {
    this.servicio.getProvincias().subscribe(//espera un objeto
      {
        next: (prov) => {
          this.listaProvincias = Object.values(prov);
        },
        error: (error) => {
          console.log("El error de getProvincias() es " + error);
        }
      }
    );

    /*this.servicio.getProvincias().subscribe(//en este caso por defecto va a hacer el next
      (prov) => {
        this.listaProvincias = Object.values(prov);
      }
    )*/


  }

}
