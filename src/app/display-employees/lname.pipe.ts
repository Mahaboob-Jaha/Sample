import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lname'
})
export class LnamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    return value.split(' ')[1];
  }

}
