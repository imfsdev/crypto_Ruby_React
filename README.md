# Crypto

## https://spduk-crypto.herokuapp.com/

### Hosted using heroku so it might take 10 seconds to load

> Putting it aside for now, the cryptocurrency API is incredibly slow sometimes taking up to 50 seconds to make a single fetch. Everything works as it should but the API is sometimes just slow.

> You can sign up and add/remove coins, it shows the price of each and It doesn't redirect after you login (because of router problems with rails) so you have to visit your profile from the navbar.

Friends list is fake and does nothing.
![](Crypto.jpg)
![](Profile.jpg)

---

- Ruby version: 2.5.1
- Node version 10.8.0

### To make it run locally:

`bundle install` to install ruby gems, then to install react modules `cd client` and run `yarn install` or `npm install`

A .env file needs to be created in the root of the project for the JWT, example:

```
JWT_KEY="abc12345"
```

To run everything on localhost:3001 using a built version of the react app, 3001 type `yarn heroku-postbuild` into the terminal and visit localhost:3001 instead of 3000.

### To start the dev server:

`bin/rake db:migrate`
Then run:
`bin/rake start` or you can manually start the server with `bin/rails s -p 3001` and to start the client `yarn --cwd client start`

### To add the top 100 Cryptocurrencies to the database:

There is a function inside seeds.rb that makes an api call to coinmarketcap.

```
bin/rake db:seed
```

### To reset the database

```
bin/rake db:reset
```
