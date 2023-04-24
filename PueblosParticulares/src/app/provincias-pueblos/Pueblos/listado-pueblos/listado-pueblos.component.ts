import { Component, OnInit } from '@angular/core';
import { Pueblo } from '../../provincias-pueblos.model';
import { ServicioPvPbService } from '../../Servicios/servicio-pv-pb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-pueblos',
  templateUrl: './listado-pueblos.component.html',
  styleUrls: ['./listado-pueblos.component.css']
})
export class ListadoPueblosComponent implements OnInit {
  listadoPueblos: Pueblo[];
  

  constructor(private rutaActiva: ActivatedRoute, private servicio: ServicioPvPbService) {
    this.listadoPueblos = [];
  }

  ngOnInit(): void {
    //let idProv = this.rutaActiva.snapshot.params["idProv"]; //el params es el nombre de la variable de la ruta
    this.rutaActiva.params.subscribe(
      (params) => {
        let idProv = params['idProv'];

        this.servicio.getPueblos(idProv).subscribe(
          (pueb) => { this.listadoPueblos = Object.values(pueb) }
        )
      }
    );

  }
}
