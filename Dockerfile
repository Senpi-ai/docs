FROM node:18.20-alpine
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
CMD ["yarn", "serve"]