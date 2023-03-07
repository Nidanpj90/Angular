import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  
  dato: String = "Creando componentes para DesarrolloWeb.com";
  constructor(){}
  ngOnInit(): void {
    console.log('componente inicializando...');
  }

}
