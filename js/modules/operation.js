export default class initOperation {
  constructor(operation) {
    this.openClass = "open";
    this.operation = document.querySelector(operation);
  }

  operationData() {
    this.weekDays = this.operation.dataset.week.split(",").map(Number); //.map(Number) transforma em número
    this.weekHours = this.operation.dataset.hour.split(",").map(Number);
  }

  dataNow() {
    this.dateNow = new Date();
    this.today = this.dateNow.getDay();
    this.timeNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const operationDay = this.weekDays.indexOf(this.today) !== -1;
    const operationHour =
      this.timeNow >= this.weekHours[0] && this.timeNow < this.weekHours[1];

    return operationDay && operationHour;
  }

  open() {
    if (this.isOpen()) {
      this.operation.classList.add(this.openClass);
    }
  }

  init() {
    if (this.operation) {
      this.operationData();
      this.dataNow();
      this.open();
    }
    return this;
  }
}
