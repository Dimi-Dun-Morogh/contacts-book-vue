<template>
  <div>
<ContactInfoHeader/>
<ContactDetails />
  </div>
</template>
<script>
import ContactInfoHeader from '@/components/ContactInfoHeader.vue';
import ContactDetails from '@/components/ContactDetails.vue';

export default {
  name: 'ContactInfo',
  components: {
    ContactInfoHeader,
    ContactDetails,
  },
  methods: {

  },
};
</script>
