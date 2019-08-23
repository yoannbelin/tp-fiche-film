import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  nb: number

  stars: string[] = []

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(this.nb)) {
        this.stars.push('star')
      } else if (this.nb > i && i === Math.floor(this.nb)) {
        this.stars.push('star_half')
      } else {
        this.stars.push('star_border')
      }
    }
  }

}
