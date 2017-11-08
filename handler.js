'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
  callback(null, response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const params = { Bucket: 'photo-bucket-tmp-prjct'};
module.exports.photos= (event, context, callback) => {
  s3.listObjects(params, function(err, data) {
    if (err){
      console.log(err, err.stack);
    }
    else{
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin":  "*",
          "Access-Control-Allow-Credentials": true
         },
        body: JSON.stringify({
          message: data,
      }),
    };
  callback(null, response);
    }
  });
};
