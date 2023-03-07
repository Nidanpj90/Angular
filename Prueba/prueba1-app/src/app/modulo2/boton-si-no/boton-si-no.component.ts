import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-si-no',
  templateUrl: './boton-si-no.component.html',
  styleUrls: ['./boton-si-no.component.css']
})
export class BotonSiNoComponent {
  texto: string =  "SI";
  estadoPositivo: boolean = true;

  cambiaEstado() {
    this.texto = (this.estadoPositivo) ?  "NO" : "SI";
    this.estadoPositivo = !this.estadoPositivo; 
  }
}
