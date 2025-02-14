```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The effect runs only once on mount because of the empty array
    console.log('Mounted');
  }, []);

  return <div>Count: {count}</div>;
}
export default MyComponent
```