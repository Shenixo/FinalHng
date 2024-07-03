document.addEventListener("DOMContentLoaded", () => {
  function loadTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = date.getSeconds();
    const day = date.getDate();

    return ` ${hours}: ${minutes}: ${seconds}`;
  }
  function getDayOfWeek() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date();
    // return days[date.getDay()];
    const day = date.getDay();
    const dayy = days[2];
    return dayy;
  }
  const day = getDayOfWeek();
  console.log(day);

  setInterval(() => {
    document.querySelector(".day").textContent = `Day: ${day}`;
    document.querySelector(".time").innerHTML = `Time: ${loadTime()}`;
  }, 1000);
});
