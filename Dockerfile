FROM node:16.15.1

WORKDIR /fe-client
COPY . .
RUN npm i -g next 
RUN yarn --force
RUN next build
CMD ["next", "start"]
EXPOSE 3000