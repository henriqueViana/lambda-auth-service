import type { APIGatewayProxyEvent } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello, World!' }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return response;
}