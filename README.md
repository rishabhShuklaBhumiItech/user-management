# User Management

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rishabhShuklaBhumiItech/user-managment
   ```

2. Navigate to the project directory:

   ```bash
   cd user-managment
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with:

```bash
npm run dev
```

The site will be available at `http://localhost:5174`.

## Environment Variables

This project uses the following environment variables, which should be set in the respective `.env.development` and `.env.production` files:

- **`VITE_API_BASE_PATH`**: The base path for the API, which varies depending on the environment (development or production).

Example `.env.development`:

```env
VITE_API_BASE_PATH=https://api-dev.enqbit.com
```

Example `.env.production`:

```env
VITE_API_BASE_PATH=https://api.enqbit.com
```

Make sure to create these `.env` files in the root of the project directory with the appropriate values.


## Folder Structure

```plaintext
├── public               # Static assets like images, fonts, etc.
├── src
│   ├── assets           # Images, icons, and other static resources
│   ├── components       # Reusable components
│   ├── constants        # Reusable components
│   ├── pages            # URLs for 
│   ├── layouts          # Layout for wesite
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point of the application
│   └── vite-env.d.ts    # Vite environment types
├── index.html           # Main HTML file
├── package.json         # Project metadata and dependencies
└── tsconfig.json        # TypeScript configuration
```

## Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build locally.

## License

This project is licensed under the [MIT License](LICENSE).

---

This README provides an overview of the project, how to get started, and details on the structure and technologies used. You can adjust it further based on the specific details of the EnQbit landing page.

Here's the updated README with the environment variables mentioned:

---