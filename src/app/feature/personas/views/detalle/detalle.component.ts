import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Observable } from "rxjs";
import { Persona } from "@feature/personas/models/persona.model";
import { PersonasApiService } from "@feature/personas/services/personas-api.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  public persona$: Observable<Persona> | undefined;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly personasApiService: PersonasApiService) { }

  public ngOnInit(): void {
    const ID_PERSONA = this.route.snapshot.paramMap.get('id');
    this.persona$ = this.personasApiService.obtenerDetalleActualizandoVisitas(Number(ID_PERSONA));
  }

  public manejarBotonVolver(): void {
    this.router.navigate(['personas'])
  }

}
