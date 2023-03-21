import { Injectable } from '@angular/core';
import { Provincia } from '../pueblos.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PueblosService {

  private provincias: Provincia[];

  constructor(private http : HttpClient) { }

  getProvincias(): any {
    //console.log(this.http.get('http://localhost:8083/ExamenAngular/ProvPueblos'));
    
    return this.http.get('http://localhost:8083/ExamenAngular/ProvPueblos');
  }

  getPueblos(opc:any): any {
   //console.log(this.http.get('http://localhost:8083/ExamenAngular/ProvPueblos'));
    
    return this.http.get('http://localhost:8083/ExamenAngular/ProvPueblos?provincia="' + opc); //el opc es para tener la opción adelantada de pasarle a la ruta el cod del pueblo que luego quiero mostrar
  }
}