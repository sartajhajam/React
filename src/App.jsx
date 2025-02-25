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

import React from 'react';

const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

const App = () => {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    return <ItemList items={items} />;
};

export default App;