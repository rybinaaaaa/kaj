# Используем официальный образ Apache
FROM httpd:2.4

# Копируем файлы нашего веб-приложения в директорию htdocs в контейнере
COPY ./semka24/ /usr/local/apache2/htdocs/semka24

COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf

RUN apt-get update && apt-get install -y apache2-utils && rm -rf /var/lib/apt/lists/*

RUN chmod 644 /usr/local/apache2/conf/httpd.conf && \
    sed -i 's/AllowOverride None/AllowOverride All/g' /usr/local/apache2/conf/httpd.conf