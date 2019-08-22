import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule,MatIconModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FicheComponent } from './fiche/fiche.component';
import { StarsPipe } from './stars.pipe'


@NgModule({
  declarations: [AppComponent, FormulaireComponent, FicheComponent, StarsPipe],
  imports: [BrowserModule, BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
