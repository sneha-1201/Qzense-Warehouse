let require
const AWS = new AWS('aws-sdk');
const s3 = new AWS.S3();
exports.handler = async (event, context, callback) => {
    let data = JSON.parse(event.body);
    let file = data.base64String;


    const s3Bucket = "mybucketwarehouse";
    const objectName = "test.jpeg";
    const objectData = data.base64String;
    const objectType = "image/jpeg/jpg/png";
    try {
        const params = {
            Bucket: s3Bucket,
            Key: objectName,
            Body: objectData,
            ContentType: objectType
        };
        const result = await s3.putObject(params).promise();
        return sendRes(200, `File uploaded successfully at https:/` + s3Bucket + `.s3.amazonaws.com/` + objectName);

    } catch (error) {
        return sendRes(404, error);
    }};
    const sendRes = (status, body) => {
        var response = {
            statusCode: status,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                "Access-Control-Allow-Methods": "OPTIONS,POST,PUT",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "*",
                "X-Requested-With": "*"
            },
            body: body
        };
        return response;
    };