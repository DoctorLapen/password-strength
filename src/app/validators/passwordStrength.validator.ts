import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordStrength (exp: RegExp,strength:string): ValidatorFn {
    return (control: AbstractControl):  ValidationErrors | null => {
      const isSuitable = exp.test(control.value);
      let result:Record<string,any> = {};
      result[`${strength}`] =  {value: control.value}
      return isSuitable  ? result : null;
    };
  }