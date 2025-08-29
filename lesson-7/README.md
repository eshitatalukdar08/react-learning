# React Lesson 7: Lists and Keys

## Overview
In this lesson, we learned how to render **lists** of elements in React using the JavaScript `map()` function and the importance of using **keys** to help React identify elements efficiently.

## Rendering Lists
React makes it easy to display lists by transforming arrays into elements using the `map()` method.

### Example
```javascript
import React from 'react';

function NameList() {
  const names = ['Alice', 'Bob', 'Charlie'];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default NameList;
