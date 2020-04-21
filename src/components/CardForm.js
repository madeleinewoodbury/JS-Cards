import React from 'react';

const CardForm = ({ text, setText, answer }) => {
  return (
    <form className="CardForm">
      <div className="form-group">
        <textarea
          placeholder="Write your answer here..."
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={answer}
        ></textarea>
      </div>
    </form>
  );
};

export default CardForm;
