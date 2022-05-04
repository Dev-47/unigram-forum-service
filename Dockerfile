FROM ubuntu:20.04

RUN apt-get update && \
    apt install -y sudo

RUN adduser --disabled-password --gecos '' dev47
RUN adduser dev47 sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

USER dev47
WORKDIR /home/dev47/app

ENV PATH="/home/dev47/.local/bin:${PATH}"

# install curl

RUN sudo apt-get update && \
    sudo apt install -y curl

# install node

RUN curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - && \
    sudo apt install nodejs

# install yarn

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
    sudo apt update && \
    sudo apt install -y yarn

RUN mkdir /home/dev47/.node-modules
RUN npm config set prefix /home/dev47/.node-modules


# install pm2

RUN sudo yarn global add pm2

# set up all

RUN sudo chown -R dev47:dev47 .

COPY --chown=dev47:dev47 package.json package.json
COPY --chown=dev47:dev47 . ./

RUN yarn

RUN yarn dev
COPY --chown=dev47:dev47 . ./
