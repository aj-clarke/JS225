// function makeList() {
//   let toDoCollection = [];

//   return function toDoList(toDo) {
//     if (toDo === undefined && toDoCollection.length === 0) {
//       return console.log('The list is empty');
//     }

//     if (toDo === undefined && toDoCollection.length !== 0) {
//       toDoCollection.forEach(item => {
//         console.log(item);
//       });
//       return;
//     }

//     if (!toDoCollection.includes(toDo)) {
//       toDoCollection.push(toDo);
//       console.log(toDo + ' added!');
//       return;
//     }

//     if (toDoCollection.includes(toDo)) {
//       let idx = toDoCollection.indexOf(toDo);
//       toDoCollection.splice(idx, 1);
//       console.log(toDo + ' removed!');
//       return;
//     }
//   }
// }

function makeList() {
  let toDoCollection = [];
  return {

    add(item) {
      let idx = this.getItemIndex(item);
      if (idx === -1) {
        toDoCollection.push(item);
        console.log(item + ' added!');
      }
    },

    remove(item) {
      let idx = this.getItemIndex(item);
      if (idx !== -1) {
        toDoCollection.splice(idx, 1);
        console.log(item + ' removed!');
      }
    },

    list() {
      if (toDoCollection.length === 0) {
        return console.log('The list is empty!')
      } else {
        toDoCollection.forEach(item => {
          console.log(item);
        });
      }
    },

    getItemIndex(item) {
      return toDoCollection.indexOf(item);
    },
  }
}

let list = makeList();
list.list();
// The list is empty!
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn

console.log(list.toDoCollection);