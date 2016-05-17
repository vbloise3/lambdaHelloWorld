/**
 * Created by vincebloise on 5/16/16.
 */
var AWS = require('aws-sdk');
var ec2 = new AWS.EC2({
    "region": "us-west-2"
});

module.exports = function(instanceId, cb) {
    ec2.terminateInstances({
        "InstanceIds": [instanceId]
    }, function(err) {
        if (err) {
            cb(err);
        } else {
            cb(null);
        }
    });
};