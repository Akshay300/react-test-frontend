import React, { useState } from "react";

//this component will create each employee node recursively.
const OrgChartNode = ({ node }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li>
      <div className="card-container">
        <div className="div-inner">
          <img
            className="custom-edit-icon"
            src="https://tse3.mm.bing.net/th?id=OIP.3O9nGJn8VFlbKi1fImaEzQHaHa&pid=Api&P=0&h=220"
            alt="edit-icon"
          />
          <img
            className="custom-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD1JOi0y2tw00G2lzDwCVmCwRLuN6n4cbq-OQ7MwpZS0VSx6SuFFHDerVul1BZRKiTiBg&usqp=CAU"
            alt="emp-image"
          />
          <h3 className="h3-inner">{node.name}</h3>
          <p className="p-inner">Email: {node.email}</p>
          <p className="p-inner">Designation: {node.designation}</p>
          {node.subordinates && node.subordinates.length > 0 && (
            <button onClick={toggleDropdown}>
              {isDropdownOpen ? "Hide Subordinates" : "Show Subordinates"}
            </button>
          )}
        </div>
        {isDropdownOpen &&
          node.subordinates &&
          node.subordinates.length > 0 && (
            <ul>
              {node.subordinates.map((subordinate) => (
                <OrgChartNode key={subordinate.email} node={subordinate} />
              ))}
            </ul>
          )}
      </div>
    </li>
  );
};

export default OrgChartNode;
