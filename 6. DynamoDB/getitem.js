const awsSdk = require('aws-sdk');
awsSdk.config.update({ region: 'us-west-2' });

const dynamoDB = new awsSdk.DynamoDB();
const TableName = 'Lenguajes';
const params = { TableName,
                 Key: { Nombre: { S: 'Python' }}
               };

dynamoDB.getItem(params, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log(data);
  }
});