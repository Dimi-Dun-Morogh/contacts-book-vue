<template>
  <div class="input">
    <label>{{label}} </label>
    <input :type="type" :placeholder="ph" v-model="content"

    @input="handleInput">

  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    ph: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    req: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      content: '',
    // eslint-disable-next-line semi
    }
  },

  methods: {
    handleInput() {
      this.$emit('input', this.content);
      console.log(this.content);
    },
  },
};
</script>
