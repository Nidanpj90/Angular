import { Component, OnInit } from '@angular/core';
import { ServicioPvPbService } from '../Servicios/servicio-pv-pb.service';
import { Provincias } from '../provincias-pueblos.model';

@Component({
  selector: 'app-lista-provincias',
  templateUrl: './lista-provincias.component.html',
  styleUrls: ['./lista-provincias.component.css']
})
export class ListaProvinciasComponent implements OnInit {
  provincias: Provincias[];
  constructor(private servicioProvincias: ServicioPvPbService) {
    this.provincias = [];
  }

  ngOnInit(): void {
    this.servicioProvincias.getProvincias()
      .subscribe({
        next: provincias => {
          this.provincias = Object.values(provincias);
          console.log(this.provincias);
        },
        error: error => { console.log(JSON.stringify(error)) },
        complete: () => {console.log("Terminado")}
      })
  }
}
