import React, { useState, useEffect } from "react";
import "./Matrix.css"; // Importing the CSS file for styling

const Matrix = () => {
  // State to keep track of the clicked boxes in their order
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [lastBoxClicked, setLastBoxClicked] = useState(false);
  const [colors, setColors] = useState(new Array(9).map(() => "white"));

  // Function to handle box click
  const handleBoxClick = (index) => {
    // If the box is not already clicked and the last box hasn't been clicked yet
    if (!clickedBoxes.includes(index) && !lastBoxClicked) {
      setClickedBoxes([...clickedBoxes, index]);

      setColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[index] = "green";
        return newColors;
      });

      // check if the current click is the lastbox
      if (clickedBoxes.length === 8) {
        setLastBoxClicked(true);
      }
    }
  };

  useEffect(() => {
    if (lastBoxClicked) {
      clickedBoxes.forEach((index, i) => {
        setTimeout(() => {
          setColors((prevColors) => {
            const newColors = [...prevColors];
            newColors[index] = "orange";
            return newColors;
          });
        }, i * 200);
      });
    }
  }, [lastBoxClicked, clickedBoxes]);

  return (
    <div className="matrix-container">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="matrix-box"
          style={{ backgroundColor: colors[index] }}
          onClick={() => handleBoxClick(index)}
        >
          {/* Empty div for each box */}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
