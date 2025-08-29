# React Lesson 9: Controlled Component Inputs

## Controlled Components
- Form inputs whose value is controlled by React **state**.  
- Input value changes → update state with `onChange`.  
- State = single source of truth.  

### Example

function Form() {
  const [name, setName] = React.useState("");

  return (
    <input 
      type="text" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
    />
  );
}
