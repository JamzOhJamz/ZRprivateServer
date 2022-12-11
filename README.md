# ZRprivateServer
A complete suite of tools to run your own [ZombsRoyale.io](https://zombsroyale.io) private server.

## Installation

This is available as a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install zr-private-server
```

## Usage

### API Server

```js
const { ApiServer } = require('zr-private-server');

// Initialize an API server
const server = new ApiServer({
    name: 'My Example ZRPS',
    database: {
        url: 'localhost',
        port: 3306,
        user: 'root',
        password: '123456'
    }
});

// Optionally subscribe to events
server.events.on('started', () => {
    console.log('Server started on port 3031');
});

// Start the server
server.start(3031);
```

## Features

- ``ApiServer`` is a drop-in replacement for the ZombsRoyale.io API.

## Disclaimer (Legal Stuff)
This private server is intended for educational use only. It is not intended for commercial use or for use in a production environment. The information and materials provided on this server are for general informational purposes only. We do not guarantee the accuracy, completeness, or timeliness of the information or materials provided on this server. By using this server, you acknowledge that you are solely responsible for your actions and any consequences that may result from your use of the information or materials provided on this server. We are not liable for any loss or damage that may result from your use of this server or the information or materials provided on this server.

## License

MIT
