<template>
  <div class="contactItem">
    <span class="initials">{{initials}}</span>
    <span>{{contact.name}}</span>
    <div class="buttonsWrap">
         <Button @click.native="showModal" class="btnEdit">
        <template v-slot:text>
          <span class="icon-pencil"></span>
        </template>
      </Button>
      <Button @click.native="showModal" class="btnDelete">
        <template v-slot:text>
          <span class="icon-close"></span>
        </template>
      </Button>
    </div>

    <Modal ref="modal">
      <template v-slot:title>
        <h3 class="modal-title">Delete Contact</h3>
      </template>
      <template v-slot:body>Are you sure to delete {{contact.name}}?</template>
      <template v-slot:footer>
        <Button class="modal-footer__button" @click.native="onClick">
          <template v-slot:text>DELETE</template>
        </Button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Button from './Button.vue';
import Modal from './Modal.vue';

export default {
  name: 'ContactItem',
  components: {
    Button,
    Modal,
  },
  props: {
    contact: {
      type: Object,
    },
  },
  computed: {
    initials() {
      const nameArr = this.contact.name.split(' ');
      if (nameArr.length === 1) return nameArr[0][0];
      return nameArr[0][0] + nameArr[1][0];
    },
  },
  methods: {
    showModal() {
      this.$refs.modal.show = true;
    },
    onClick() {
      console.log('emitting');
      this.$emit('onDelete', this.contact.id);
    },
  },
};
</script>

<style scoped>
.contactItem {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 2px outset black;
  margin-top: 3px;
}
.contactItem:hover {
     box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.12);
}
span {
  display: inline-flex;
  align-items: center;
}
.initials {
  height: 30px;
  width: 30px;
  background-color: #0971c7;
  color: #fff;
  font-weight: bold;

  padding-left: 5px;
}
.buttonsWrap {
  display: flex;
}
.btnDelete >>> button {
  width: 30px;
  height: 30px;
  background-color: #c70909;
}
 .btnEdit >>> button {
    width: 30px;
  height: 30px;
  background-color: #09c71e;
 }
.modal-footer__button >>> button {
  background-color: #c70909;
  font-weight: bold;
}
</style>
