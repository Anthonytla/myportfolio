FROM debian

WORKDIR myportfolio

RUN apt-get update && apt-get -y upgrade 
RUN apt-get -y install gnupg wget curl
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
RUN echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.4 main" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list
RUN apt-get -y update
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN ln -T /bin/true /usr/bin/systemctl && apt-get update && apt-get install -y mongodb-org && rm /usr/bin/systemctl
COPY / api/
WORKDIR api/




