export const calcLocalTime = (timeZone) => {
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
  const greenwichTime = new Date(new Date().setHours(new Date().getHours() + new Date().getTimezoneOffset()/60));
  const localTime = new Date (greenwichTime.setHours(greenwichTime.getHours() + timeZone / 3600));
  const hours = localTime.getHours();
  const minutes = localTime.getMinutes();
  const month = months[localTime.getMonth()];
  const date = localTime.getDate();
  const time = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}, ${month} ${date}`
  return time
}
