# React Lesson 8: Props and Prop Drilling

## Props
- **Props** (properties) let you pass data from a parent to a child component.  
- They are **read-only** and make components reusable.  

### Example

function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Welcome name="Alice" />;
}
