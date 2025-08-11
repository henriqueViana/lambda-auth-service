import { LoginDTO } from "../../domain/dto/login.dto";
import { ILambdaResponse } from "../../interfaces";
import { IValidators } from "./validators.interface";

export class EmptyBodyValidator implements IValidators {
  async validate(data: string | null): Promise<ILambdaResponse | null> {
    if (data) { 
      return null;
    }

    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'email and password is required' }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}