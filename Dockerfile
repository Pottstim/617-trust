FROM nginx:alpine
COPY 617east-nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html/