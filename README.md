**Parking Access Frontend**

How to start project locally for development:

- **npm i**
- **npm run dev**

How to build and deploy project for prod:

- Access server with ip and pwd given.
- Enter the project folder **cd pa_frontend**
- Get all fresh changes from git repo **git pull**
- Install all dependencies if something new was installed during development **npm i**
- Stop server **pm2 stop all**
- Build the project **npm run build:prod**
- Start server **pm2 start npm -- run prod**
