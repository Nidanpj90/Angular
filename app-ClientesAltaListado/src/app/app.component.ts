import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Panel de navegacion';
  

  
  constructor(){
    console.log("constructor->Componente creado");
  }
  ngOnInit():void{
    console.log("ngOnInit->Componente creado");
  }
    
}
