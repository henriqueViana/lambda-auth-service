import { validate } from 'class-validator';
import { LoginDTO } from '../domain/dto/login.dto';
import { ILambdaResponse } from '../interfaces';
import { ValidatorChain } from '../application/Validators/validator-chain';
import { EmptyBodyValidator } from '../application/Validators/empty-body';
import { DTOValidator } from '../application/Validators/dto';

export async function handler(event: any): Promise<ILambdaResponse> {
  let response

  const validators = [
    new EmptyBodyValidator(),
    new DTOValidator()
  ]

  const validator = new ValidatorChain(validators);
  const errors = await validator.validate(event.body);

  if(errors) {
    return errors;
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Bad Request' }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  } 

  // const body = JSON.parse(event.body);
  // const data = plainToInstance(LoginDTO, body);

  // const errors = await validate(data);

  // console.log('errors', errors);

  response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Login testd' }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return response;
}