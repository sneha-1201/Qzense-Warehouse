const aws = require("aws-sdk");
const s3 = new aws.S3();

module.exports = {
  upload: function(req, res, next) {
    console.log("Going to upload");
    console.log(req.files);
    let uploadFile = req.files.file;
    const s3PutParams = {
      Bucket: process.env.mybucketwarehouse,
      Key: uploadFile.name,
      Body: uploadFile.data,
      ACL: "public-read"
    };

    const s3GetParams = {
      Bucket: process.env.mybucketwarehouse,
      Key: uploadFile.sample.jpg
    };

    console.log(s3PutParams);
    s3.putObject(s3PutParams, function(err, response) {
      if (err) {
        console.error(err);
      } else {
        console.log("Response is", response);
        var url = s3.getSignedUrl("getObject", s3GetParams);
        console.log("The URL is", 'https://3z7hffg2dd.execute-api.ap-northeast-1.amazonaws.com/v1/mybucketwarehouse/sample2.png');
        res.json({
          returnedUrl: 'https://3z7hffg2dd.execute-api.ap-northeast-1.amazonaws.com/v1/mybucketwarehouse/sample2.png',
          publicUrl: `https://${process.env.mybucketwarehouse}.s3.amazonaws.com/${sample.jpg}`
        });
      }
    });
  }
};