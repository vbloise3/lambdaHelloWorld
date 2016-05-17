/**
 * Created by vincebloise on 5/16/16.
 */
var AWS = require('aws-sdk');
var ec2 = new AWS.EC2({
    "region": "us-west-2"
});

module.exports = function(amiId, subnetId, cb) {
    ec2.runInstances({
        "ImageId": amiId,
        "MinCount": 1,
        "MaxCount": 1,
        "KeyName": "mykey",
        "InstanceType": "t2.micro",
        "SubnetId": subnetId
    }, function(err) {
        if (err) {
            cb(err);
        } else {
            cb(null);
        }
    });
};