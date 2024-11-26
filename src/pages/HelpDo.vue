<template>
  <div class="q-pa-md" style="max-width: 400px" ref="id1">
    <q-form @submit.prevent="onSubmit" class="q-gutter-md" style="color:violet" >
      <q-input
        v-model="name"
        label="Name"
        :dense="dense"
        style="color:black"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'Please type something']"
        class="q-mb-md"
      />

      <div class="q-mb-md">
        <div class="text">Gender:</div>
        <q-option-group
          v-model="group"
          :options="options"
          color="primary"
          inline
          @input="updateGender"
        />
      </div>

      <div v-if="isMale">
        <q-input
          v-model="mothersWifesName"
          :dense="dense"
          style="color:black"
          label="What is your mother's/wife's name?"
          lazy-rules
          :rules="[val => val && val.length > 0 || 'This field is required']"
          class="q-mb-md"
        />
      </div>

      <div v-if="isFemale">
        <q-input
          v-model="fathersHusbandsName"
          :dense="dense"
          style="color:black"
          label="What is your father's/husband's name?"
          lazy-rules
          :rules="[val => val && val.length > 0 || 'This field is required']"
          class="q-mb-md"
        />
      </div>

      <div>
        <q-btn label="Submit" type="submit" color="primary" class="full-width" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      group: '',
      mothersWifesName: null,
      fathersHusbandsName: null,
      options: [
        { label: 'Male', value: 'op1' },
        { label: 'Female', value: 'op2' },
      ],

    }
  },
  computed: {
    isMale() {
      return this.group === 'op1';
    },
    isFemale() {
      return this.group === 'op2';
    }
  },
  methods: {
    onSubmit() {
      this.$refs.id1.innerHTML = "Form Submitted!";
    },

  }
}
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
