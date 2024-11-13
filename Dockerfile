FROM node:18.20-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["yarn", "serve"]
