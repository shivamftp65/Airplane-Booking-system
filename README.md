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

```
- Once you've added your db config as listed above, go to the src folder from terminal and execute `npx sequelize db:create` and then execute 

`npx sequelize db:migrate`
```

## Database Design
  - Airplane
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


## Table

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city(one to many relation)

```
  npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```

### Home Work
- Expose an api that can add multiple cities in one go (may be pass an array in request.body, no loops at all)
- write crud for airports
- Add an api in the City resource for getting all the airports of a city