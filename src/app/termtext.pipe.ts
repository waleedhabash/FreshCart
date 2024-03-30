import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termtext'
})
export class TermtextPipe implements PipeTransform {

  transform(text: string,limit:number): unknown {
    return text.split(' ').slice(0,limit).join(' ');
  }

}
