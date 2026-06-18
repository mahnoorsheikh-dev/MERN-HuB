export const topics = [
  {
    id: 1,
    slug: "javascript",
    title: "JavaScript",
    level: "Beginner",
    description: "The programming language of the web. Learn variables, functions, DOM, and more.",
    content: `
# What is JavaScript?
JavaScript is the only programming language that runs natively in the browser. It makes websites interactive — from button clicks to API calls to animations.

# Variables
Variables store data. JavaScript has 3 ways to declare them:

\`\`\`js
var name = "Ali";       // old way, avoid using
let age = 25;           // use for values that change
const city = "Lahore";  // use for values that never change
\`\`\`

# Data Types
\`\`\`js
let name = "Ali";          // String
let age = 25;              // Number
let isLoggedIn = true;     // Boolean
let score = null;          // Null
let address;               // Undefined
let user = { name: "Ali" } // Object
let nums = [1, 2, 3];      // Array
\`\`\`

# Functions
\`\`\`js
// Regular function
function greet(name) {
  return "Hello " + name;
}

// Arrow function (modern way)
const greet = (name) => {
  return "Hello " + name;
}

// Short arrow function
const greet = (name) => "Hello " + name;
\`\`\`

# Arrays
\`\`\`js
const fruits = ["apple", "banana", "mango"];

fruits.push("grape");        // add to end
fruits.pop();                // remove from end
fruits.map(f => f + "!");    // transform each item
fruits.filter(f => f !== "banana"); // filter items
fruits.find(f => f === "mango");    // find one item
\`\`\`

# Objects
\`\`\`js
const user = {
  name: "Ali",
  age: 25,
  city: "Lahore",
};

console.log(user.name);       // Ali
console.log(user["age"]);     // 25

// Destructuring
const { name, age } = user;
\`\`\`

# DOM Manipulation
\`\`\`js
// Select elements
const btn = document.getElementById("myBtn");
const title = document.querySelector("h1");

// Change content
title.textContent = "Hello World";
title.style.color = "red";

// Listen for events
btn.addEventListener("click", () => {
  console.log("Button clicked!");
});
\`\`\`

# Promises & Async/Await
\`\`\`js
// Fetch data from an API
const getData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
};

getData();
\`\`\`

# ES6+ Features
\`\`\`js
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Template literals
const name = "Ali";
console.log(\`Hello \${name}!\`); // Hello Ali!

// Optional chaining
const user = { profile: { city: "Lahore" } };
console.log(user?.profile?.city); // Lahore
console.log(user?.address?.city); // undefined (no error)

// Nullish coalescing
const username = null ?? "Guest"; // Guest
\`\`\`
    `,
    resources: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "https://javascript.info",
      "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    ],
  },
  {
    id: 2,
    slug: "react",
    title: "React",
    level: "Intermediate",
    description: "A JavaScript library for building fast and interactive user interfaces.",
    content: `
# What is React?
React is a JavaScript library built by Meta for creating user interfaces. Instead of manipulating the DOM directly, you build components and React handles the rest.

# Your First Component
\`\`\`jsx
function Hello() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is my first React component.</p>
    </div>
  );
}

export default Hello;
\`\`\`

# Props — Passing Data
\`\`\`jsx
function Card({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Using the component
<Card title="React" description="A JS library" />
\`\`\`

# useState — Managing State
\`\`\`jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
\`\`\`

# useEffect — Side Effects
\`\`\`jsx
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // empty array = run once on mount

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

# Conditional Rendering
\`\`\`jsx
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please log in.</h1>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>
    </div>
  );
}
\`\`\`

# Lists & Keys
\`\`\`jsx
const fruits = ["Apple", "Banana", "Mango"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
\`\`\`

# React Router
\`\`\`jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

# Custom Hook Example
\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// Using the custom hook
function App() {
  const { data, loading } = useFetch("https://api.example.com/posts");
  if (loading) return <p>Loading...</p>;
  return <p>{data.title}</p>;
}
\`\`\`
    `,
    resources: [
      "https://react.dev",
      "https://www.youtube.com/watch?v=bMknfKXIFA8",
      "https://www.freecodecamp.org/learn/front-end-development-libraries/",
      "https://roadmap.sh/react",
    ],
  },
  {
    id: 3,
    slug: "nodejs",
    title: "Node.js",
    level: "Intermediate",
    description: "Run JavaScript on the server. Build fast and scalable backend applications.",
    content: `
# What is Node.js?
Node.js lets you run JavaScript outside the browser — on a server. It is built on Chrome's V8 engine and is perfect for building APIs, servers, and CLI tools.

# Your First Node.js Server
\`\`\`js
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
\`\`\`

# Modules
\`\`\`js
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
module.exports = { add, subtract };

// app.js
const { add, subtract } = require("./math");
console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2
\`\`\`

# NPM — Node Package Manager
\`\`\`bash
npm init -y              # create package.json
npm install express      # install a package
npm install -D nodemon   # install dev dependency
npm uninstall express    # remove a package
\`\`\`

# File System (fs)
\`\`\`js
const fs = require("fs");

// Read a file
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write a file
fs.writeFile("output.txt", "Hello World!", (err) => {
  if (err) throw err;
  console.log("File written!");
});
\`\`\`

# Environment Variables
\`\`\`js
// .env file
PORT=5000
DB_URL=mongodb://localhost:27017/mydb

// app.js
require("dotenv").config();
const port = process.env.PORT || 3000;
console.log("Port:", port);
\`\`\`

# Async/Await in Node.js
\`\`\`js
const fs = require("fs/promises");

const readFile = async () => {
  try {
    const data = await fs.readFile("data.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
};

readFile();
\`\`\`

# Event Emitter
\`\`\`js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(\`Hello \${name}!\`);
});

emitter.emit("greet", "Ali"); // Hello Ali!
\`\`\`
    `,
    resources: [
      "https://nodejs.org/en/docs",
      "https://www.youtube.com/watch?v=32M1al-Y6Ag",
      "https://roadmap.sh/nodejs",
      "https://www.freecodecamp.org/news/get-started-with-nodejs/",
    ],
  },
  {
    id: 4,
    slug: "express",
    title: "Express.js",
    level: "Intermediate",
    description: "A minimal and flexible Node.js web framework for building APIs and web apps.",
    content: `
# What is Express.js?
Express is the most popular Node.js framework. It makes building web servers and REST APIs much simpler with built-in routing and middleware support.

# Setup
\`\`\`bash
npm install express
\`\`\`

# Basic Server
\`\`\`js
const express = require("express");
const app = express();

app.use(express.json()); // parse JSON requests

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
\`\`\`

# Routing
\`\`\`js
// GET
app.get("/users", (req, res) => {
  res.json({ users: [] });
});

// POST
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.json({ message: "User created", name, email });
});

// PUT
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: \`User \${id} updated\` });
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: \`User \${id} deleted\` });
});
\`\`\`

# Middleware
\`\`\`js
// Logger middleware
const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // pass to next middleware
};

app.use(logger);

// Auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

// Apply to specific route
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Protected data" });
});
\`\`\`

# Route Parameters & Query
\`\`\`js
// Route params — /users/123
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ userId: id });
});

// Query strings — /search?q=react
app.get("/search", (req, res) => {
  const { q } = req.query;
  res.json({ searchTerm: q });
});
\`\`\`

# Express Router
\`\`\`js
// routes/users.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json({ users: [] }));
router.post("/", (req, res) => res.json({ message: "Created" }));

module.exports = router;

// app.js
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);
\`\`\`

# Error Handling
\`\`\`js
// Error handling middleware (always 4 params)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
\`\`\`
    `,
    resources: [
      "https://expressjs.com",
      "https://www.youtube.com/watch?v=L72fhGm1tfE",
      "https://roadmap.sh/nodejs",
      "https://www.freecodecamp.org/news/express-explained-with-examples-installation-routing-middleware-and-more/",
    ],
  },
  {
    id: 5,
    slug: "mongodb",
    title: "MongoDB",
    level: "Intermediate",
    description: "A NoSQL database that stores data in flexible JSON-like documents.",
    content: `
# What is MongoDB?
MongoDB is a NoSQL database that stores data as JSON-like documents instead of rows and tables. It is flexible, scalable, and works perfectly with Node.js.

# Key Concepts
- **Database** — holds collections (like a SQL database)
- **Collection** — holds documents (like a SQL table)
- **Document** — a single record (like a SQL row) in JSON format

# Setup with Mongoose
\`\`\`bash
npm install mongoose
\`\`\`

# Connect to MongoDB
\`\`\`js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mernhub")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("Error:", err));
\`\`\`

# Creating a Schema & Model
\`\`\`js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
\`\`\`

# CRUD Operations
\`\`\`js
// CREATE
const newUser = new User({ name: "Ali", email: "ali@example.com" });
await newUser.save();

// Or shorthand
await User.create({ name: "Ali", email: "ali@example.com" });

// READ
const users = await User.find();               // all users
const user = await User.findById("123");        // by id
const ali = await User.findOne({ name: "Ali"}); // one match

// UPDATE
await User.findByIdAndUpdate("123", { name: "Ahmed" }, { new: true });

// DELETE
await User.findByIdAndDelete("123");
\`\`\`

# Filtering & Querying
\`\`\`js
// Find users older than 20
const users = await User.find({ age: { $gt: 20 } });

// Find and sort by name
const sorted = await User.find().sort({ name: 1 }); // 1 = asc, -1 = desc

// Limit results
const limited = await User.find().limit(10);

// Select specific fields
const names = await User.find().select("name email");
\`\`\`

# Mongoose Validation
\`\`\`js
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [3, "Title must be at least 3 characters"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price cannot be negative"],
  },
  category: {
    type: String,
    enum: ["electronics", "clothing", "food"],
  },
});
\`\`\`

# Relationships (Populate)
\`\`\`js
const postSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // reference to User model
  },
});

// Fetch post with author details
const post = await Post.findById("123").populate("author");
console.log(post.author.name); // Ali
\`\`\`
    `,
    resources: [
      "https://www.mongodb.com/docs",
      "https://mongoosejs.com",
      "https://www.youtube.com/watch?v=ExcRbA7fy_A",
      "https://roadmap.sh/mongodb",
    ],
  },
  {
    id: 6,
    slug: "nextjs",
    title: "Next.js",
    level: "Advanced",
    description: "A React framework for production with routing, SSR, and performance built in.",
    content: `
# What is Next.js?
Next.js is a React framework that adds powerful features like file-based routing, server-side rendering, static generation, and API routes out of the box.

# Create a Next.js App
\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

# File-Based Routing
In Next.js, every file in the \`app\` folder becomes a route automatically.

\`\`\`
app/
  page.jsx          → /
  about/
    page.jsx        → /about
  blog/
    page.jsx        → /blog
    [slug]/
      page.jsx      → /blog/my-post
\`\`\`

# Basic Page
\`\`\`jsx
// app/page.jsx
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    </div>
  );
}
\`\`\`

# Dynamic Routes
\`\`\`jsx
// app/blog/[slug]/page.jsx
export default function BlogPost({ params }) {
  return (
    <div>
      <h1>Post: {params.slug}</h1>
    </div>
  );
}
\`\`\`

# Server Components vs Client Components
\`\`\`jsx
// Server Component (default) — runs on server
export default async function Page() {
  const data = await fetch("https://api.example.com/posts");
  const posts = await data.json();
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}

// Client Component — runs in browser
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\`

# API Routes
\`\`\`js
// app/api/users/route.js
export async function GET() {
  const users = [{ id: 1, name: "Ali" }];
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();
  return Response.json({ message: "Created", data: body });
}
\`\`\`

# Layout
\`\`\`jsx
// app/layout.jsx — wraps all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>My Navbar</nav>
        {children}
        <footer>My Footer</footer>
      </body>
    </html>
  );
}
\`\`\`

# next/image & next/link
\`\`\`jsx
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/about">Go to About</Link>
      <Image
        src="/logo.png"
        alt="Logo"
        width={200}
        height={100}
      />
    </div>
  );
}
\`\`\`
    `,
    resources: [
      "https://nextjs.org/docs",
      "https://www.youtube.com/watch?v=ZVnjOPwW4ZA",
      "https://roadmap.sh/nextjs",
      "https://www.freecodecamp.org/news/nextjs-tutorial/",
    ],
  },
  {
    id: 7,
    slug: "typescript",
    title: "TypeScript",
    level: "Intermediate",
    description: "A strongly typed superset of JavaScript that compiles to plain JavaScript.",
    content: `
# What is TypeScript?
TypeScript is JavaScript with types. It catches errors before your code runs, making it easier to build large applications.

# Setup
\`\`\`bash
npm install -D typescript
npx tsc --init
\`\`\`

# Basic Types
\`\`\`ts
let name: string = "Ali";
let age: number = 25;
let isLoggedIn: boolean = true;
let scores: number[] = [1, 2, 3];
let anything: any = "hello";
\`\`\`

# Functions
\`\`\`ts
function greet(name: string): string {
  return "Hello " + name;
}

const add = (a: number, b: number): number => a + b;

// Optional parameter
function log(message: string, level?: string): void {
  console.log(level ? \`[\${level}] \${message}\` : message);
}
\`\`\`

# Interfaces
\`\`\`ts
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // optional
}

const user: User = {
  id: 1,
  name: "Ali",
  email: "ali@example.com",
};
\`\`\`

# Type Aliases
\`\`\`ts
type Status = "active" | "inactive" | "banned";
type ID = string | number;

const userStatus: Status = "active";
const userId: ID = 123;
\`\`\`

# Generics
\`\`\`ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst<number>([1, 2, 3]);   // 1
getFirst<string>(["a", "b"]);  // "a"
\`\`\`

# TypeScript with React
\`\`\`tsx
interface Props {
  title: string;
  count: number;
  onClick: () => void;
}

const Card: React.FC<Props> = ({ title, count, onClick }) => {
  return (
    <div onClick={onClick}>
      <h2>{title}</h2>
      <p>{count}</p>
    </div>
  );
};
\`\`\`

# useState with Types
\`\`\`tsx
const [user, setUser] = useState<User | null>(null);
const [count, setCount] = useState<number>(0);
const [items, setItems] = useState<string[]>([]);
\`\`\`
    `,
    resources: [
      "https://www.typescriptlang.org/docs/",
      "https://roadmap.sh/typescript",
      "https://www.youtube.com/watch?v=30LWjhZzg50",
      "https://www.freecodecamp.org/news/learn-typescript-beginners-guide/",
    ],
  },
  {
    id: 8,
    slug: "tailwindcss",
    title: "Tailwind CSS",
    level: "Beginner",
    description: "A utility-first CSS framework for building modern UIs directly in your markup.",
    content: `
# What is Tailwind CSS?
Tailwind CSS is a utility-first CSS framework. Instead of writing custom CSS, you use small utility classes directly in your HTML or JSX.

# Setup with Vite + React
\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

# tailwind.config.js
\`\`\`js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
\`\`\`

# index.css
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

# Typography
\`\`\`jsx
<h1 className="text-4xl font-bold text-gray-900">Heading</h1>
<p className="text-lg text-gray-600 leading-relaxed">Paragraph</p>
<span className="text-sm font-semibold uppercase tracking-wide">Label</span>
\`\`\`

# Colors
\`\`\`jsx
<div className="bg-blue-500 text-white">Blue background</div>
<div className="bg-green-100 text-green-800">Green light</div>
<div className="text-red-500">Red text</div>
\`\`\`

# Spacing
\`\`\`jsx
<div className="p-4">padding all sides</div>
<div className="px-6 py-3">padding x and y</div>
<div className="mt-4 mb-8">margin top and bottom</div>
<div className="mx-auto">center horizontally</div>
\`\`\`

# Flexbox
\`\`\`jsx
<div className="flex items-center justify-between gap-4">
  <span>Left</span>
  <span>Right</span>
</div>

<div className="flex flex-col gap-2">
  <p>Item 1</p>
  <p>Item 2</p>
</div>
\`\`\`

# Grid
\`\`\`jsx
<div className="grid grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
\`\`\`

# Responsive Design
\`\`\`jsx
// Breakpoints: sm md lg xl 2xl
<h1 className="text-2xl md:text-4xl lg:text-6xl">
  Responsive Heading
</h1>

<div className="hidden md:block">
  Only visible on medium screens and above
</div>
\`\`\`

# Hover & Focus States
\`\`\`jsx
<button className="bg-blue-500 hover:bg-blue-700 transition-colors px-4 py-2 rounded">
  Hover Me
</button>

<input className="border focus:outline-none focus:ring-2 focus:ring-blue-500" />
\`\`\`

# Custom Colors in Config
\`\`\`js
theme: {
  extend: {
    colors: {
      primary: "#00BFA6",
      dark: "#1E1E2F",
      card: "#111827",
    },
  },
},
\`\`\`
    `,
    resources: [
      "https://tailwindcss.com/docs",
      "https://www.youtube.com/watch?v=pfaSUYaSgRo",
      "https://roadmap.sh/frontend",
      "https://www.freecodecamp.org/news/what-is-tailwind-css/",
    ],
  },
  {
    id: 9,
    slug: "git",
    title: "Git & GitHub",
    level: "Beginner",
    description: "Version control system to track code changes and collaborate with others.",
    content: `
# What is Git?
Git is a version control system that tracks changes in your code. GitHub is a platform to host your Git repositories online.

# Setup
\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
\`\`\`

# Starting a Project
\`\`\`bash
git init                  # initialize git in a folder
git clone <url>           # clone an existing repo
\`\`\`

# Daily Workflow
\`\`\`bash
git status                # see changed files
git add .                 # stage all changes
git add filename.js       # stage specific file
git commit -m "message"   # save changes
git push origin main      # push to GitHub
git pull origin main      # get latest changes
\`\`\`

# Branches
\`\`\`bash
git branch                        # list branches
git branch feature-login          # create branch
git checkout feature-login        # switch to branch
git checkout -b feature-login     # create and switch
git merge feature-login           # merge into current branch
git branch -d feature-login       # delete branch
\`\`\`

# Undoing Changes
\`\`\`bash
git restore filename.js           # undo unstaged changes
git restore --staged filename.js  # unstage a file
git reset --soft HEAD~1           # undo last commit, keep changes
git reset --hard HEAD~1           # undo last commit, delete changes
\`\`\`

# .gitignore
\`\`\`bash
# .gitignore file — files Git should ignore
node_modules/
.env
dist/
.DS_Store
\`\`\`

# Working with GitHub
\`\`\`bash
# Connect local repo to GitHub
git remote add origin https://github.com/username/repo.git
git push -u origin main

# Fork & Pull Request workflow
# 1. Fork the repo on GitHub
# 2. Clone your fork
# 3. Create a branch
# 4. Make changes and push
# 5. Open a Pull Request on GitHub
\`\`\`

# Useful Commands
\`\`\`bash
git log --oneline         # see commit history
git diff                  # see unstaged changes
git stash                 # temporarily save changes
git stash pop             # restore stashed changes
\`\`\`
    `,
    resources: [
      "https://git-scm.com/doc",
      "https://docs.github.com/en",
      "https://www.youtube.com/watch?v=RGOj5yH7evk",
      "https://roadmap.sh/git-github",
    ],
  },
  {
    id: 10,
    slug: "jwt",
    title: "JWT & Authentication",
    level: "Intermediate",
    description: "Secure your apps with user login, registration, and JSON Web Tokens.",
    content: `
# What is JWT?
JSON Web Token (JWT) is a way to securely transmit information between a client and server. It is commonly used for authentication.

# How it Works
1. User logs in with email & password
2. Server verifies credentials
3. Server creates a JWT and sends it to client
4. Client stores JWT (localStorage or cookie)
5. Client sends JWT with every request
6. Server verifies JWT and allows access

# Setup
\`\`\`bash
npm install jsonwebtoken bcryptjs
\`\`\`

# Register User
\`\`\`js
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
\`\`\`

# Login User
\`\`\`js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, user: { id: user._id, name: user.name } });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
\`\`\`

# Auth Middleware
\`\`\`js
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = protect;
\`\`\`

# Protected Route
\`\`\`js
const protect = require("./middleware/auth");

app.get("/profile", protect, async (req, res) => {
  const user = await User.findById(req.user.userId).select("-password");
  res.json(user);
});
\`\`\`

# Frontend — Storing & Sending Token
\`\`\`js
// Store token after login
localStorage.setItem("token", data.token);

// Send token with requests
const response = await fetch("/api/profile", {
  headers: {
    Authorization: \`Bearer \${localStorage.getItem("token")}\`,
  },
});

// Logout
localStorage.removeItem("token");
\`\`\`
    `,
    resources: [
      "https://jwt.io/introduction",
      "https://www.youtube.com/watch?v=mbsmsi7l3r4",
      "https://roadmap.sh/nodejs",
      "https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/",
    ],
  },
  {
    id: 11,
    slug: "restapi",
    title: "REST APIs",
    level: "Intermediate",
    description: "Design and build RESTful APIs that connect your frontend and backend.",
    content: `
# What is a REST API?
REST (Representational State Transfer) is a set of rules for building APIs. A REST API lets your frontend communicate with your backend over HTTP.

# HTTP Methods
\`\`\`
GET     → Read data
POST    → Create data
PUT     → Update data (full)
PATCH   → Update data (partial)
DELETE  → Delete data
\`\`\`

# HTTP Status Codes
\`\`\`
200 OK              → Success
201 Created         → Resource created
400 Bad Request     → Invalid input
401 Unauthorized    → Not logged in
403 Forbidden       → No permission
404 Not Found       → Resource not found
500 Server Error    → Something broke
\`\`\`

# REST API Structure
\`\`\`
GET    /api/posts         → get all posts
GET    /api/posts/:id     → get one post
POST   /api/posts         → create a post
PUT    /api/posts/:id     → update a post
DELETE /api/posts/:id     → delete a post
\`\`\`

# Building a REST API
\`\`\`js
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get one post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create post
router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete post
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
\`\`\`

# Calling REST API from React
\`\`\`js
// GET
const getPosts = async () => {
  const res = await fetch("/api/posts");
  const data = await res.json();
  return data;
};

// POST
const createPost = async (postData) => {
  const res = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  return await res.json();
};

// DELETE
const deletePost = async (id) => {
  await fetch(\`/api/posts/\${id}\`, { method: "DELETE" });
};
\`\`\`

# API Best Practices
\`\`\`
✓ Use plural nouns for endpoints (/posts not /post)
✓ Use correct HTTP methods
✓ Return correct status codes
✓ Handle errors properly
✓ Validate input data
✓ Use environment variables for secrets
✓ Add pagination for large datasets
\`\`\`
    `,
    resources: [
      "https://restfulapi.net",
      "https://www.youtube.com/watch?v=fgTGADljAeg",
      "https://roadmap.sh/api-design",
      "https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/",
    ],
  },
  {
    id: 12,
    slug: "deployment",
    title: "Deployment",
    level: "Intermediate",
    description: "Deploy your frontend and backend apps to the web for free.",
    content: `
# What is Deployment?
Deployment means putting your app on the internet so anyone can access it. Different platforms handle frontend and backend differently.

# Frontend Deployment — Vercel
Vercel is the easiest way to deploy React and Next.js apps for free.

\`\`\`bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or connect GitHub repo on vercel.com
# Every push to main auto-deploys
\`\`\`

# Frontend Deployment — Netlify
\`\`\`bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your app first
npm run build

# Deploy
netlify deploy --prod --dir=dist
\`\`\`

# Vite Build Settings for Vercel
\`\`\`json
// vercel.json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
\`\`\`

# Backend Deployment — Render
Render is the best free platform for Node.js backends.

\`\`\`
1. Push your backend to GitHub
2. Go to render.com
3. Click New → Web Service
4. Connect your GitHub repo
5. Set:
   - Build Command: npm install
   - Start Command: node server.js
6. Add environment variables
7. Click Deploy
\`\`\`

# Backend Deployment — Railway
\`\`\`bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
\`\`\`

# Environment Variables
\`\`\`bash
# Never push .env to GitHub
# Add variables in platform dashboard:

# Vercel → Project Settings → Environment Variables
# Render → Service → Environment
# Railway → Project → Variables

# Example variables
PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=mysecretkey
\`\`\`

# MongoDB Atlas — Cloud Database
\`\`\`
1. Go to mongodb.com/atlas
2. Create free account
3. Create a cluster (free tier)
4. Click Connect → Drivers
5. Copy connection string
6. Replace password in string
7. Add to environment variables as MONGO_URI
\`\`\`

# Deployment Checklist
\`\`\`
✓ Add .env to .gitignore
✓ Set all environment variables on platform
✓ Use MongoDB Atlas for production database
✓ Add vercel.json for React Router fix
✓ Test build locally before deploying (npm run build)
✓ Check all API URLs point to production backend
\`\`\`
    `,
    resources: [
      "https://vercel.com/docs",
      "https://render.com/docs",
      "https://www.mongodb.com/atlas",
      "https://www.youtube.com/watch?v=l134cBAJCuc",
    ],
  },
];