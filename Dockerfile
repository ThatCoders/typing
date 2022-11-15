FROM node:18

WORKDIR /eletypes_react

ADD package.json package-lock.json /eletypes_react/

RUN npm install

ADD src/ ./src
ADD public/ ./public


EXPOSE 52003

CMD [ "npm", "start" ]
