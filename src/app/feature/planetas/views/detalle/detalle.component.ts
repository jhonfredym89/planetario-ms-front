import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PlanetasApiService } from "@feature/planetas/services/planetas-api.service";
import { Observable } from "rxjs";
import { Planeta } from "@feature/planetas/models/planeta.model";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  public planeta$: Observable<Planeta> | undefined;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly planetaApiService: PlanetasApiService) { }

  ngOnInit(): void {
    const NOMBRE_PLANETA = this.route.snapshot.paramMap.get('nombre');
    if(!NOMBRE_PLANETA) {
      return this.manejarBotonVolver()
    }
    this.planeta$ = this.planetaApiService.obtenerDetalleActualizandoVisitas(NOMBRE_PLANETA);
  }

  manejarBotonVolver() {
    this.router.navigate(['planetas'])
  }

}
