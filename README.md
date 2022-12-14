# 代码使用

请下载本代码，然后用 WebStorm 或者 VSCode 打开。

## 启动数据库

如果你没有创建过数据库，请运行

```bash
mkdir blog-data
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2

或者旧版 Windows Docker 客户端运行下面的代码

docker run -v "blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```

如果你创建过数据库，请运行

```bash
docker ps -a
docker restart 容器id
```

## 创建数据库

```
docker exec -it <id> bash
psql -U blog
CREATE DATABASE blog_development ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';


\c blog_development
\l
\dt
select * from users;
```

## 数据表

首先修改 ormconfig.json 中的 host，然后运行

```
yarn m:run

Cannot find module '../../lib/getDatabaseConnection'
Require stack:
- /Users/luchao/private/nextjs-typeorm-3/dist/entity/User.js
将 User.js 中的 getDatabaseConnection 相关代码注释重新 yarn dev、yarn m:run
getDatabaseConnection 方法是为了注册表中的具体数据时连接数据库的，生成空表的时候可以先注释掉
```

## 开发

```bash
yarn dev
# or
npm run dev
```

## 部署

```bash
yarn build
yarn start

阿里云：
yarn install --production=false
yarn build
docker build . -t keduoc/node-web-app
docker run --network=host -p 3000:3000 -d keduoc/node-web-app


最终优化到只需本地修改完之后：
git push
ssh blog@dev1 'bash -s' < bin/deploy.sh
在本地完成部署
```

## 设置环境变量

```bash
'export SECRET_COOKIE_PASSWORD=c2a85490-cc60-4f21-94e8-8dc5dd3220da'
process.env.SECRET_COOKIE_PASSWORD  可以读到上面的环境变量

不过只限定在刚刚设置的这个bash窗口中，重新打开的bash终端不共享
```

## nginx

```
docker run --name keduoc-nginx --network=host -v /home/blog/nginx.conf:/etc/nginx/conf.d/default.conf -v /home/blog/app/.next/static/:/usr/share/nginx/html/_next/static/ -d nginx:1.19.1
```
