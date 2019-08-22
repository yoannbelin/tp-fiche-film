import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormArray } from '@angular/forms'

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  model: FormGroup
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.model = this.formBuilder.group({
      titre: '',
      appreciation: '',
      urlAffiche: '',
      acteurs: this.formBuilder.array([])
    })
  }
  get acteurForm() {
    return this.model.get('acteurs') as FormArray
  }

  addActeur() {
    const acteur = this.formBuilder.group({
      acteurName: ''
    })
    this.acteurForm.push(acteur)
  }
}

