# Maden Desktop Client

## Developer setup

1. clone the repo
2. cd into the `desktop` folder
3. install packages with `npm install`

## Run the app

```
npm start
```

## Create a binary

```
npm run pack
```

or 

```
electron-builder --mac #or --windows or --linux
```

This will package up the app and stick it in the `dist` folder.
