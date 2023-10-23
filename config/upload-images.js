const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { S3_REGION, S3_BUCKET, S3_BASE_URL } = process.env;

module.exports = async function (file) {
    const s3Client = new S3Client({ region: 'us-west-1' });
    console.log(s3Client, 's3 client');
    const s3Params = {
        Bucket: 'heimburge-catcollector',
        Key: `${Date.now()}-${file.originalname}`,
        Body: file.buffer,
    };
    console.log(s3Params, 's3 params')
    await s3Client.send(new PutObjectCommand(s3Params));
    return `https://heimburge-catcollector.s3-us-west-1.amazonaws.com/${s3Params.Key}`;
};