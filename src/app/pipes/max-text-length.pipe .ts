import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxTextLength'
})
export class MaxTextLengthPipe implements PipeTransform {
  transform(textDescr: string, maxTextLength: number = 100): string {
    if (!textDescr) {
      return '';
    }
    return textDescr.length > maxTextLength ? textDescr.slice(0, maxTextLength) + '...' : textDescr;
  }
}
