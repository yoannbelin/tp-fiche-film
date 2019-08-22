import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FicheComponent } from './fiche/fiche.component'


@NgModule({
  declarations: [AppComponent, FormulaireComponent, FicheComponent],
  imports: [BrowserModule, BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
