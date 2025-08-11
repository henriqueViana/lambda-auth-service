import { plainToInstance } from "class-transformer";
import { validate } from 'class-validator';

import { IValidators } from "./validators.interface";
import { LoginDTO } from "../../domain/dto/login.dto";
import { ILambdaResponse } from "../../interfaces";

export class DTOValidator implements IValidators {
  async validate(data: string | null): Promise<ILambdaResponse | null> {
    const body = JSON.parse(data as string);
    const dto = plainToInstance(LoginDTO, body);

    const errors = await validate(dto);

    if (errors.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Validation failed', errors }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }

    return null; // If validation passes, return null
  }
}