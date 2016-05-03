/**
 * Created by vincebloise on 4/29/16.
 */
var aws = require('aws-sdk');
var s3 = new aws.S3();
exports.handler = function( event, context) {
// Get the object from the event and show its content type
var bucket = event.Records[ 0]. s3. bucket.name;
    var key = decodeURIComponent(
        event.Records[ 0].s3.object.key.replace(/\+/g, ''));
    var params = {
        Bucket: bucket,
        Key: key
    };
    s3.getObject( params, function( err, data) {
        if (err) {
            console.log( err);
            context.fail(' Error getting object ' +
                key + ' from bucket ' + bucket +
                '. Make sure they exist and your ' +
                'bucket is in the same region as ' +
                'this function.');
        } else {
            context.succeed(' Hello, ' + data.Body);
        }
    });
};

