export interface ILambdaResponse {
  statusCode: number;
  body: string;
  headers: {
    [key: string]: string;
  };
}
