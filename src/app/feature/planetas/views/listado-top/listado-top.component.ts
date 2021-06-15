import { Component, OnInit } from '@angular/core';
import {PlanetasApiService} from "@feature/planetas/services/planetas-api.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {PlanetaTop} from "@feature/planetas/models/planeta-top.model";
import {PlanetasService} from "@feature/planetas/services/planetas.service";

@Component({
  selector: 'app-listado-top',
  templateUrl: './listado-top.component.html',
  styleUrls: ['./listado-top.component.scss']
})
export class ListadoTopComponent implements OnInit {

  public topPlanetas$: Observable<PlanetaTop[]> | undefined;
  public camposAVisualizar: string[] | undefined;

  constructor(private readonly planetasApiService: PlanetasApiService,
              private readonly planetasService: PlanetasService,
              private readonly router: Router) { }

  public ngOnInit(): void {
    this.camposAVisualizar = this.planetasService.obtenerCamposAVisualizarTop();
    this.topPlanetas$ = this.planetasApiService.listarTop();
  }

  public manejarBotonVolver(): void {
    this.router.navigate(['planetas']);
  }

}
