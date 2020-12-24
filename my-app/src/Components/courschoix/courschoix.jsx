import { useState } from "react";
import { NavLink } from "react-router-dom";

const CoursChoix = () => {
  const categories = [
    "Disciplines",
    "Dessin",
    "Sculpture",
    "Peinture",
    "Gravure",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Disciplines");

  const activedCategory = (art) => {
    setSelectedCategory(art);
  };
  return (
    <ul className="flex justify-center">
      {categories.map((category, index) => {
        let active = "";
        if (category === selectedCategory) {
          active = "text-blue-700";
        }
        return (
          <li
            key={index}
            className={`p-2 font-bold text-lg cursor-default ${active}`}
            onClick={() => activedCategory(category)}
          >
            <NavLink to={`/expos/${category.toLocaleLowerCase()}`} activeClassName="text-blue-700">
              {category}
            </NavLink>	
          </li>
        );
      })}
    </ul>
  );
};

export default CoursChoix;
