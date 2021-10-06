/* Amplify Params - DO NOT EDIT
	API_UPLIST_GRAPHQLAPIIDOUTPUT
	API_UPLIST_PAYMENTTABLE_ARN
	API_UPLIST_PAYMENTTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const aws = require("aws-sdk");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4 } = require("uuid");
const docClient = new aws.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

exports.handler = async (event) => {
  const payments = [];
  event.Records.forEach((record) => {
    if (record.eventName === "MODIFY") {
      // Add payment request when status moves to Processing
      if (
        record.dynamodb.NewImage.status.S === "APPROVED"
      ) {
        payments.push(
          processPaymentInsert(record.dynamodb.NewImage)
        );
      }
    }
  });

  await Promise.all(payments);

  return null;
};

const processPaymentInsert = async (newImage) => {
  let date = new Date();

  let params = {
    Item: {
      id: v4(),
      owner: newImage.owner.S,
      paymentPaymentRequestId: newImage.id.S,
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
    },
    TableName: process.env.API_UPLIST_PAYMENTTABLE_NAME,
  };

  // Call DynamoDB
  try {
    console.log(newImage);
    console.log(params);
    await docClient.put(params).promise();
    console.log("Success");
  } catch (err) {
    console.log("Error", err);
  }
};

