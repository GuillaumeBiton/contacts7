
import { createStore } from 'framework7/lite';

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
    ]
  },
  getters: {
    contacts({ state }) {
      return state.contacts;
    }
  },
  actions: {
    addContact({ state }, contact) {
      state.contacts = [...state.contacts, contact];
    },
  },
})
export default store;
