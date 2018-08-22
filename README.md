# README
To add the top 100 cryptos to the database and run 
There is a function inside seeds.rb that makes an api call to coinmarketcap.

The API is very slow at times, sometimes it will finish loading things instantly and others it could take up to 20 seconds to finish, but it does all work as it should, if the API worked faster there would be no problems at all.
If it takes too long to load then just refresh the page and by magic it might load instantly.
```
bin/rake db:reset
```


To start the dev server ```bin/rake start``` or you can manually start the server with ```bin/rails s -p 3001``` and to start the client ```yarn --cwd client start```



This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
