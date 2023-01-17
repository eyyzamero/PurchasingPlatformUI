import { EnvironmentConfigAuthentication } from './environment-config-authentication.type';

export type EnvironmentConfig = {
  version: string;
  production: boolean;
  apiUrl: string;
  authentication: EnvironmentConfigAuthentication;
};