Run book how to create an online cyphernode instance

1. Generate a key pair in ec2 console and download it https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#KeyPairs:
1. connect to cloud formation https://console.aws.amazon.com/cloudformation/home?region=us-east-1
1. in create stack section keep the Prerequisite - Prepare template to defaults settings
1. in create stack section Specify template: upload the template located at `infra\cyphernode-ec2-template.json` in the repo
1. in Specify stack details name your stack cyphernode or a unique name.
1. in the parameters select the desired instance size (medium is the default), select the keypair you chose
1. keep everything else default and proceed to the create stack step at the end of the review step
1. grab from the outputs section after the deployment is complete the public dns
1. go from the console on a unix system where the console is located and run (replace with appropriate key name) `chmod 400 guillaume.pem && ssh -i "guillaume.pem" ubuntu@ec2-54-198-99-73.compute-1.amazonaws.com`
1. generate an ssh key and add it to deploy keys in the git hub org.
1. install docker, update system and add user to docker group

```
sudo apt-get update
sudo apt-get upgrade
curl -fsSL test.docker.com -o get-docker.sh && sh get-docker.sh
sudo usermod -aG docker $USER
```

1. clone the repo `git clone git@github.com:Veriphi/veto.git && cd veto`
1. set up veto (should update with more information)