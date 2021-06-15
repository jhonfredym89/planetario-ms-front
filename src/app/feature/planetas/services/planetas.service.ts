import { Injectable } from "@angular/core";
import {PlanetaInfoGeneral} from "@feature/planetas/models/planeta-info-general.model";
import {PlanetaTop} from "@feature/planetas/models/planeta-top.model";

@Injectable()
export class PlanetasService {

  public obtenerCamposAVisualizarGeneral(): (keyof PlanetaInfoGeneral)[] {
    return ['planeta', 'cantidadPersonas'];
  }

  public obtenerCamposAVisualizarTop(): (keyof PlanetaTop)[] {
    return ['planeta', 'cantidadVisitas'];
  }
}
