import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http:HttpClient) { 
    
  }



  getData (url: string):Observable <any>{
    
    return this.http.get("https://jsonplaceholder.typicode.com/"+url);

  }



}
