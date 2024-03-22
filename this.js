// const printName = {
//   name: "Animesh Pandey",

//   printNameFun: () => {
//     console.log(this.name);
//   },
// };

// printName.printNameFun();

// const printName2 = {
//   name: "Animesh Pandey",

//   printNameFun: function () {
//     console.log(this.name);
//   },
// };

// printName.printNameFun();

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   },
// };

// obj.x();

// this inside nested arrow function...

// const obj2 = {
//   a: 20,
//   x: function () {
//     //   console.log(this);
//     const y = () => {
//       console.log(this);
//     };
//     y();
//   },
// };

// obj2.x();

// const obj2 = {
//   a: 20,
//   x: function () {
// enclosing lexical context
//     console.log(this.a);

//     const y = () => {
//       console.log(this);
//     };
//     y();
//   },
// };
// obj2.x();
