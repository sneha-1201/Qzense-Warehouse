import dotenv from 'dotenv'
import aws from 'aws-sdk'
import crypto from 'crypto'
import { promisify } from "util"
const randomBytes = promisify(crypto.randomBytes)

dotenv.config()

const region = "ap-south-1"
const bucketName = "mybucketwarehouse"
const accessKeyId = AKIA2QMGQOEA33IL7ESN  

const secretAccessKey = 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

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})

export async function generateUploadURL() {
  const rawBytes = await randomBytes(16)
  const imageName = rawBytes.toString('hex')

  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  })
  
  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}