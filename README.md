Demo for https://github.com/FormidableLabs/reason-urql/issues/232

Run `yarn start` to test

The problem does not exist when the `package.json` does not contain the resolutions line, since this will install an extra copy of `wonka` (@4) in the `urql` folder. However, this might cause issues when something in the application actually uses the other installation of wonka.

To reveal the problem, adding the following snippet to package.json will force yarn to install only the version 5 of Wonka.
```
  "resolutions": {
    "wonka": "5.0.0-rc.1"
  }
```