const dayArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const ageCalculate = () => {
  const today = new Date("2024-01-01");
  const birthday = new Date(document.getElementById("birthday").value);

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const birthYear = birthday.getFullYear();
  const birthMonth = birthday.getMonth() + 1;
  const birthDay = birthday.getDate();

  if (
    birthYear > currentYear ||
    (birthYear === currentYear && birthMonth > currentMonth) ||
    (birthMonth === currentMonth && birthDay > currentDay)
  ) {
    alert("not born yet");
    return;
  }

  if ((currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400) {
    dayArray[1] = 29;
  }

  let ageYear = currentYear - birthYear;
  let ageMonth = currentMonth - birthMonth;
  let ageDay = currentDay - birthDay;

  if (ageDay < 0) {
    ageDay = dayArray[birthMonth - 1] - birthDay + currentDay;
    ageMonth = ageMonth - 1;
  }

  if (ageMonth < 0) {
    ageMonth = ageMonth + 12;
    ageYear = ageYear - 1;
  }

  document.getElementById("years").innerText = ageYear;
  document.getElementById("months").innerText = ageMonth;
  document.getElementById("days").innerText = ageDay;
};
