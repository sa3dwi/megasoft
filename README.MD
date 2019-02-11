## Megasoft with NodeJS/Express

This repository holds the source code of a calculator for Megasoft with NodeJS/Express/MongoDB


# MegaSoft Calculator

This project provide API and web page for:
1. basic calculations (add, subtract, multiple, divide).
2. A log report showing the operations that have been performed.

## Requirements

For building and running the application you need:

- [NodeJs 11](https://nodejs.org/en)
- [MongoDB](https://docs.mongodb.com/manual/installation/)


## Configurations

To change configurations (server port, database name ...) `bin/www` , `config/mongoose.js` 


## Running the application locally

Use command-line or any other tools to install dependencies.

```shell
npm install 
```

There are several ways to run a Nodejs application on your local machine. 
you can use the command-line:

```shell
npm start
```

for a dev server. Navigate to `http://127.0.0.1:3000/`. 
The app will automatically reload if you change any of the source files.
