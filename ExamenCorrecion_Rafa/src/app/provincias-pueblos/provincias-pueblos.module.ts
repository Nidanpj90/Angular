import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProvinciasComponent } from './lista-provincias/lista-provincias.component';
import { ServicioPvPbService } from './Servicios/servicio-pv-pb.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaPueblosComponent } from './pueblos/lista-pueblos/lista-pueblos.component';
import { AppRoutingModule } from '../Rutas/app-routing.module';
import { EditaPueblosComponent } from './pueblos/edita-pueblos/edita-pueblos.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaProvinciasComponent,
    ListaPueblosComponent,
    EditaPueblosComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [
    ServicioPvPbService
  ]
})
export class ProvinciasPueblosModule { }
