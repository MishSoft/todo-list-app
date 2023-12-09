import { useEffect, useState } from "react";
import Image from "./components/Image";
import InputField from "./components/InputField";
import Item from "./components/Item";
import Time from "./components/Time";

function formatTime(date) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const isYesterday =
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear();

  const formatTimeWithOutSecond = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  if (isToday) {
    return "Today " + formatTimeWithOutSecond(date);
  } else if (isYesterday) {
    return "Yesterday " + formatTimeWithOutSecond(date);
  } else {
    const daysAgo = Math.floor((today - date) / (1000 * 60 * 60 * 24));
    if (daysAgo === 1) {
      return "1 day ago " + formatTimeWithOutSecond(date);
    } else {
      return daysAgo + " days ago " + formatTimeWithOutSecond(date);
    }
  }
}

function App() {
  const [noteInput, setNoteInput] = useState("");
  const [getInputData, setGetInputData] = useState([]);

  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("notesData")) || [];
    if (JSON.stringify(getInputData) !== JSON.stringify(saveData)) {
      setGetInputData(saveData);
    }
  }, [getInputData]);

  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("notesData", JSON.stringify(data));
  };

  const updateAndSaveData = (newData) => {
    setGetInputData(newData);
    saveDataToLocalStorage(newData);
  };

  const handleNoteInputValue = (e) => {
    setNoteInput(e.target.value);
  };

  const handleData = (e) => {
    e.preventDefault();
    if (noteInput.trim() !== "") {
      const date = new Date();
      const formattedTime = formatTime(date);
      const newData = [
        ...getInputData,
        {
          inputValue: noteInput,
          timeValue: formattedTime,
          isChecked: false,
        },
      ];
      updateAndSaveData(newData);
    }
    setNoteInput("");
  };

  const handleCheckboxChange = (index) => {
    const newData = [...getInputData];
    newData[index].isChecked = !newData[index].isChecked;
    updateAndSaveData(newData);
  };

  const handleRemoveItem = (index) => {
    const newData = [...getInputData];
    newData.splice(index, 1);
    updateAndSaveData(newData);
  };

  return (
    <div className="container">
      <div className="board">
        <div className="header">
          <Image />
          <Time />
        </div>
        <InputField
          noteInput={noteInput}
          onGetNoteValue={handleNoteInputValue}
          onGetData={handleData}
        />
        <div className="adedItem">
          {getInputData &&
            getInputData.map((data, i) => (
              <Item
                key={i}
                index={i}
                onCheckboxChange={handleCheckboxChange}
                onRemoveItem={handleRemoveItem}
                value={data.inputValue}
                time={data.timeValue}
                isChecked={data.isChecked}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
