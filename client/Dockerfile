FROM node:14 as immutable-dependencies
WORKDIR /code
RUN npm set progress=false && npm config set depth 0
COPY package.json package-lock.json ./
RUN npm install

FROM node:14 as build-step
WORKDIR /code
COPY --from=immutable-dependencies /code/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:alpine
COPY ./nginx/default.conf /etc/nginx/default.conf
COPY ./nginx/gzip.conf /etc/nginx/gzip.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /code/build /usr/share/nginx/html
EXPOSE 3000
ENTRYPOINT ["nginx", "-g", "daemon off;"]