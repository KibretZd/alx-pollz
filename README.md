# Next.js Polling App

This is a polling application built with Next.js, designed to allow users to create, view, and participate in polls. The application includes user authentication features and a user-friendly interface using Shadcn components.

## Features

- User Authentication: Users can log in and register to access the application.
- Poll Management: Users can create new polls and view existing ones.
- Voting System: Users can vote on polls and see results.

## Folder Structure

```
alx-pollz
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── auth
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── polls
│   │   ├── page.tsx
│   │   └── [id]
│   │       └── page.tsx
│   ├── create-poll
│   │   └── page.tsx
├── components
│   ├── ui
│   │   └── shadcn-placeholder.tsx
│   ├── PollCard.tsx
│   ├── PollForm.tsx
│   └── AuthForm.tsx
├── lib
│   └── utils.ts
├── public
├── styles
│   └── globals.css
├── package.json
├── next.config.js
└── README.md
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd alx-pollz
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.