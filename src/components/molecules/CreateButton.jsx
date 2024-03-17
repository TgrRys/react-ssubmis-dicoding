import LinkButton from "../atoms/LinkButton";
import Icon from "../atoms/Icon";

const CreateButton = () => (
  <LinkButton to="/thread" className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    <Icon type="plus" />
  </LinkButton>
  );

export default CreateButton;
