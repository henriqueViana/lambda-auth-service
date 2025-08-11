import { LoginDTO } from "../../domain/dto/login.dto";
import { ILambdaResponse } from "../../interfaces";

export interface IValidators {
  validate(data: string | null): Promise<ILambdaResponse | null>
}