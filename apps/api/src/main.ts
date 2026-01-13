import { container } from './container/container.js';

async function bootstrap() {
  // Initialize your application here
  console.log('Application starting...');
  
  // Example: Start HTTP server, connect to database, etc.
}

bootstrap().catch((error) => {
  console.error('Failed to start application:', error);
  process.exit(1);
});
