// zmienna = pojemnik w pamięci na dane =variable

// var userName = "Jan Kowalski";
// string - łańcuch znaków
// var totalMoney = 3000.50;
// // number

// console.log(userName, totalMoney);

// const userName = "Jack";
// userName = "Matt";
// console.log(userName)

// let userName = "John";
// userName = "Rambo";
// console.log(userName)

// const userName = "Robert";
// const userSurname = "Lewandoski";
// const userAge = 35;
// const userFullName = userName + " " + userSurname + " " + userAge;
// console.log(userName, userSurname, userAge);
// const userFullName = `Imię zawodnika: ${userName}, nazwisko: ${userSurname}, wiek piłkarza: ${userAge}`;
// console.log(userFullName);

// const typeOfUserName = typeof userName;
// console.log(typeOfUserName)

// const typeOfUserAge = typeof userAge;
// console.log(typeOfUserName, typeOfUserAge);

// wartość logiczna: false, true

// const userHasMoney = true;
// const typeOfUserhasMoney = typeof userHasMoney;
// console.log(typeOfUserhasMoney)

// specjalne typy danych - undefined, null

// let userCountry = undefined;
// console.log(userCountry);
// userCountry = "Ireland";
// console.log(userCountry);

// const days = null;
// console.log(typeof days);

// Prymitywne typy danych: string, number, boolean, underfined, null

// Złożone typy danych: obiekty, tablice

const player1 = {
  userName: "Robert",
  userSuname: "Lewandowski",
  userAge: 35,
  clubs: [
    { name: "Znicz Pruszków", years: "2003 - 2005" },
    { name: "Legia Warszawa", years: "2005 - 2009" },
    { name: "BVB", years: "2009 - 15" },
    { name: "FCB", years: "20015 - 2022" },
  ],
};

const player2 = {
  userName: "Piotr",
  userSuname: "Zieliński",
  userAge: 29,
  clubs: [
    { name: "Empoli", years: "2003 - 2005" },
    { name: "Napoli", years: "2005 - 2009" },
  ],
};

// const players = [player1, player2];
// console.log(players.length);

// const wordLength = function (word) {
//   return word.length;
// };
// wordLength("Wiosna, wiosna ah to Ty!");

// const editString = (value) => {
//   // pozbywamy sie bialychznaków stringów oraz zwracamy go w postaci wielkich liter
//   // trim() oraz toUpperCase();
// console.log('Liczba znaków przed edycją równa się: ${value.length},
// po usunięciu białych znaków parametr value ma ${value.trim()}.length} znaków
// ');
// };
// editString("  lorem ipsum   ");

// const numAsString = "9.99";

// const convToNumber = (num) => {
//   return Number(num);
// };
// console.log(convToNumber(numAsString));

// const arrFunct = (arr) => {
//   // return arr.length;
//   // return arr[arr.length - 1];

//   return [arrlength]

// };
// console.log(arrFunkc([100, 200, 300]));

const nameEdition = (userName) => {
  const lowerCaseName = userName.toLowerCase();
  const result = lowerCaseName[0].toUpperCase() + lowerCaseName.slice(1);
  console.log(result);
};

nameEdition("rAdOsŁaW");
nameEdition("maCieJ");
nameEdition("KrZysZtof");
nameEdition("JaroSłaW");
