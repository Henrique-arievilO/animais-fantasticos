const openClass = "open";

export default function initOperation() {
  const operation = document.querySelector("[data-week]");
  if (operation) {
    const weekDays = operation.dataset.week.split(",").map(Number); //.map(Number) transforma em número
    const weekHours = operation.dataset.hour.split(",").map(Number);
    const dateNow = new Date();
    const today = dateNow.getDay();
    const timeNow = dateNow.getHours();
    const operationDay = weekDays.indexOf(today) !== -1;
    const operationHour = timeNow >= weekHours[0] && timeNow < weekHours[1];
    if (operationDay && operationHour) {
      operation.classList.add(openClass);
    }
  }
}
