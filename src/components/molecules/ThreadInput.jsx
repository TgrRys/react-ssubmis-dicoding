import Input from "../atoms/Input";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";

const ThreadInput = ({ create }) => {
  const [title, onTitleChange] = useInput("");
  const [category, onCategoryChange] = useInput("");
  const [body, onBodyChange] = useInput("");
  return (
    <form className="space-y-4">
      <Input
        type="text"
        value={title}
        onChange={onTitleChange}
        placeholder="Title Thread"
        required
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <Input
        type="text"
        value={category}
        onChange={onCategoryChange}
        placeholder="Category"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <textarea
        value={body}
        onChange={onBodyChange}
        rows="10"
        placeholder="Body"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <Button
        onClick={() => create({ title, category, body })}
        className="w-full bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Create Thread
      </Button>
    </form>
  );
};

export default ThreadInput;
