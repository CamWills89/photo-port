import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// we have cleaned up the Nav component quite a bit
// by "lifting" the state to the parent component, App.js.
function Nav(props) {
  // initialize the category state as an array
  // we chose to use the useState hook here so that we can have
  // the option to change the categories at some point in the future
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  // the useEffect hook here will update the DOM title tab to whatever category is clicked
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
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
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {/* Whenever we map over anything in JSX, the outermost element must have
          a key attribute that's set to be something unique. This helps React
          keep track of items in the virtual DOM. */}
          {categories.map((category) => (
            <li
              //navActive class value is assigned only if Contact
              //hasn't been selected and the current category HAS been selected.
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
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
