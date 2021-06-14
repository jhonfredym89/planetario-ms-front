import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "@shared/components/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@feature/inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path: 'personas',
        loadChildren: () => import('@feature/personas/personas.module').then(m => m.PersonasModule)
      },
      {
        path: 'planetas',
        loadChildren: () => import('@feature/planetas/planetas.module').then(m => m.PlanetasModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
