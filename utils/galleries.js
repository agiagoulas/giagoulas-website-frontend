import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.ENV_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.ENV_AWS_SECRET_ACCESS_KEY,
  region: process.env.ENV_AWS_DEFAULT_REGION
});

export async function getGalleries() {
  const payload = JSON.stringify({
    "resource": "/",
    "path": "/api/galleries",
    "httpMethod": "GET",
    "requestContext": {},
    "multiValueQueryStringParameters": null
  })
  const params = {
    FunctionName: process.env.ENV_AWS_LAMBDA_FUNCTION_NAME,
    Payload: payload
  };
  const result = await new AWS.Lambda().invoke(params).promise();
  return JSON.parse(JSON.parse(result.Payload)["body"]);
}
