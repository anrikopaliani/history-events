import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface FilterProps {
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
}

const Filter = ({ setSelectedCategory }: FilterProps) => {
  const [theme, setTheme] = useState("dark-theme");
  const categories = [
    "Art",
    "Science",
    "Politics",
    "Religion",
    "Sports",
    "Other",
  ];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <div className="filter">
      <div className="filter__select">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="theme-toggler">
        <input
          type="checkbox"
          id="theme-toggler__checkbox"
          className="theme-toggler__checkbox"
        />
        <label
          htmlFor="theme-toggler__checkbox"
          className="theme-toggler__label"
          onClick={changeTheme}
        >
          Toggle
        </label>
      </div>
    </div>
  );
};

export default Filter;
