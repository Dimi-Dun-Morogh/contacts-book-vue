<template>
  <div>
    <div class="detailsItemNew">
      <span>Add new Field</span>
      <Button class="btnPlus" @click.native="addNewField">
        <template v-slot:text>
          <span class="icon-plus"></span>
        </template>
      </Button>
    </div>

    <ContactDetailsItem
      v-for="(details,index) in Object.entries(selectedContact)"
      :key="index"
      :details="details"
    />
<ContactFieldEdit />
    <div class="timeLapse">
          <span>One Change Back</span>
      <Button class="btnPlus" @click.native="addNewField">
        <template v-slot:text>
          <span class="icon-undo1"></span>
        </template>
      </Button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ContactDetailsItem from './ContactDetailsItem.vue';
import Button from './Button.vue';
import ContactFieldEdit from './ContactFieldEdit.vue';

export default {
  name: 'ContactDetails',
  components: {
    ContactDetailsItem,
    Button,
    ContactFieldEdit,
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters('contactsStore', ['selectedContact', 'viewModalFieldEdit']),
  },
  methods: {
    ...mapActions('contactsStore', ['updateContact', 'setViewModalFieldEdit', 'setCurrentFieldToEdit']),
    addNewField() {
      this.setCurrentFieldToEdit([]); // clear inputs if it had data from editing existing fields
      this.setViewModalFieldEdit(!this.viewModalFieldEdit);
    },
  },
};
</script>

<style scoped>
.detailsItemNew {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 2px outset black;
  margin-top: 3px;
  height: 30px;
  padding: 5px;
  justify-content: center;
}
.btnPlus >>> button {
  width: 30px;
  height: 30px;
  background-color: #0971c7;
  margin-left: 5px;
}

</style>
