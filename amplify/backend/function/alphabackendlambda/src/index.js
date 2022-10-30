

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(event)
    const operationId = event.pathParameters.operationId;
	const datetime = new Date().now();
    const operation = {'operationId': operationId, 'operationTime': datetime };
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }, 
        body: JSON.stringify(operation),
    };
    return response;
};
