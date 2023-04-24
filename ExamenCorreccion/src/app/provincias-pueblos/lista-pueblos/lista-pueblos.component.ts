import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pueblos } from '../provincias-pueblos.model';
import { ServicioPvPbService } from '../Servicios/servicio-pv-pb.service';
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

  }

  //--------------------------------

  volver():void{
    this.location.back();
    //window.history.back;
  }


}
