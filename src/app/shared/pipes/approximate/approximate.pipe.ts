import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'approximate'
})
export class ApproximatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value && typeof(value) === 'number') {
      return Math.ceil(value);
    }
  }

}
