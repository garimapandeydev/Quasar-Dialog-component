<template>

  <q-carousel color="white" v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
    control-color="primary" navigation padding arrows height="300px"
    class="bg-white text-white shadow-1 rounded-borders">
    <q-carousel-slide v-for="(item, index) in slides" :key="index" :name="item.name" class="column no-wrap flex-center">
      <div class="q-pa-md text-center">
        <!-- Icon Section  <q-card-section class="q-pa-md  q-gutter-md text-center">
          <q-icon name="location_on" size="lg" color="primary" />
        </q-card-section>-->
        <q-card-section class="q-pa-md  q-gutter-md text-center">
          <q-icon :name="item.icon" size="lg" color="primary" />
        </q-card-section>
        <!-- Title and Description -->
        <q-separator />
        <q-card-section class="text-center q-pt-none">
          <div class="text-h4" style="color: #9a0498a1;">{{ item.title }}</div>

          <div class="text-subtitle2" style="color: #9a0498a1;">{{ item.desc }}</div>

        </q-card-section>
        <q-separator />
      </div>

    </q-carousel-slide>
  </q-carousel>
  <q-card-actions align="around" class="q-pa-md">
    <q-btn color="primary" label="Allow" @click="allowAction" />
    <q-btn outline color="primary" label="Decline" @click="denyAction" />
  </q-card-actions>
</template>

<script>

export default {
  data() {
    return {
      dialog: false,
      backdropFilter: null,
      backdropFilterList: [
        { label: 'Task-2', onClick: this.handleFilterClick('Task-1') },
      ],
      slide: 'camera',
      slides: [
        { name: 'camera', icon: 'camera', title: 'Allow Camera Access?', desc: 'Do you want the app to allow using the camera to click your picture?' },
        { name: 'GPS Location', icon: 'location_on', title: 'Turn On Location?', desc: 'Do you want the app to know your location to deliver items to you?' },
        { name: 'Gallery', icon: 'photo', title: 'Allow Gallery Access?', desc: 'Do you want the app to allow using the gallery to upload media from your device?' },
        { name: 'Microphone', icon: 'mic', title: 'Allow Audio Access?', desc: 'Do you want the app to allow using the microphone to listen to you?' }
      ]
    };
  },
  methods: {
    handleFilterClick(filter) {
      return () => {
        this.backdropFilter = filter;
        this.slide='camera'
        this.dialog = true;
      };
    },
    allowAction() {
      // Handle the Allow action
      console.log('Allowed');
      this.dialog = false; // Close the dialog
    },
    denyAction() {
      // Handle the Decline action
      console.log('Declined');
      this.dialog = false; // Close the dialog
    }
  }
};

</script>
