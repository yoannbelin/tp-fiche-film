import { Component, OnInit, Input } from '@angular/core';
import { Fiche } from '../fiche';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  @Input()
  fiche: Fiche

  constructor() { }

  ngOnInit() {
  }

}
