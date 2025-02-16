Please take a look at our SQL Server: https://github.com/Nardozzzz/GuardianAngelServer
# React + TypeScript + Vite

This project is built using **React**, **TypeScript**, and **Vite**, with support for hot module replacement (HMR) and ESLint configurations.

## Dependencies

### Required Software
- **Node.js** (latest LTS recommended)
- **MySQL Server** (for database setup)

### Installing Dependencies
Before running the project, install all required Node.js dependencies by running:

```sh
npm install
```

## Database Setup
This project requires a MySQL database. Follow these steps to set up the database:

### 1. Download & Install MySQL Server
Ensure you have MySQL Server installed on your system.

### 2. Create the Database
You need to execute two SQL files:

1. **database.sql** - Creates the entire database schema.
2. **sampleData.sql** - Populates the database with sample data.

Run these SQL files in your MySQL environment before starting the application.

### 3. Insert Sample Data
Ensure the following tables are populated:

```sql
INSERT INTO Users VALUES (...);
INSERT INTO Children VALUES (...);
INSERT INTO sleepTracking VALUES (...);
-- Repeat for all necessary tables
```

### 4. Database Connection Details
- **Host**: `localhost`
- **Port**: `3306`
- **Username**: `your-username`
- **Password**: `your-password`

Update your database connection settings accordingly before running the app.

## Expanding ESLint Configuration
If you're developing a production application, update the ESLint configuration to enable type-aware lint rules.

### Configure `parserOptions`
```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

### Update ESLint Rules
Replace:
```js
tseslint.configs.recommended
```
With:
```js
tseslint.configs.recommendedTypeChecked
```
Or:
```js
tseslint.configs.strictTypeChecked
```
Optionally, add:
```js
...tseslint.configs.stylisticTypeChecked
```

### Install & Configure ESLint Plugin for React
```sh
npm install eslint-plugin-react --save-dev
```

Update `eslint.config.js`:
```js
import react from 'eslint-plugin-react';

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Running the Application
Once all dependencies and the database are set up, start the development server:

```sh
npm run dev
```

This will launch the Vite development server, allowing you to access the React app in your browser.

---
Follow these instructions carefully to ensure a smooth setup and development experience.

