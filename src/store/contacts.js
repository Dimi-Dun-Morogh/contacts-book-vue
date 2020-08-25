import mutations from './mutations';

const {
  CONTACTS_LIST,
  SELECTED_CONTACT,
  VIEW_MODAL_FIELD_EDIT,
  CURRENT_FIELD_TO_EDIT,
  TIME_LAPSE,
} = mutations;

const Contacts = {
  namespaced: true,
  state: {
    contactsList: {
      id17422525bd9: {
        name: 'Marie Smith',
        id: 'id17422525bd9',
        email: 'postman@smith.com',
        phone: '+777999333111',
      },
      id17421525bd1: {
        name: 'Kevin Smith',
        id: 'id17421525bd1',
        email: 'postman@smith.com',
        phone: '+777999333111',
      },
    },
    selectedContact: {},
    viewModalFieldEdit: false,
    currentFieldToEdit: [],
    timeLapse: [],
  },
  getters: {
    contactsList: ({ contactsList }) => contactsList,
    selectedContact: ({ selectedContact }) => selectedContact,
    viewModalFieldEdit: ({ viewModalFieldEdit }) => viewModalFieldEdit,
    currentFieldToEdit: ({ currentFieldToEdit }) => currentFieldToEdit,
    timeLapse: ({ timeLapse }) => timeLapse,
  },
  mutations: {
    [CONTACTS_LIST](state, value) {
      state.contactsList = value;
    },
    [SELECTED_CONTACT](state, value) {
      state.selectedContact = value;
    },
    [VIEW_MODAL_FIELD_EDIT](state, value) {
      state.viewModalFieldEdit = value;
    },
    [CURRENT_FIELD_TO_EDIT](state, value) {
      state.currentFieldToEdit = value;
    },
    [TIME_LAPSE](state, value) {
      state.timeLapse = value;
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
      const contactsListCopy = { ...contactsList };
      contactsListCopy[id] = { ...value, id };
      commit(CONTACTS_LIST, contactsListCopy);
    },
    updateContact({ commit, getters }, value) {
      const { contactsList } = getters;
      const contactsListCopy = { ...contactsList };
      contactsListCopy[value.id] = value;
      commit(CONTACTS_LIST, contactsListCopy);
      commit(SELECTED_CONTACT, value);
    },
    selectContact({ commit }, value) {
      commit(SELECTED_CONTACT, value);
    },
    setViewModalFieldEdit({ commit }, value) {
      commit(VIEW_MODAL_FIELD_EDIT, value);
    },
    setCurrentFieldToEdit({ commit }, value) {
      commit(CURRENT_FIELD_TO_EDIT, value);
    },
    deleteField({ commit, getters }, value) {
      const { selectedContact, contactsList } = getters;
      const copySelectedContact = { ...selectedContact };
      const copyContactsList = { ...contactsList };
      const { id } = copySelectedContact;
      delete copySelectedContact[value];
      copyContactsList[id] = copySelectedContact;
      commit(CONTACTS_LIST, copyContactsList);
      commit(SELECTED_CONTACT, copySelectedContact);
    },
    setTimeLapse({ commit }, value) {
      commit(TIME_LAPSE, value);
    },
  },
};

export default Contacts;
