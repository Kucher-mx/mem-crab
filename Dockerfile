FROM node
WORKDIR /memCrab
COPY package.json .
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 8080
CMD [ "npm run build --reload" ]