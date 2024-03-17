import Button from "../atoms/Button";
import Input from "../atoms/Input";
import LinkButton from "../atoms/LinkButton";
import useInput from "../../hooks/useInput";

const CommentForm = ({ create, auth, className }) => {
  const [content, onContentChange] = useInput("");

  return (
    <div className={`${className} md:max-w-3xl`}>
      <p className="font-bold text-blue-500">Beri Komentar</p>
      {auth ? (
        <form className="mt-4 space-y-4">
          <Input
            type="text"
            value={content}
            onChange={onContentChange}
            placeholder="Body"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            onClick={() => auth && create(content)}
            className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Kirim
          </Button>
        </form>
    ) : (
      <p className="mt-4">
        <LinkButton to="/signIn" className="text-blue-500 underline">
          Login
        </LinkButton>
        {" "}
        untuk memberi komentar
      </p>
    )}
    </div>
  );
};

export default CommentForm;
