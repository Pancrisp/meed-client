# meed-client
This is the client-side application for MEED

## Development
Before starting the client, install project dependencies by running:
``` bash
$ npm install
```
To start client, run:
``` bash
$ npm run serve # app server at http://localhost:8080
```

## Deployment
The client-side app is entirely static and is automatically deployed on [Netlify](https://netlify.com) when new commits are pushed to `master` (production) and `dev` (staging).

During the build process, all tests are run and package dependencies are installed (cached whenever possible for quicker build times).

App is live at https://meed.netlify.com
