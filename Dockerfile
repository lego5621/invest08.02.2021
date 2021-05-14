FROM node:14
RUN npm install npm@latest -g
RUN npm install -g @vue/cli
RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf
WORKDIR /home/node
USER node
