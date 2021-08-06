# howmanybobascouldmatthaveboughtwiththemoneyhespentondomains
a look into matt wang's intriguing monetary ventures

Live at https://boba.dylon.us (redirects to https://matthewcn56.github.io/how-many-bobas-could-matt-have-bought-with-the-money-he-spent-on-domains/)

Deployed with GitHub Pages

## Development:
To get our git hooks ready, first install yarn if necessary with

```sh
npm install --global yarn
```

sudo-ing it if necessary, then installing our dependencies with

```sh
yarn
```

which will also automatically install our husky dependency

### Development Scripts:
Our husky hook will automatically format all of your staged changes, but you can do it manually for all html,css,js files with

```sh
yarn format
```

### Note for WSL Users:
If you run into this error `/bin/sh^M: bad interpreter: No such file or directory` when running `git commit` after following the git hooks setup above, you may need to change the line endings of the .husky/pre-commit file. More information [here](https://www.linkedin.com/pulse/wsl-bash-script-binshm-bad-interpreter-file-directory-john-west).
