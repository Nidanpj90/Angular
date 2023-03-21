import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoProvinciasComponent } from './pueblos/listado-provincias/listado-provincias.component';
import { ListadoPueblosComponent } from './pueblos/listado-pueblos/listado-pueblos.component';
import { PueblosModule } from './pueblos/pueblos.module';

export const rutas: Routes = [
  { path: 'ListadoProvincias', component: ListadoProvinciasComponent },
  { path: 'ListadoPueblos', component: ListadoPueblosComponent },
  { path: 'ListadoPueblos/:prov', component: ListadoPueblosComponent }

];

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PueblosModule,
    RouterModule.forRoot(rutas) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
