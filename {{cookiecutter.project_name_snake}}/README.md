# {{cookiecutter.project_name}}

## Setting up the project

1. Create a yarn workspaces project

```sh
yarn install
```

2. Then execute the following commands

```sh   
yarn set version stable
yarn plugin import @yarnpkg/plugin-workspace-tools
yarn plugin import typescript
```

3. Run docker and execute docker compose in the root folder

```sh
docker-compose up -d
```

4. Run the backend in dev mode with the following command

```sh
yarn start-backend:dev
```

5. Open your browser and go to http://localhost:3100/healthcheck

6. Go to http://localhost:3100/admin to check the AdminJS panel