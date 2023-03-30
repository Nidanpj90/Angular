import { Component, OnInit } from '@angular/core';
import { ServicioPvPbService } from '../Servicios/servicio-pv-pb.service';

@Component({
  selector: 'app-lista-provincias',
  templateUrl: './lista-provincias.component.html',
  styleUrls: ['./lista-provincias.component.css']
})
export class ListaProvinciasComponent implements OnInit{

  constructor(private servicioProvincias: ServicioPvPbService){

  }

  ngOnInit(): void {
    this.servicioProvincias.getProvincias().subscribe(provincias => {
      console.log("provincias-> " + JSON.stringify(provincias));
    });
  }

}
