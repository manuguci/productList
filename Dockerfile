FROM nginx:1.17.1-alpine
COPY /dist/productList /usr/share/nginx/html
