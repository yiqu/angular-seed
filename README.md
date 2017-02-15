# Introduction

Forked from mgechev's [Angular-seed](https://github.com/mgechev/angular-seed).

# To Start
In order to start the app:

```bash
# install the project's dependencies
$ npm install

# to start deving with livereload site and coverage as well as continuous testing
$ npm run start
```
_Does not rely on any global dependencies._

Open http://localhost:3000

# Configuration

Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
$ npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# License

MIT
