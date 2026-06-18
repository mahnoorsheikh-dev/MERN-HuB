export const topics = [
  {
    id: 1,
    slug: "javascript",
    title: "JavaScript",
    level: "Beginner",
    description: "The programming language of the web. Learn variables, functions, DOM, and more.",
    content: `JavaScript is the language that makes websites interactive.

Key Concepts:
- Variables (let, const, var)
- Functions & Arrow Functions
- DOM Manipulation
- Events
- Promises & Async/Await
- ES6+ Features
`,
    resources: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "https://javascript.info",
      "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    ],
  },
  {
    id: 2,
    slug: "react",
    title: "React",
    level: "Intermediate",
    description: "A JavaScript library for building fast and interactive user interfaces.",
    content: `React is a JavaScript library created by Meta.

Key Concepts:
- Components
- Props
- State
- Hooks (useState, useEffect)
- React Router
- Virtual DOM
`,
    resources: [
      "https://react.dev",
      "https://www.youtube.com/watch?v=bMknfKXIFA8",
    ],
  },
  {
    id: 3,
    slug: "nodejs",
    title: "Node.js",
    level: "Intermediate",
    description: "Run JavaScript on the server. Build fast and scalable backend applications.",
    content: `Node.js lets you run JavaScript outside the browser.

Key Concepts:
- Modules (CommonJS & ES Modules)
- File System (fs)
- HTTP Module
- NPM & Package Management
- Event Loop
- Streams & Buffers
`,
    resources: [
      "https://nodejs.org/en/docs",
      "https://www.youtube.com/watch?v=32M1al-Y6Ag",
    ],
  },
  {
    id: 4,
    slug: "express",
    title: "Express.js",
    level: "Intermediate",
    description: "A minimal and flexible Node.js web framework for building APIs and web apps.",
    content: `Express.js is the most popular Node.js framework.

Key Concepts:
- Routing
- Middleware
- Request & Response
- REST APIs
- Error Handling
- Template Engines
`,
    resources: [
      "https://expressjs.com",
      "https://www.youtube.com/watch?v=L72fhGm1tfE",
    ],
  },
  {
    id: 5,
    slug: "mongodb",
    title: "MongoDB",
    level: "Intermediate",
    description: "A NoSQL database that stores data in flexible JSON-like documents.",
    content: `MongoDB is a document-based NoSQL database.

Key Concepts:
- Collections & Documents
- CRUD Operations
- Schema Design
- Mongoose ODM
- Indexes
- Aggregation Pipeline
`,
    resources: [
      "https://www.mongodb.com/docs",
      "https://mongoosejs.com",
      "https://www.youtube.com/watch?v=ExcRbA7fy_A",
    ],
  },
  {
    id: 6,
    slug: "nextjs",
    title: "Next.js",
    level: "Advanced",
    description: "A React framework for production with routing, SSR, and performance built in.",
    content: `Next.js is built on top of React for production apps.

Key Concepts:
- File-based Routing
- Server Side Rendering (SSR)
- Static Site Generation (SSG)
- API Routes
- Image Optimization
- App Router (Next.js 13+)
`,
    resources: [
      "https://nextjs.org/docs",
      "https://www.youtube.com/watch?v=ZVnjOPwW4ZA",
    ],
  },
];
