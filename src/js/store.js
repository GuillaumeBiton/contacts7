
import { createStore } from 'framework7/lite';

const groupList = function(list, propertyToIndex, filter) {
  var data = []
  var group = null
  filter = filter || function (item) { return item.charAt(0).toUpperCase() }
  list.forEach(function (item) {
    if (filter(item[propertyToIndex]) !== group) {
      group = filter(item[propertyToIndex])
      data.push({ groupTitle: filter(item[propertyToIndex]) })
    }
    data.push(item)
  })
  return data
}

const store = createStore({
  state: {
    contacts: [
      {
        id: '1',
        title: "Aaron ",
      },
      {
        id: '2',
        title: "Abbie",
      },
      {
        id: '3',
        title: "Adam",
      },
      { 
        id: '4',
        title: "Adele",
      },
      {
        id: '5',
        title: "Agatha",
      },
      {
        id: '6',
        title: "Agnes",
      },
      {
        id: '7',
        title: "Albert",
      },
      {
        id: '8',
        title: "Alexander"
      },
      {
        id: '9',
        title: 'Benjamin',
      },
      {
        id: '10',
        title: 'Blake',
      },
      {
        id: '11',
        title: 'Bobby',
      },
      {
        id: '12',
        title: 'Caleb',
      },
      {
        id: '13',
        title: 'Callum',
      },
      {
        id: '14',
        title: 'Cameron',
      },
      {
        id: '15',
        title: 'Charles',
      },
      {
        id: '16',
        title: 'Charlie',
      },
      {
        id: '17',
        title: 'Connor',
      },
      {
        id: '18',
        title: 'Daniel',
      },
      {
        id: '19',
        title: 'David',
      },
      {
        id: '20',
        title: 'Dexter',
      },
      {
        id: '21',
        title: 'Dylan',
      },
      {
        id: '22',
        title: 'Edward',
      },
      {
        id: '23',
        title: 'Elijah',
      },
      {
        id: '24',
        title: 'Elliot',
      },
      {
        id: '25',
        title: 'Elliott',
      },
      {
        id: '26',
        title: 'Ethan',
      },
      {
        id: '27',
        title: 'Evan',
      },
    ]
  },
  getters: {
    contacts({ state }) {
      return groupList(state.contacts, 'title');
    }
  },
  actions: {
    addContact({ state }, contact) {
      state.contacts = [...state.contacts, contact];
    },
  },
})
export default store;
