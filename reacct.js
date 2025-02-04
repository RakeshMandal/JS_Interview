/* Question
[
    1, 0, 1, 0
    1, 0, 1, 0
    1, 0, 1, 0
    1, 0, 1, 0
]
in react we have to assign the background color of 1 is blue and 0 is red with it's values
*/
// Solution

import React from 'react';
export default function App() {
  const array = [
    [1, 0, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 1, 0],
  ];

  return (
    <div>
      {array.map((data, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '30px',
                backgroundColor: item === 1 ? 'green' : 'red',
                border: '1px solid',
                color: '#fff',
                fontWeight: '600',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

