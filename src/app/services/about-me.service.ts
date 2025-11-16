import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  private presentation: string =
    'Desarrollador Web Full Stack con experiencia en tecnologías como Angular, NestJS y .NET, así como en bases de datos relacionales y no relacionales. Mi formación en Ingeniería Civil Informática me permite abordar diversos desafíos en el campo de la informática. Me destaco por aprender rápido, adaptarme con facilidad y colaborar eficazmente en equipos ágiles que utilizan metodologías como Scrum y Spotify.';

  getPresentation() {
    return of(this.presentation);
  }
}
