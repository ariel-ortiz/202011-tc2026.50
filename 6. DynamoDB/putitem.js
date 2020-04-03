const awsSdk = require('aws-sdk');
awsSdk.config.update({ region: 'us-west-2' });

const dynamoDB = new awsSdk.DynamoDB();
const TableName = 'Lenguajes';
const params = { TableName,
                 Item: {
                   Nombre: { S: 'Smalltalk' },
                   Autor: { S: 'Adella Goldberg'},
                   Año: { N: '1980' }
                 }
               };

dynamoDB.putItem(params, err => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('¡Éxito!');
  }
});