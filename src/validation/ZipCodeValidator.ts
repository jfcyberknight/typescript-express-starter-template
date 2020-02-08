import { IStringValidator } from "./IStringValidator";

export const regEx = /^[0-9]+$/;

export class ZipCodeValidator implements IStringValidator {
  public isAcceptable(s: string) {
    return s.length === 5 && regEx.test(s) ? s : null;
  }
}
