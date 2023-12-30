const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');
// const dateOptions = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// };

// A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator.
const date = new Date();

// The Date object has a number of methods that allow you to get the date and time in different formats.
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log(formattedDate);
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener('change', () => {
  switch (dateOptionsSelectElement.value) {
    case '1':
      currentDateParagraph.textContent = formattedDate;
      break;
    case '2':
      currentDateParagraph.textContent = `${year}-${month}-${day}`;
      break;
    case '3':
      currentDateParagraph.textContent = `${day}-${month}-${year}`;
      break;
    case '4':
      currentDateParagraph.textContent = `${month}-${day}-${year}`;
      break;
    case 'yyyy-mm-dd':
      currentDateParagraph.textContent = formattedDate
        .split('-')
        .reverse()
        .join('-');
      break;
    case 'mm-dd-yyyy-h-mm':
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
    default:
      currentDateParagraph.textContent = formattedDate;
  }
});
