# lerna-workspaces-express-typescript-template

## Setting up the project

1. Create a yarn workspaces project

```sh
yarn init -w
yarn install
```

2. Add .yarnrc.yml file with the following content

```yml
nodeLinker: node-modules

npmRegistryServer: "https://registry.npmjs.org/"
```

3. Then execute the following commands

```sh   
yarn set version stable
yarn plugin import @yarnpkg/plugin-workspace-tools
yarn plugin import typescript
```

4. Install commitizen tool

```sh
sudo npm install commitizen --global
```

5. Add workspaces glob pattern to package.json

```json
{
  ...
  
  "workspaces": [
    "packages/*"
  ],
  ...
}
```

6. Install lerna as dev dependency

```sh
yarn add -D lerna
```

7. Initialize lerna as independent versioning

```sh
yarn lerna init --independent
```

8. Check current versions available according to the changes with

```sh
yarn lerna version
```

9. You can visualize the dependencies with

```sh
npx nx graph
```

10. You can check the projects in the workspace with

```sh
yarn workspaces list -v
```

11. Add tyescript as dev dependency
    
```sh
yarn add -D typescript
``` 