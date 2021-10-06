/* Amplify Params - DO NOT EDIT
	API_UPLIST_GRAPHQLAPIIDOUTPUT
	API_UPLIST_PAYMENTREQUESTTABLE_ARN
	API_UPLIST_PAYMENTREQUESTTABLE_NAME
	API_UPLIST_USERTABLE_ARN
	API_UPLIST_USERTABLE_NAME
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
    if (record.eventName === "INSERT") {
      // Update user balance when payment inserted
      payments.push(
        processBalanceUpdate(record.dynamodb.NewImage)
      );
    }
  });

  await Promise.all(payments);

  return null;
};

const processBalanceUpdate = async (newImage) => {
  let date = new Date();

  let paymentRequestQueryParams = {
    Key: {
      id: newImage.paymentPaymentRequestId.S,
    },
    TableName: process.env.API_UPLIST_PAYMENTREQUESTTABLE_NAME,
  };

  const paymentRequest = await docClient.get(paymentRequestQueryParams).promise();
  const paymentRequestActualPrice = paymentRequest.Item.actualPrice;

  let userQueryParams = {
    ExpressionAttributeValues: {
      ':o': newImage.owner.S,
    },
    ExpressionAttributeNames: {
      '#o': 'owner',
    },
    IndexName: 'byOwner',
    KeyConditionExpression: '#o = :o',
    TableName: process.env.API_UPLIST_USERTABLE_NAME,
  };


  const userQueryData = await docClient.query(userQueryParams).promise();
  const userId = userQueryData?.Items?.[0]?.id;
  const userBalance = userQueryData?.Items?.[0]?.balance;

  let userUpdateParams = {
    Key: {
      'id': userId
    },
    UpdateExpression: 'set balance = :b, updatedAt = :u',
    ExpressionAttributeValues: {
      ':b': userBalance + paymentRequestActualPrice,
      ':u': date.toISOString(),
    },
    TableName: process.env.API_UPLIST_USERTABLE_NAME,
  };

  // Call DynamoDB
  try {
    await docClient.update(userUpdateParams).promise();
    console.log("Success");
  } catch (err) {
    console.log("Error", err);
  }
};
