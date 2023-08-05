# {{cookiecutter.project_name}}

## Setting up the project

1. Create a yarn workspaces project

```sh
yarn set version stable
yarn install
```

2. Then execute the following commands

```sh   
yarn plugin import @yarnpkg/plugin-workspace-tools
yarn plugin import typescript
```

3. Create a .app-config.secrets.yml file in the root folder with the following content

```yml
databaseCore:
  password: adminjs
telegram:
  apiKey: key
  chatId: 'id'
```

4. Run docker and execute docker compose in the root folder

```sh
docker-compose up -d
```

5. Run the backend in dev mode with the following command

```sh
yarn start-backend:dev
```

6. Open your browser and go to http://localhost:3100/healthcheck

7. Go to http://localhost:3100/admin to check the AdminJS panel