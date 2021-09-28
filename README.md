# Deployment 6 - React App

*This is the sixth deployment homework from [kura labs](https://github.com/kura-labs-org/DEPLOY6_FE).*

## 1. Configure EC2 on AWS:

**1.1** The first EC2 is the master where **Jenkins** is installed (Linux environment).

Configure the Security Groups (SG):

For the inbound rule: open port 22, and 8080<br>
For the outbound rule: open all ports.

Intalling **Jenkins** in an EC2 using bash script

```
	#!/bin/bash
	sudo amazon-linux-extras install java-openjdk11
	sudo amazon-linux-extras install epel
	sudo wget -O /etc/yum.repos.d/jenkins.repo \
	https://pkg.jenkins.io/redhat-stable/jenkins.repo
	sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
	sudo yum upgrade -y
	sudo yum install epel-release java-11-openjdk-devel -y
	sudo yum install jenkins -y
	sudo systemctl start jenkins
```

Once **Jenkins** is installed, log in with the admin password to create an account.

Here is the bash script to find the admin password:

```
	#!/bin/bash
	sudo systemctl status jenkins
	sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

Now, install these plugins in **Jenkins**: NodeJs, EC2 plugins, and Maven.

**1.2** The second EC2 is the first agent (Ubuntu OS)

Configure the Security Groups (SG):

For the inbound rule: open port 22, and 5000<br>
For the outbound rule: open all ports.

Install requirements for Ubuntu EC2 - also called **agent 1** using bash script.

```
  #!/bin/bash
  sudo apt-get update && sudo apt-get upgrade -y
  sudo apt-get install -y \
  default-jre \
  git \
  nodejs -y \
  npm -y
```

**1.3** The third EC2 is the second agent (Ubuntu OS)

For the inbound rule: open port 22<br>
For the outbound rule: open all ports.

Requirements for Ubuntu EC2 - also called **agent 2** using bash script..

```
  #!/bin/bash
  sudo apt-get update && sudo apt-get upgrade -y
  sudo apt-get install -y \
  default-jre \
  git \
  nodejs \
  npm \
  maven \
  libgtk2.0-0 \
  libgtk-3-0 \
  libgbm-dev \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb
```

Now, you will see on your **Jenkins** console all three EC2s connected as shown below.


2. Fork repo
create new repo
jenkinsfile

3. Find and upload the video and screenshot files.

$ find /home -name *.mp4
$ cd /home/ubuntu/jenkins/workspace/Jk-Pipeline_main/cypress
$ ls
$ mv videos screenshots ~
$ cd ~
$ ssh-keygen
$ ls
$ cat deploy6.pub
Now go to github acc > settings > SSH and GPG keys > New SSH key
paste public key (deploy6.pub)
click add SSH key
Go back to the terminal 
type the commands below to ssh into the github
$ eval `ssh-agent -s`
$ ssh-add deploy6

you should see “ssh3 pic”
Clone github account repo (go to the repo and copy the url)
$ git clone git@github.com:ibrahima1289/Deploy6.git
ls
cd into new folder created Deploy6
ssh5 pic
Now, upload the video and screenshot found in Deploy6 into the github repo deploy6.
$ git add .
$ git commit -m "adding videos and scrennshots to repo"
$ git pull
$ git push origin main

