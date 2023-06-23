const ageCalculate = () => {
  const today = new Date();
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
    return
  }


};
