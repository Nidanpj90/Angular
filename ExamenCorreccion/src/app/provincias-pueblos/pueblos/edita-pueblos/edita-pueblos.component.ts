import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pueblos } from '../../provincias-pueblos.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edita-pueblos',
  templateUrl: './edita-pueblos.component.html',
  styleUrls: ['./edita-pueblos.component.css']
})
export class EditaPueblosComponent implements OnInit{

  formulario : FormGroup;

  constructor(private ruta :ActivatedRoute, private fb : FormBuilder){

  }

  ngOnInit(): void{
    const pueblo = JSON.parse(this.ruta.snapshot.paramMap.get('pueblo'));
    this.creaFormulario(pueblo);
  }

  creaFormulario(pueblo :Pueblos){
    this.formulario = this.fb.group({
      idPoblacion:[pueblo.idpueblo,[Validators.required]],
      poblacion:[pueblo.poblacion,[Validators.required]]
    }
    );
  }

  volver():void{
    //this.location.back();
    window.history.back;
  }
}
