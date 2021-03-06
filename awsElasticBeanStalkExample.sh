#!/usr/bin/env bash
##to launch
aws elasticbeanstalk create-application --application-name etherpad
aws elasticbeanstalk create-application-version --application-name etherpad --version-label 1.5.2 --source-bundle S3Bucket=awsinaction,S3Key=chapter5/etherpad.zip
aws elasticbeanstalk list-available-solution-stacks --output text --query "SolutionStacks[?contains(@, 'running Node.js')] | [0]"
aws elasticbeanstalk create-environment --environment-name etherpad --application-name etherpad --option-settings Namespace=aws:elasticbeanstalk:environment,OptionName=EnvironmentType,Value=SingleInstance --solution-stack-name "64bit Amazon Linux 2016.03 v2.1.1 running Node.js" --version-label 1.5.2
aws elasticbeanstalk describe-environments --environment-names etherpad

##to terminate and destroy
aws elasticbeanstalk terminate-environment --environment-name etherpad
aws elasticbeanstalk describe-environments --environment-names etherpad
##once status changes to Terminated
aws elasticbeanstalk delete-application --application-name etherpad

##irc firewall
aws ec2 describe-vpcs --query Vpcs[0].VpcId --output text
aws cloudformation create-stack --stack-name irc --template-url https://s3.amazonaws.com/awsinaction/chapter5/irc-cloudformation.json --parameters ParameterKey=VPC,ParameterValue=$VpcId
aws cloudformation describe-stacks --stack-name irc --query Stacks[0].StackStatus

##delete the stack
aws cloudformation delete-stack --stack-name irc

##get user info
aws iam get-user --query "User.Arn" --output text

##create admin group
aws iam create-group --group-name "admin"
aws iam attach-group-policy --group-name "admin" --policy-arn "arn:aws:iam::aws:policy/AdministratorAccess"
##create an admin user
aws iam create-user --user-name "myuser"
aws iam add-user-to-group --group-name "admin" --user-name "myuser"
aws iam create-login-profile --user-name "myuser" --password "skateco"
##create an s3 bucket
aws s3 mb s3://awsinaction-vincebloise
##backup a dir to the s3 bucket
aws s3 sync /Users/vincebloise/mys3 s3://awsinaction-vincebloise/backup
##restore from the s3
aws s3 cp --recursive s3://awsinaction-vincebloise/backup /Users/vincebloise/Downloads/restore
##remove the s3 bucket
aws s3 rb --force s3://awsinaction-vincebloise

##setup an empty bucket for a simple s3 gallery
aws s3 mb s3://awsinaction-sdk-vincebloise