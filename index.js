const batteryBatches = [4, 5, 3, 4, 4, 6, 5];



// Code your solution here
let totalBatteries = batteryBatches.reduce(function getTotalAmount(
  previous_value,
  current_value
) {
  return previous_value + current_value;
},
0);
