FROM node:12
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json ./
# 本项目是用 yarn 下载依赖
COPY yarn.lock ./
RUN yarn install
# copy .(当前目录即nextjs-typeorm下的所有文件) 到 .(/usr/src/app)
COPY . .
# 暴露3000端口
EXPOSE 3000
# 运行命令
CMD [ "yarn", "start" ]