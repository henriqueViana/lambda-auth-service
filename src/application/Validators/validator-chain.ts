import { LoginDTO } from "../../domain/dto/login.dto";
import { ILambdaResponse } from "../../interfaces";
import { IValidators } from "./validators.interface";

export class ValidatorChain implements IValidators {
  private validators: IValidators[];

  constructor(validators: IValidators[] = []) {
    this.validators = validators
  }

  async validate(data: string | null): Promise<ILambdaResponse | null> {
    for (const validator of this.validators) {
      const error = await validator.validate(data);
      if (error) {
        return error;
      }
    }
    return null; 
  }
}