import { BsTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.wrap}>
      <div className={css.container}>
        <p>
          <FaUser size="18" />
          {name}
        </p>
        <p>
          <BsTelephoneFill size="18" />
          {number}
        </p>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
