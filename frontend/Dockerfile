FROM debian

WORKDIR myportfolio

RUN apt-get update && apt-get -y upgrade 
RUN apt-get -y install gnupg wget curl
RUN apt-get -y update
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g nodemon express

COPY / frontend/
WORKDIR frontend/




