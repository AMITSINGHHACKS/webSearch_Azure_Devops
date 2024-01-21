FROM node:13-alpine
WORKDIR ./app
COPY ./ ./
RUN npm install --no-audit
EXPOSE 6000
CMD ["npm", "start"]
