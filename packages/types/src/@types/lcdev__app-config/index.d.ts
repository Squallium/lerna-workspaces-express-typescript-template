// AUTO GENERATED CODE
// Run app-config with 'generate' command to regenerate this file

import '@app-config/main';

export interface Config {
  databaseCore: Database;
  server: Server;
  telegram: Telegram;
}

export interface Database {
  database: string;
  host: string;
  password: string;
  port?: number;
  username: string;
}

export interface Server {
  port: number;
}

export interface Telegram {
  apiKey: string;
  chatId: string;
}

// augment the default export from app-config
declare module '@app-config/main' {
  export interface ExportedConfig extends Config {}
}
