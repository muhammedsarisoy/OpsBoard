# OpsBoard

Monorepo for OpsBoard application.

## Structure

```
opsboard/
 ├─ apps/
 │   ├─ api/          # Backend API
 │   ├─ admin/        # Admin Dashboard
 │   └─ web/          # Web Application
 │
 ├─ packages/
 │   └─ shared/       # Shared utilities and types
 │
 └─ docker/           # Docker configurations
```

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
# Run all apps in development mode
npm run dev

# Run specific app
npm run dev --workspace=@opsboard/api
npm run dev --workspace=@opsboard/admin
npm run dev --workspace=@opsboard/web
```

### Building

```bash
# Build all packages
npm run build
```

## Workspaces

- `@opsboard/api` - Backend API server
- `@opsboard/admin` - Admin dashboard
- `@opsboard/web` - Web application
- `@opsboard/shared` - Shared package

## License

ISC
