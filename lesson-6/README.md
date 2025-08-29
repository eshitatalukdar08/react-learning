# React Lesson 6: useState Hook

## Overview
In this lesson, we explored the **`useState` Hook** in React. `useState` is a fundamental Hook that allows you to add state to functional components. Unlike class components, functional components can now maintain and update their own state with ease.

## What is `useState`?
`useState` is a Hook that lets you declare a state variable in a functional component. It returns an array containing:

1. The current state value.
2. A function to update that state.

### Syntax
```javascript
const [state, setState] = useState(initialValue);
