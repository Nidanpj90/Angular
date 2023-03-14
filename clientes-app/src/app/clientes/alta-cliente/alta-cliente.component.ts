import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente, Grupo } from '../cliente.model';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent {
  cliente: Cliente;
  cli: Cliente;
  grupos: Grupo[];
  miForm : FormGroup;
  
  constructor(private route: ActivatedRoute,private router: Router  ,private fb: FormBuilder, 
    private clientesService: ClientesService) { }

  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente({});
    this.grupos = this.clientesService.getGrupos();
    this.cli    = JSON.parse(this.route.snapshot.paramMap.get('cli'));

    this.creaFormulario(this.cli);
  }

  creaFormulario(cli: Cliente){
    this.miForm=this.fb.group({
      nombre:[cli.nombre,[Validators.required,Validators.maxLength(5)]],
      nif:['99999999A',
                        [Validators.required,
                         Validators.pattern("[0-9]{8}[A-Z]"),
                         this.validaNif]],
      direccion:cli.direccion,
      grupo:"sin Grupo"

    });
  }

    private validaNif(control: AbstractControl) {
      const nif = control.value;
      let error = null;
      if (nif.length<9) {
        error = { nifCorto: 'el nif es muy corto' };
      }
      
      return error;
    }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente({});
  }

  register(){
    console.log(this.miForm.value);
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.miForm.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  onSubmit(){
   
    alert("submit");
    if(this.miForm.valid){
      alert ('formulario valido');
     // this.clientesService.agregarCliente(this.miForm.value);
        //this.clientesService.nuevoCliente(this.miForm.value)
        this.clientesService.postUsuarios(this.miForm.value).subscribe({
          next: data => {
            console.error('guardado', this.miForm.value);
          },
          error: error => {
             // this.errorMessage = error.message;
              console.error('There was an error!', error);
          }
      });
        this.router.navigate(['/Listado']);
    }

  }
}