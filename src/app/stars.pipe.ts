import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {
  transform(value: number): string {
    let result='';
    for (let i = 1; i <= 5; i++) {
      result += `<mat-icon aria-hidden="false" aria-label="Example home icon">
      ${i <= value ? 'star' : 'star_border'}
      </mat-icon>`
    }
    console.log(result)
    return result
  }
}
