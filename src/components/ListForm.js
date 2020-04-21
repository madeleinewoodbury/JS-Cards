import React, { useContext } from 'react';
import CardContext from '../context/card/cardContext';

const ListForm = () => {
  const cardContext = useContext(CardContext);
  const { setList, lists, list } = cardContext;

  return (
    <form className="form">
      <div className="form-group">
        <select
          name="list"
          value={list}
          onChange={(e) => setList(e.target.value)}
        >
          {lists.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default ListForm;
