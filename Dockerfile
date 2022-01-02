FROM node:16.13.1-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json .yarnrc.yml ./
COPY ./.yarn ./.yarn
RUN yarn set version berry && yarn install

FROM node:16.13.1-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN yarn build && yarn install

FROM node:16.13.1-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV KEY ${KEY}
ENV BASE_URL ${BASE_URL}
ENV HOME_URL ${HOME_URL}
ENV DB_URI ${DB_URI}

ENV PORT 3000
EXPOSE ${PORT}

CMD ["yarn", "start"]
LABEL org.opencontainers.image.source https://github.com/Lucxjo/ligitaj