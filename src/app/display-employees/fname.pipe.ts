import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fname'
})
export class FnamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let first_name=value.split(' ');
    return first_name[0];
  }

}
