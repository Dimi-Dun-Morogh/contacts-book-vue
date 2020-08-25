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
          <span>One Step Back ({{avalaibleSteps}})</span>
      <Button class="btnPlus" @click.native="timeLapseJump"
      :disabled="!avalaibleSteps">
        <template v-slot:text>
          <span class="icon-undo1"></span>
        </template>
      </Button>
      <span></span>
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
    ...mapGetters('contactsStore', ['selectedContact', 'viewModalFieldEdit', 'timeLapse']),
    avalaibleSteps() {
      return this.timeLapse.length;
    },
  },
  methods: {
    ...mapActions('contactsStore', ['updateContact', 'setViewModalFieldEdit', 'setCurrentFieldToEdit', 'jumpBack']),
    addNewField() {
      this.setCurrentFieldToEdit([]); // clear inputs if it had data from editing existing fields
      this.setViewModalFieldEdit(!this.viewModalFieldEdit);
    },
    timeLapseJump() {
      this.jumpBack();
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
  margin-top: 15px;
}
.btnPlus >>> button {
  width: 30px;
  height: 30px;
  background-color: #0971c7;
  margin-left: 5px;
}
.timeLapse {
  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 5px;
}
</style>
