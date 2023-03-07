import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './servicios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JsonPlaceHolder';
  selected_datos = 'users';
  listaUsuarios: any [];
  listaUsuarios2: any []=[
    {
      "id": 1,
      "name": {"nombre":"Leanne",
         "apellidos":"Graham"
         },
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {"coor":{
            "lat": "-37.3159",
            "lng": "81.1496"
            },
          "pais": "España"		
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }];

  clavesUsuarios: String[];

  constructor(private servicioUsuarios : UsuariosService){
    console.log("componente creado...")
  }

  ngOnInit(): void {
    console.log('Arrancando PalceHolder...');
/***/ 
   
    this.servicioUsuarios.getUsuarios(this.selected_datos)
        .subscribe(
          usuarios =>
          { this.listaUsuarios=usuarios;
            this.clavesUsuarios= Object.keys(this.listaUsuarios["0"]);

              }
          );/**/
  }
  esObjeto(dato :any): boolean{
    if (typeof dato == "object")
      return true;
    else return false;
  }
  onChange(value: any) {
    this.selected_datos = value.target.value;
    this.servicioUsuarios.getUsuarios(this.selected_datos)
        .subscribe(
          usuarios =>
          { this.listaUsuarios=usuarios;
            this.clavesUsuarios= Object.keys(this.listaUsuarios["0"]);

              }
          );
}

  
}
