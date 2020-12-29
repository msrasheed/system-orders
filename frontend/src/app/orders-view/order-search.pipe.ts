import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderSearch'
})
export class OrderSearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (!value) return null;
    if (!arg) return value;

    let queryParts = arg.toLowerCase().split(" ");

    return value.filter(item => {
      let itemString = JSON.stringify(item).toLowerCase().split("\"").join("");
      //console.log(itemString);
      for (let part of queryParts) {
        if (itemString.includes(part)) {
          return true;
        }
      }
      return false;
    });
  }

}
