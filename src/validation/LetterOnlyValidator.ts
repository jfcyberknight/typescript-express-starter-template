import { IStringValidator } from "./IStringValidator";

const lettersRegexp = /^[A-Za-z]+$/;

export class LettersOnlyValidator implements IStringValidator {
  public isAcceptable(s: string) {
    return lettersRegexp.test(s) ? s : null;
  }
}
