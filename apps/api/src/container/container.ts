import { Container } from 'inversify';
import { TOKENS } from './tokens.js';

export const container = new Container();

// Bind your dependencies here
// Example:
// container.bind<UserRepository>(TOKENS.USER_REPOSITORY).to(PrismaUserRepository);
