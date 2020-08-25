<template>
  <div>
<Button @click.native="backToMain" class="InfoHeaderBtn">
  <template v-slot:text>
    <span class="icon-chevron-left"></span><span>Back</span>
  </template>
   </Button>
   <span>{{selectedContact.name}}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Button from '@/components/Button.vue';

export default {
  name: 'ContactInfoHeader',
  components: {
    Button,
  },
  computed: {
    ...mapGetters('contactsStore', ['selectedContact']),
  },
  methods: {
    backToMain() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>
<style scoped>
.InfoHeaderBtn {
  position: absolute;
}
.InfoHeaderBtn >>> button {
  width: 60px;
height: 30px;
display: flex;
align-items: center;
border-radius: 5px;
}
</style>
