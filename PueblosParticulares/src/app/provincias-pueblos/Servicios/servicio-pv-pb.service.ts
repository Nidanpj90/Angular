import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPvPbService {

  constructor(private http: HttpClient) { } //Al crearlo en el constructor ya se inicializa esta variable automáticamente "Azúcar sintáctico"

  getProvincias(){
    return this.http.get("http://localhost:8082/ExamenAngular/ProvPueblos"); //el objeto http me devolverá un observable cuando llame a esta función
  }

  getPueblos(idProv : any){
    return this.http.get("http://localhost:8082/ExamenAngular/ProvPueblos?provincia=" + idProv);
  }
}
