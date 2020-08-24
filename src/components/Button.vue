<template>
  <div>
    <button>
      <slot name="text"> btn</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',

};
</script>

<style scoped>
button {
  cursor: pointer;
  background-color: #0971c7;
  color: #fff;
  border: none;
  text-align: center;
}
</style>
