FROM node:alpine

WORKDIR /app
COPY . .

ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 3000

RUN yarn install && yarn build
USER node

EXPOSE 3000

CMD ["yarn", "start"]
