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

  let ageYear = currentYear - birthYear;
  let ageMonth = currentMonth - birthMonth;
  let ageDay = currentDay - birthDay;

  if(ageYear<0){
    ageMonth=ageMonth + 12;
    ageYear=ageYear-1;
  }

  if(ageDay<0){
    ageDay=ageDay +30 ;
    ageMonth=ageMonth-1;
  }

};
