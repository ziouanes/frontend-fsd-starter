# Frontend FSD Starter

A React-based frontend application for the University Management System, built with TypeScript and Vite.

## 🚀 Technologies Used

- React 18
- TypeScript
- Vite
- React Router DOM v7
- Modern CSS with CSS Variables

## 📁 Project Structure

```
frontend-fsd-starter/
├── public/
│   └── logo.png
├── src/
│   ├── features/
│   │   ├── auth/
│   │   └── users/
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Login.tsx
│   ├── widgets/
│   │   └── Card.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── tsconfig.json
```

## 🔧 Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/frontend-fsd-starter.git
cd frontend-fsd-starter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔑 Features

- User Authentication
- Role-based Access Control (Student/Teacher/Admin)
- Dashboard with Service Cards
- Responsive Design
- Modern UI with Animations

## 🎨 UI Components

### Cards
- Service cards with icons
- Hover animations
- Shadow effects

### Login Page
- Animated form inputs
- Role selection
- Error handling
- Responsive design

## 🌐 Environment Setup

The application expects a backend server running at `http://localhost:8000`. Make sure to have the backend server running before starting the frontend application.

## 🛡️ Authentication

The application uses role-based authentication with three user types:
- Student
- Teacher
- Admin

## 🎯 Development Guidelines

1. Follow the existing code structure
2. Use TypeScript for all new components
3. Maintain CSS variables for consistent styling
4. Add proper types for all props and state
5. Follow the existing naming conventions

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)

## 📄 License

MIT License