import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  const handleClick = (name) => {
    console.log(`${name} clicked`);
  };

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>Contact</span>
          </li>
          {/* Whenever we map over anything in JSX, the outermost element must have
          a key attribute that's set to be something unique. This helps React
          keep track of items in the virtual DOM. */}
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => handleClick(category.name)}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
