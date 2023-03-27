import { Component, OnInit } from '@angular/core';
import { PueblosService } from '../servicios/pueblos.service';
import { Pueblo } from '../pueblos.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-pueblos',
  templateUrl: './listado-pueblos.component.html',
  styleUrls: ['./listado-pueblos.component.css']
})
export class ListadoPueblosComponent implements OnInit{

  pueblos: Pueblo[];

  constructor(private pueblosService: PueblosService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  
  }

}
