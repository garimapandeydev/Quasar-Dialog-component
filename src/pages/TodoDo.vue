<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      v-for="filter in backdropFilterList"
      :key="filter.label"
      color="primary"
      :label="filter.label"
      no-caps
      @click="filter.onClick"
    />

    <q-dialog v-model="dialog" :backdrop-filter="backdropFilter" persistent>
      <q-card>
        <!-- First Section: Location Icon -->
        <q-card-section class="q-pa-md  q-gutter-md text-center">
          <q-icon name="location_on" size="lg" color="primary" />
        </q-card-section>

          <q-separator />
        <!-- Second Section: Greeting Text -->
      <q-card-section class="text-center q-pt-none">
          <div class="text-h6" style="color: #9a0498a1;">Allow GPS?</div>
          <div class="text-subtitle2" style="color: #9a0498a1;">My App wants GPS access</div>
        </q-card-section>

        <q-separator />
        <!-- Third Section: Allow and Deny Buttons -->
        <q-card-actions align="around" class="q-pt-none " style="margin-top: 8px;">
          <q-btn color="primary" label="Allow" />
          <q-btn outline style="color: #9a0498a1;" label="Deny" @click="denyAction" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
  <PerDia />
</template>

<script>

import PerDia from 'src/pages/PerDia.vue';
export default {
  components: { PerDia },
  data() {
    return {
      dialog: false,
      backdropFilter: null,
      backdropFilterList: [
        { label: 'Click here', onClick: this.handleFilterClick('Task-1') },
      ],
    };
  },
  methods: {
    handleFilterClick(filter) {
      return () => {
        this.backdropFilter = filter;
        this.dialog = true;
      };
    },
    denyAction() {
      // Close the dialog
      this.dialog = false;
    }
  },
};
</script>
