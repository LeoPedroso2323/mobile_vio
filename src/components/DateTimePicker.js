import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CustomDateTimePicker = ({ type, buttonTitle, dateKey, setValue }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    setValue((prevState) => ({ ...prevState, [dateKey]: date }));
    hideDatePicker();
  };

  return (
    <View>
      <Button title={buttonTitle} onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={type}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {selectedDate && (
        <Text>
          {type === "date"
            ? selectedDate.toLocaleDateString()
            : selectedDate.toLocaleTimeString()}
        </Text>
      )}
    </View>
  );
};

export default CustomDateTimePicker;
