import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioPvPbService {

  constructor(private http: HttpClient) { }

  getProvincias(){
    return this.http.get("http://localhost:8082/ExamenAngular/ProvPueblos");
  }
  getPueblos(aux:String){
    return this.http.get("http://localhost:8082/ExamenAngular/ProvPueblos?provincia="+aux);
  }
}
