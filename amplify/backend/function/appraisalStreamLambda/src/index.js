/* Amplify Params - DO NOT EDIT
	API_UPLIST_GRAPHQLAPIIDOUTPUT
	API_UPLIST_PAYMENTREQUESTTABLE_ARN
	API_UPLIST_PAYMENTREQUESTTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const aws = require("aws-sdk");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4 } = require("uuid");
const docClient = new aws.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

exports.handler = async (event) => {
  const paymentRequests = [];
  event.Records.forEach((record) => {
    if (record.eventName === "MODIFY") {
      // Add payment request when status moves to Processing
      if (
        record.dynamodb.NewImage.appraisalAdminStatus.S === "PROCESSING" &&
        record.dynamodb.OldImage.appraisalAdminStatus.S === "APPROVED"
      ) {
        paymentRequests.push(
          processPaymentRequestInsert(record.dynamodb.NewImage)
        );
      }
    }
  });

  await Promise.all(paymentRequests);

  return null;
};

const processPaymentRequestInsert = async (newImage) => {
  let date = new Date();

  let params = {
    Item: {
      id: v4(),
      status: "PENDING",
      appraisalId: newImage.id.S,
      requestPrice: parseFloat(newImage.paymentAdvance.N),
      actualPrice: parseFloat(newImage.paymentAdvance.N),
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
    },
    TableName: process.env.API_UPLIST_PAYMENTREQUESTTABLE_NAME,
  };

  // Call DynamoDB
  try {
    console.log(params);
    await docClient.put(params).promise();
    console.log("Success");
  } catch (err) {
    console.log("Error", err);
  }
};
