import { Component } from '@angular/core'
import { Fiche } from './fiche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fiche-film'
  ficheFilm: Fiche
}
