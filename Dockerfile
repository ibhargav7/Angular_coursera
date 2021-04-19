FROM node:alpine As builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:alpine
COPY --from=builder /usr/src/app/dist/firstAngular/ /usr/share/nginx/html

