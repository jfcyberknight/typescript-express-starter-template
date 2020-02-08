import { IStringValidator } from "./IStringValidator";

// tslint:disable-next-line: max-line-length
export const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export class EmailValidator implements IStringValidator {
  public isAcceptable(s: string) {
    return regEx.test(s) ? s : null;
  }
}
