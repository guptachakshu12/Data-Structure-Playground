# Data Structure Playground

A **React-based interactive web application** to visualize and interact with popular data structures like Arrays, Stacks, Queues, Linked Lists, and Trees. This playground helps beginners and enthusiasts understand the working of different data structures with **real-time animations** and **easy-to-use controls**.

---

## Features

- **Interactive Visualization:** Perform operations like Add, Remove, and Traverse on various data structures.
- **Supported Data Structures:**
  - Array
  - Stack
  - Queue
  - Linked List
  - Binary Tree
- **Traversal Animations:** Inorder, Preorder, Postorder traversal for trees.
- **Quick Action Buttons:** Instantly select and visualize a data structure from the home screen.
- **Clean and Responsive UI:** Modern design using React and CSS, works on desktop and mobile screens.
- **Step-by-Step Instructions:** Built-in guidance on how to get started.

---

## Folder Structure

data-structure-playground/
├─ public/
│ └─ assets/
│ └─ image.png # Optional hero image
├─ src/
│ ├─ components/
│ │ ├─ Playground.jsx # Wrapper component for consistent layout
│ │ └─ Visualizer/
│ │ ├─ ArrayVisualizer.jsx
│ │ ├─ StackVisualizer.jsx
│ │ ├─ QueueVisualizer.jsx
│ │ ├─ LinkedListVisualizer.jsx
│ │ └─ TreeVisualizer.jsx
│ ├─ pages/
│ │ └─ Home.jsx # Landing page
│ ├─ App.jsx
│ └─ index.jsx
├─ package.json
├─ vite.config.js
└─ README.md


---

## Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/data-structure-playground.git
cd data-structure-playground

2 Install dependencies:
npm install

3 Start the development server:
npm run dev

4 Open your browser at http://localhost:5173 (Vite default) to see the playground.

Usage
1. Open the app and select a data structure from the sidebar or buttons on the home screen.

2. Use the provided controls to:
. Add or remove elements.
. Traverse the structure.
. Reset or clear the structure.

3. Watch real-time animations to understand how data structures behave internally.


Technologies Used
React.js – Frontend framework
Vite – Development build tool
CSS – Styling and layout
JavaScript – Logic for data structure operations and animations

Notes
All tree, stack, queue, linked list, and array visualizers are implemented in React functional components.
Images can be added in public/assets/ and referenced directly.
The application is purely frontend-based; no backend is required.


Screenshots
<img width="1917" height="912" alt="image" src="https://github.com/user-attachments/assets/8208eae3-036c-4968-b857-094e8c2729d4" />
