# React with Tailwind CSS Project

This is a React project set up with Tailwind CSS for rapid UI development. It includes basic component examples to help you get started.

## Project Structure

```
carlos-cv/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # Reusable React components
│   │   ├── Button.js    # Button component with multiple variants
│   │   └── Card.js      # Card component for layout
│   ├── App.js           # Main application component
│   ├── index.js         # Entry point
│   └── index.css        # Global styles (with Tailwind directives)
└── ...                  # Configuration files
```

## Features

- **React**: Modern JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Component Examples**: Custom Button and Card components to demonstrate best practices

## Getting Started

### Installation

Make sure you have Node.js installed, then run:

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

This will run the app in development mode at [http://localhost:3000](http://localhost:3000).

### Building for Production

Create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Customizing Tailwind

You can customize the Tailwind configuration in the `tailwind.config.js` file. See the [Tailwind documentation](https://tailwindcss.com/docs/configuration) for more details.

## Adding New Components

To add new components:

1. Create a new file in the `src/components/` directory
2. Export your component
3. Import and use it in your application

## Learn More

- [React documentation](https://reactjs.org/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
