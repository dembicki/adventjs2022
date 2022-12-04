const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD

function countHours(year: number, holidays: string[]) {
  return holidays.reduce((a, c) => {
    const x = new Date(Date.parse(c + "/" + year)).getDay();
    if (x > 0 && x < 6) return a + 2;
    return a;
  }, 0);
}

console.log(countHours(year, holidays));
