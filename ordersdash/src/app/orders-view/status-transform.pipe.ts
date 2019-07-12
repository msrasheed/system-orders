import { Pipe, PipeTransform } from '@angular/core';

class Status {
  constructor (
    public acronym: string,
    public color: string
  ) {}
}

@Pipe({
  name: 'statusTransform'
})
export class StatusTransformPipe implements PipeTransform {

  private statDict = {
    100: new Status("HCP", "yellow"),
    200: new Status("HCA", "yellow"),
    300: new Status("SOP", "orange"),
    400: new Status("SOA", "green"),
    500: new Status("EO" , "green"),
    600: new Status("EE" , "green"),
    700: new Status("DS" , "red"),
    800: new Status("DGM", "red"),
  };

  transform(value: any, arg: any): any {
    if (!value) return null;
    if (!arg) return value;
    //console.log(value);
    if (arg == "color") {
      return this.statDict[value].color;
    }
    else if (arg == "acronym") {
      return this.statDict[value].acronym;
    }
    return value;
  }

}
