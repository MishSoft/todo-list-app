/* eslint-disable react/prop-types */
import plusVector from "/public/assets/Vector.png";

function InputField({ noteInput, onGetNoteValue, onGetData }) {
  return (
    <form onSubmit={onGetData} className="input-field-section">
      <div className="input-container">
        <input
          onChange={onGetNoteValue}
          className="note-field"
          value={noteInput}
          placeholder="Note"
        />
      </div>
      <button type="submit" className="add-item-button">
        <img src={plusVector} />
      </button>
    </form>
  );
}

export default InputField;
