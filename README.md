# Node Bookstore

Sample prototype based on express generator 
https://github.com/cdimascio/generator-express-no-stress

What may be useful for further investigation is : 

- [Express.js](www.expressjs.com)  
- [Babel.js](https://babeljs.io/) - Investigate use of typescript with nodejs 
- [Pino](https://github.com/pinojs/pino) - We need some reliable logging as well
- [dotenv](https://github.com/motdotla/dotenv) - Environment variables 
- [Backpack](https://github.com/palmerhq/backpack) -  a minimalistic build system for Node.js projects. Investigate how it works, what else from backpack do we need for deployment
- [ESLint](http://eslint.org/) - code quality
- [Swagger](http://swagger.io/) - rest api 



## Install It
```
npm install
```

## Run It
#### Run in *development* mode:

```
npm run dev
```

#### Run in *production* mode:

```
npm run compile
npm start
```

#### Run tests:

```
npm test
```

#### Deploy to the Cloud
e.g. CloudFoundry

```
cf push myapp
```

### Try It
* Point you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the example REST endpoint `curl http://localhost:3000/api/v1/examples`
   

