FROM node
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ARG VITE_RAPID_API_ARTICLE_KEY
ENV VITE_RAPID_API_ARTICLE_KEY=$VITE_RAPID_API_ARTICLE_KEY
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]