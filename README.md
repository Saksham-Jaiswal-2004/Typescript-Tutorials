# 📘 TypeScript & React with TypeScript (TSX) Learning Repository

Welcome to my personal learning repository where I explore and practice **TypeScript** and **React with TypeScript (TSX)**. This repository is organized into separate folders for **TypeScript** and **TypeScript with React (TSX)** tutorials, including mini-projects to reinforce the concepts.

## 📂 Folder Structure
```bash
Typescript-Tutorials/
│
├── 01-Basics/
│   ├── app.ts
│   ├── app.js
│   └── notes.txt
│
├── 02-Type-System/
│   ├── 01-Type-Inference-Annotations.ts
│   ├── 02-Interfaces.ts
│   ├── 03-Type-Aliases.ts
│   ├── 04-Intersection.ts
│   └── notes.txt
│
├── 03-Classes-and-Objects/
│   ├── 01-Classes-Objects.ts
│   ├── 02-Constructor.ts
│   ├── 03-This-Keyword.ts
│   ├── 04-Access-Modifiers.ts
│   ├── 05-Optional-Properties.ts
│   ├── 06-Getters-Setters.ts
│   ├── 07-Static-Members.ts
│   ├── 08-Abstract-Classes.ts
│   └── notes.txt
│
├── 04-Functions/
│   ├── 01-Functions-Basics.ts
│   ├── 02-Rest-Parameter.ts
│   ├── 03-Function-Overloading.ts
│   └── notes.txt
│
├── 05-Advanced-Concepts/
│   ├── 01-Generics.ts
│   ├── 02-a-Modules.ts
│   ├── 02-b-Modules.ts
│   ├── 03-Type-Assertions.ts
│   ├── 04-Type-Guards.ts
│   └── notes.txt
│
├── 06-Other-Topics/
│   ├── 01-Discriminated-Unions.ts
│   ├── 02-Mapped-Types.ts
│
├── 07-TSX-React/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.js
│   │   ├── main.tsx
│   │   ├── main.js
│   │   └── components/
│   │       ├── ExampleComponent.tsx
│   │       └── ExampleComponent.js
│   ├── public/
│   │   └── index.html
│   ├── tsconfig.json
│   ├── package.json
│   ├── vite.config.ts
│   └── README.md
│
├── LICENSE
├── tsconfig.json
├── README.md
└── .gitignore
```

### 🔹 `typescript-tutorials/`
This folder contains **TypeScript** tutorials, with individual folders for each topic. Here are the key concepts covered:
- **Variables, Functions, and Types**
- **Advanced Types:** Union, Intersection, Type Narrowing
- **Interfaces, Classes, and Generics**
- **Utility Types and Modules**
- **Practice Projects**

Each file includes:
- **`.ts`** source code
- **`.js`** output after compilation (generated using `tsc`)

### 🔷 `ts-react-tutorials/`
This section focuses on using **TypeScript with React (TSX)**, with mini-projects for each concept. Key concepts include:
- **Components, Props, and State**
- **Custom Hooks & Built-in Hooks with TS**
- **API Fetching with Typed Responses**
- **Context API with Type Safety**
- **Forms with Type Validation**
- **Projects** such as a Todo App or API-based User List

Each folder here contains:
- **App.tsx** — main component file
- **Components/`ComponentName`.tsx** — reusable components
- **Types/`TypeName`.ts** — TypeScript type definitions
- **Styles/`style.css`** — styling files (if any)

---

## 🚀 How to Use This Repo

### 1. **Clone the repository**
```bash
git clone https://github.com/your-username/Typescript-Tutorials.git
cd Typescript-Tutorials
```

### 2. Install dependencies (for React/Vite projects)
If you're running React projects (e.g., in ts-react-tutorials/), install the required dependencies:
```bash
npm install
```

### 3. Compile TypeScript files
For TypeScript practice files (in typescript-tutorials/), compile .ts files into .js:

```bash
npx tsc
```
The compiled JavaScript files will appear next to their TypeScript counterparts. For example, App.tsx will compile to App.js.

### 4. Run React projects
Navigate into any folder under ts-react-tutorials/ and run the React project:

```bash
npm run dev   # For Vite or other dev server configurations
```
This will start a development server and open the React app in your browser.

## 🛠 Tools & Stack
TypeScript – Superset of JavaScript for static typing

React – JavaScript library for building user interfaces

Vite – Next-generation, fast development tool

Node.js – JavaScript runtime (used for compiling TypeScript files and running dev servers)

## 📌 Notes
Each tutorial folder includes a README explaining the specific concepts and how to run the code.

Feel free to fork this repo, clone it, and modify the code to experiment.

This repository is a learning resource and is not intended for production.

## 📧 Contact
Made with 💻 by Saksham
Open to feedback and collaboration!
[GitHub](https://github.com/Saksham-Jaiswal-2004) | [LinkedIn](https://www.linkedin.com/in/saksham-jaiswal-220637302/) | [Email](sakshamjaiswalofficial@gmail.com)

## 📝 License
This project is licensed under the [MIT License](./LICENSE) - see the LICENSE file for details.