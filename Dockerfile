#FROM rust:1.40 as builder
#
#RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
#COPY . /app/
#
#WORKDIR /app
#RUN wasm-pack build

#Copy static files to Nginx
FROM nginx:alpine
COPY ./www/dist /usr/share/nginx/html
