import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'
import { Fiche } from '../fiche';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  model: FormGroup
  constructor(private formBuilder: FormBuilder) {}

  @Output()
  nouvelleFiche = new EventEmitter<Fiche>()

  reg = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z@\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator

  ngOnInit() {
    this.model = this.formBuilder.group({
      titre: ['', [Validators.required]],
      appreciation: [
        '',
        [Validators.max(5), Validators.min(0), Validators.required]
      ],
      urlAffiche: ['', [Validators.required, Validators.pattern(this.reg)]],
      acteurs: this.formBuilder.array([])
    })
  }
  get acteurForm() {
    return this.model.get('acteurs') as FormArray
  }

  get titre() {
    return this.model.get('titre')
  }

  get appreciation() {
    return this.model.get('appreciation')
  }

  get urlAffiche() {
    return this.model.get('urlAffiche')
  }

  addActeur() {
    const acteur = this.formBuilder.group({
      acteurName: ''
    })
    this.acteurForm.push(acteur)
  }

  validationForm() {
    if(this.model.valid) {
      this.nouvelleFiche.emit(this.model.value)
    }
  }

}
