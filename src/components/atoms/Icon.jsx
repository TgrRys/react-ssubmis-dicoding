import { FaPlus } from "react-icons/fa";
import {
 BiLike, BiDislike, BiSolidLike, BiSolidDislike,
} from 'react-icons/bi';

const Icon = ({ type, className }) => {
  switch (type) {
    case "plus":
      return <FaPlus className={className} />;
    case "like":
      return <BiLike className={className} />;
    case "dislike":
      return <BiDislike className={className} />;
    case "solidLike":
      return <BiSolidLike className={className} />;
    case "solidDislike":
      return <BiSolidDislike className={className} />;
    default:
      return null;
  }
};

export default Icon;
