# Vite Multi Page Template
提供小型專案使用 vite 快速建置多頁面網頁應用程式。

## Scripts
```
# Start the development server
npm run dev

# Checks your code for any linting errors
npm run lint

# Tries to automatically fix any linting errors present in your code
npm run lint:fix

# Formats your code in a consistent, predefined style using Prettier
npm run format

# Build for production
npm run build

# Preview the build
npm run preview

# Build and preview the project
npm run build-preview
```

## Folder Structure
```
.
├── public                  # Public assets and resources
├── src                     # Source code
│   ├── assets              # General assets for your project
│   │   ├── images          # Store your images here
│   ├── js                  # Javascript files of your project
│   ├── styles              # CSS styles for your project
├── .editorconfig           # Configuration for the EditorConfig plugin
├── .eslintignore           # Files to be ignored by ESLint
├── .eslintrc.json          # Configuration for ESLint
├── .gitignore              # Files and folders to be ignored by Git
├── .prettierignore         # Files to be ignored by Prettier
├── .prettierrc             # Configuration for Prettier
├── index.html              # The HTML file for your project
├── package-lock.json       # Lockfile for your project's dependencies
├── package.json            # Defines your project and its dependencies
├── postcss.config.cjs      # Configuration for PostCSS
├── README.md               # This file
├── vite.config.js          # Configuration for Vite
```

## Vite vs Gulp
| Feature | Vite | Gulp |
| ------- | ---- | ---- |
