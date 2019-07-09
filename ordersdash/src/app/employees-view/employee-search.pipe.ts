import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeSearch'
})
export class EmployeeSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(item => {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }

}
