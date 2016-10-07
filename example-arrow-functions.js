var names = ['Timi', 'Roland', 'Andrew'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowfunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Timi '));

var person = {
  name: 'Timi',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
}

person.greet();
