FROM node:18-alpine AS builder
WORKDIR /leve
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps --frozen-lockfile && npm cache clean --force

COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /leve

COPY --from=builder /leve/public ./public
COPY --from=builder /leve/.next ./.next
COPY --from=builder /leve/package.json ./package.json
COPY --from=builder /leve/package-lock.json ./package-lock.json
COPY --from=builder /leve/node_modules ./node_modules

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "start"]