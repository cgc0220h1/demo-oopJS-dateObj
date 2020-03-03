let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.date = [this.day, this.month, this.year];
    this.getDay = function () {
        return this.day;
    };
    this.getMonth = function () {
        return this.month;
    };
    this.getYear = function () {
        return this.year;
    };
    this.getDate = function () {
        return this.date;
    };
    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function (year) {
        this.year = year;
    };
    this.setDate = function () {
        this.date = [this.day.toString(), this.month.toString(), this.year.toString()];
    }
};

let birthday = new MyDate(20, 4, 1992);
let dayOfbirth = birthday.getDay();
let monthOfbirth = birthday.getMonth();
let yearOfbirth = birthday.getYear();
alert("Ngày sinh nhật của tui là: " + dayOfbirth + "/" + monthOfbirth + "/" + yearOfbirth);

let graduate = new MyDate(20, 4, 2010);
graduate.setDay(22);
graduate.setMonth(9);
graduate.setYear(2013);
alert("Đây là ngày tốt nghiệp của tui " + graduate.getDay() + "/" + graduate.getMonth() + "/" + graduate.getYear());

let married = new MyDate();
let status = confirm("Bạn có muốn làm bạn gái của mình không ?");
if (status) {
    married.setDay(prompt("Nhập ngày sinh của bạn"));
    married.setMonth(prompt("Nhập tháng sinh của bạn"));
    married.setYear(prompt("Nhập năm sinh của bạn"));
    married.setDate();
    alert("Ngày bạn vừa nhập là: " + married.getDate().join("/"));
    alert("Ai dà, chúng mình hợp nhau đó, mình có thể mời cậu một tách cafe trứng được không ^^");
}





