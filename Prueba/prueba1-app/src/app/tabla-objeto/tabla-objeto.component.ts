import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-objeto',
  templateUrl: './tabla-objeto.component.html',
  styleUrls: ['./tabla-objeto.component.css']
})
export class TablaObjetoComponent implements OnInit {
 @Input() 
  objeto:{};

  constructor() { }

  ngOnInit() {
    console.log("tabla-objeto (objeto)= "+this.objeto);
  }
  esObjeto(dato :any): boolean{
    if (typeof dato == "object")
      return true;
    else return false;
  }

}
