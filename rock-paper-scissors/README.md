# Webpack starter
if you are not using nvm, please use the node version from .nvmrc file

## Quickstart
```zsh
mkdir new-project
cd new-project/
git clone https://github.com/Verthon/webpack-starter.git .
sudo rm -r .git
git init
git remote add origin [your empty project repository (Github / Gitlab / Bitbucket)]
git remote -v
git add .
git commit -m 'initial commit'
git push origin master
npm install
```

## Supports:

- TypeScript
- Sass, PostCSS
- JEST and basic setup for tests
- ESLint with minimal configuration
- Prettier
- webpack-dev server (working on port 9000)
