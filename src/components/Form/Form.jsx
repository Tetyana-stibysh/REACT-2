import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const { value } = e.target.search;
    if (!value) {
      alert('Fill form !!!');
      return;
    }
    onSubmit(e.target.search.value);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />
    </form>
  );
};

export default Form;
