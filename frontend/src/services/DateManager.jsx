// DateManager replace Moment more lighter ^^

// Fonction permettant de générer la date actuelle pour mysql
export const getDate = () => {
  const d = new Date();
  const myDate = `${d.getFullYear()}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
  return myDate;
};

// Fonction permettant de transformer le retour de date MySql ex:
// 2022-09-07T08:50:56.000Z
//
// en 07-09-2022 08h50m56s
export const transDate = (date) => {
  const myFullDate = date.split("T");
  const myDate = myFullDate[0].split("-");
  const years = myDate[0];
  const month = myDate[1];
  const day = myDate[2];
  // const sec = myHours[2];
  // return `${day}-${month}-${years} ${hours + 2}h${min}m${sec}s`;
  return `${day}-${month}-${years}`;
};
