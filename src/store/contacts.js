import mutations from './mutations';

const { CONTACTS_LIST } = mutations;

const Contacts = {
  namespaced: true,
  state: {
    contactsList: {
      'id17422525bd9': {
        name: 'Marie Smith',
        id: 'id17422525bd9',
      },
      'id17421525bd1': {
        name: 'Kevin Smith',
        id: 'id17421525bd1',
      },
    },
  },
  getters: {
    contactsList: ({ contactsList }) => contactsList,
  },
  mutations: {
    [CONTACTS_LIST](state, value) {
      state.contactsList = value;
    },
  },
  actions: {
    deleteContact({ commit, getters }, value) {
      const { contactsList } = getters;
      const contactsListCopy = { ...contactsList };
      delete contactsListCopy[value];
      commit(CONTACTS_LIST, contactsListCopy);
      console.log(contactsListCopy, value);
    },
    addContact({ commit, getters }, value) {
      const { contactsList } = getters;
      const id = `id${(+new Date()).toString(16)}`;
      const contactsListCopy = { ...contactsList, id };
      contactsListCopy[id] = value;
      commit(CONTACTS_LIST, contactsListCopy);
    },
  },
};

export default Contacts;
