import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProvinciasComponent } from '../provincias-pueblos/lista-provincias/lista-provincias.component';
import { ListaPueblosComponent } from '../provincias-pueblos/pueblos/lista-pueblos/lista-pueblos.component';
import { EditaPueblosComponent } from '../provincias-pueblos/pueblos/edita-pueblos/edita-pueblos.component';

const routes: Routes = [
  { path: 'Provincias/listaProvincias', component: ListaProvinciasComponent },
  { path: 'Pueblos/listaPueblos/:id', component: ListaPueblosComponent },
  { path: 'Pueblos/listaPueblos/:id/:nombre', component: ListaPueblosComponent },
  { path: 'Pueblos/editaPueblos/:pueblo', component: EditaPueblosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
