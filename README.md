# pensivewright


~~~~
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    server_name blog.mywebsite.com;
    root /var/www/ghost/system/nginx-root;

    ssl_certificate /etc/letsencrypt/blog.mywebsite.com/fullchain.cer;
    ssl_certificate_key /etc/letsencrypt/blog.mywebsite.com/blog.mywebsite.com.key;
    include /etc/nginx/snippets/ssl-params.conf;

    set $cors_origin "";
    set $cors_cred   "";
    set $cors_header "";
    set $cors_method "";

    if ($http_origin ~ '^https?://(localhost|mywebsite\.com)$') {
            set $cors_origin $http_origin;
            set $cors_cred   true;
            set $cors_header $http_access_control_request_headers;
            set $cors_method $http_access_control_request_method;
    }

    add_header Access-Control-Allow-Origin      $cors_origin;
    add_header Access-Control-Allow-Credentials $cors_cred;
    add_header Access-Control-Allow-Headers     $cors_header;
    add_header Access-Control-Allow-Methods     $cors_method;

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_pass http://127.0.0.1:2368;
    }

    location ~ /.well-known {
        allow all;
    }
    client_max_body_size 50m;
}
~~~~
