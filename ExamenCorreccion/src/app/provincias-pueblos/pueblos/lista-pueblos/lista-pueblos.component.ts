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
export class ListaPueblosComponent implements OnInit{
  pueblos:Pueblos[];
  public nombreProv : string = "";

  constructor(private rutaActiva: ActivatedRoute,private servicioPueblos: ServicioPvPbService,private location: Location){
    this.pueblos = [];
  }

  
  ngOnInit(): void {
    const idProv = this.rutaActiva.snapshot.paramMap.get('prov');
    this.nombreProv = this.rutaActiva.snapshot.paramMap.get('nombre');

    let pueblos = JSON.parse(localStorage.getItem("pueblos")) || {};

    if(pueblos[idProv]){
      this.pueblos = Object.values(pueblos[idProv]);
    }

    this.rutaActiva.params.subscribe(id =>{
      this.servicioPueblos.getPueblos(id['id'])
      .subscribe({ next: pueb =>{
        this.pueblos = Object.values(pueblos);
        pueblos[idProv] = pueb;
        localStorage.setItem("pueblos", JSON.stringify(pueblos))
      },
      error: msgError=> console.log(`Error cargando los pueblos de : {idProv} -> {msgError}`)
      }
    );
    })
  }

  //--------------------------------

  volver():void{
    this.location.back();
    //window.history.back;
  }


}
