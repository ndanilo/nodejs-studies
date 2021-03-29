FROM node:15
WORKDIR /app
COPY "/package.json" "/package.json"
RUN npm install
ADD . .
EXPOSE 3000/tcp
CMD ["node", "app.js"]