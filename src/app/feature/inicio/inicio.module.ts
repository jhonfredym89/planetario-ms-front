import { NgModule } from "@angular/core";
import { InicioRoutingModule } from "@feature/inicio/inicio-routing.module";
import { LandingComponent } from "@feature/inicio/views/landing/landing.component";

@NgModule({
  imports: [
    InicioRoutingModule,
  ],
  declarations: [LandingComponent]
})
export class InicioModule { }
