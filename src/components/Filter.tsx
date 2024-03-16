import { Dispatch, SetStateAction } from "react";

interface FilterProps {
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
}

const Filter = ({ setSelectedCategory }: FilterProps) => {
  const categories = [
    "Art",
    "Science",
    "Politics",
    "Religion",
    "Sports",
    "Other",
  ];

  return (
    <div>
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
    </div>
  );
};

export default Filter;
