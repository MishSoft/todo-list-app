/* eslint-disable react/prop-types */
import removeIcon from "/public/assets/akar-icons_trash-can.svg";
import circleIcon from "/public/assets/icons_circle.png";

function Item({
  index,
  value,
  time,
  onRemoveItem,
  onCheckboxChange,
  isChecked,
}) {
  const handleCheckBoxChange = () => {
    onCheckboxChange(index);
  };

  return (
    <div className="item">
      <div>
        <h2>{value}</h2>
        <span>{time}</span>
      </div>
      <div className="item-controller">
        <div className="checkbox-container">
          <input
            onChange={handleCheckBoxChange}
            className="check-field"
            type="checkbox"
            checked={isChecked}
          />
          {<img src={isChecked ? circleIcon : null} />}
        </div>
        <div onClick={() => onRemoveItem(index)} className="remove-item">
          <img src={removeIcon} />
        </div>
      </div>
    </div>
  );
}

export default Item;
