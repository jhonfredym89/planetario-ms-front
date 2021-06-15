import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListadoGeneralComponent } from "@feature/personas/views/listado-general/listado-general.component";
import { DetalleComponent } from "@feature/personas/views/detalle/detalle.component";

const routes: Routes = [
  { path: '', component: ListadoGeneralComponent },
  { path: 'detalle/:id', component: DetalleComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class PersonasRoutingModule { }
