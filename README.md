# react-qui-components
common react components 

## Generate a new component project environment

```bash
$ cd packages
$ create-react-app <COMPONENT_NAME> --scripts-version akiya-react-component-scripts

# remove the .git folder generate from creat-react-app
$ cd <COMPONENT_NAME> && rm -rf .git
```

## Package naming in package.json
Please prefix `@react-qui` to name field of `package.json`. e.g. `@react-qui/button`.

Add below setting in `package.json` also.
```json
{
  "private": false,
  "publishConfig": {
    "access": "public"
  }
}
```

