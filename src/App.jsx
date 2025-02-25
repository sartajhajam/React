/* // The children prop allows you to pass elements or components as props to other components
import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "20px",
        margin: "10px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <h2>Another Card</h2>
        <p>This card has different content!</p>
      </Card>
    </div>
  );
};

export default App;
 */
//# Lists and Keys

// When rendering lists, each item should have a unique key prop for React to track changes efficiently.

// import React from 'react';

// const ItemList = ({ items }) => {
//     return (
//         <ul>
//             {items.map(item => (
//                 <li key={item.id}>{item.name}</li>
//             ))}
//         </ul>
//     );
// };

// const App = () => {
//     const items = [
//         { id: 1, name: 'Item 1' },
//         { id: 2, name: 'Item 2' },
//         { id: 3, name: 'Item 3' },
//     ];

//     return <ItemList items={items} />;
// };

/* import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or count updated');

  }, [count]); // Runs on mount and when count changes

	useEffect(() => {
		    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
	}, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
} */

// export default App;

import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

const BuggyComponent = () => {
    throw new Error("I crashed!");
};

const App = () => {
    return (
        <ErrorBoundary>
            <BuggyComponent />
        </ErrorBoundary>
    );
};
