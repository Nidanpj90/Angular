import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoProvinciasComponent } from './listado-provincias/listado-provincias.component';
import { ListadoPueblosComponent } from './listado-pueblos/listado-pueblos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PueblosService } from './servicios/pueblos.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ListadoProvinciasComponent,
    ListadoPueblosComponent
  ],
  exports:[
    ListadoProvinciasComponent,
    ListadoPueblosComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    PueblosService
  ]
})
export class PueblosModule { }
