import { Directive, OnChanges, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, Validators, ValidatorFn } from '@angular/forms';

class PasswordMatchValidatorFunctionFactory {
  static otherPassField(pass: string): ValidatorFn {
    return function (control: AbstractControl): {[key: string]: any} | null {
      if (control.value == pass) {
        return null;
      }
      else {
        return {
          passMatch: {
            password: pass,
            entered: control.value,
          }
        };
      }
    }
  }
}

@Directive({
  selector: '[appPasswordMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatchDirective,
      multi: true
    }
  ]
})
export class PasswordMatchDirective implements Validator, OnChanges {
  @Input('appPasswordMatch') firstPass: string;
  private valFn = Validators.nullValidator;

  constructor() { }

  ngOnChanges() {
    if (this.firstPass) {
      this.valFn = PasswordMatchValidatorFunctionFactory.otherPassField(this.firstPass);
    }
    else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl) {
    return this.valFn(control);
  }
}
