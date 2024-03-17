import Select from "../atoms/Select";

const FilterCategory = ({ categories, onChange }) => (
  <label
    htmlFor="category"
    className="block my-4 text-sm font-medium text-gray-700"
  >
    Filter category by :
    <Select
      id="category"
      onChange={onChange}
      options={categories}
      className="w-full my-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      data-testid="filter-category-select"
    />
  </label>
);

export default FilterCategory;
