#!/usr/bin/env bash

aws elasticbeanstalk create-application --application-name etherpad
aws elasticbeanstalk create-application-version --application-name etherpad --version-label 1.5.2 --source-bundle S3Bucket=awsinaction,S3Key=chapter5/etherpad.zip
aws elasticbeanstalk list-available-solution-stacks --output text --query "SolutionStacks[?contains(@, 'running Node.js')] | [0]"
aws elasticbeanstalk create-environment --environment-name etherpad --application-name etherpad --option-settings Namespace=aws:elasticbeanstalk:environment,OptionName=EnvironmentType,Value=SingleInstance --solution-stack-name "64bit Amazon Linux 2016.03 v2.1.1 running Node.js" --version-label 1.5.2
aws elasticbeanstalk describe-environments --environment-names etherpad