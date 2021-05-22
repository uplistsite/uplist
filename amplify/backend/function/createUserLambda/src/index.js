/* Amplify Params - DO NOT EDIT
	API_UPLIST_GRAPHQLAPIIDOUTPUT
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

exports.handler = async (event, context) => {
  let date = new Date();

  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: v4(),
        owner: event.request.userAttributes.sub,
        balance: 0,
        createdAt: date.toISOString(),
        updatedAt: date.toISOString(),
      },
      TableName: process.env.API_UPLIST_USERTABLE_NAME
    };

    // Call DynamoDB
    try {
      await docClient.put(params).promise();
      console.log("Success");
    } catch (err) {
      console.log("Error", err);
    }

    console.log("Success: Everything executed correctly");
    context.done(null, event);
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log("Error: Nothing was written to DynamoDB");
    context.done(null, event);
  }
};
