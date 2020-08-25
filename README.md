[![Build Status](https://travis-ci.com/berryman17/OpenBooksUI.svg?branch=master)](https://travis-ci.com/berryman17/OpenBooksUI)

# OpenBooksUI
ReactJS front end for [OpenBooks](https://github.com/berryman17/OpenBooks). This repo provides the default UI but the OpenBooks API can support many UI implementations and mobile apps.

![OpenBooks UI Concept](https://i.ibb.co/LJSfsn1/Open-Books-concept-01-25-2020.png "OpenBooks UI Concept")


## Dev / Test / Build


Run dev server with hot-reload <br/>
```
npm install
npm start
```

Jest <br/>
`npm test`

Build for prod <br/>
`npm run build`

If you have serve installed (`npm i serve -g`), you can imitate production by serving the dist folder:
`serve dist` 

## Docker
You can also pull and run the [Docker image](https://hub.docker.com/r/ianberryman/openbooks-ui): <br/>
`docker pull ianberryman/openbooks-ui`

Then to run: <br/>
`docker run -p 8080:80 ianberryman/openbooks-ui`
