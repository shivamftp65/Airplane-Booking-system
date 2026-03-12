# Welcome to Flight Service

## Project Setup
- clone the project on you local
- Execute `npm install` on the same path as your root directory on the downloaded project
- Create `.env` file in the root directory and add the following environment variables
    - `PORT=3000`
- Inside the `src/config` folder create new file `config.json` and then add the following piece of json

```
{
    "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you've added your db config as listed above, go to the src folder from terminal and execute `npx sequelize db:create`
