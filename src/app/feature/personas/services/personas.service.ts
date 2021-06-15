import { Injectable } from "@angular/core";
import {PersonaInfoGeneral } from "@feature/personas/models/persona-info-general.model";

@Injectable()
export class PersonasService {

  public sanearListado(personas: PersonaInfoGeneral[]): PersonaInfoGeneral[] {
    return personas.map((persona) => ({ ...persona, cantidadVisitas: persona.cantidadVisitas ?? 0 }))
  }

  public obtenerCamposAVisualizar(): (keyof PersonaInfoGeneral)[] {
    return ['numeroIdentificacion', 'persona', 'planeta', 'cantidadVisitas'];
  }


}
