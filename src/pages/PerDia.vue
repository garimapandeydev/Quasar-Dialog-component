<template>
  <div class="q-pa-md q-gutter-sm">
    <!-- Button to open the dialog -->
    <q-btn
      v-for="(filter, index) in backdropFilterList"
      :key="filter.label"
      color="primary"
      :label="filter.label"
      no-caps
      @click="filter.onClick(index)"
    />

    <!-- Dialog with Carousel -->
    <q-dialog v-model="dialog" :backdrop-filter="backdropFilter" persistent>
      <q-card class="q-ma-md">
        <q-carousel
          v-model="currentSlideIndex"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          height="300px"
          class="bg-white text-white shadow-1 rounded-borders"
        >
          <q-carousel-slide
            v-for="(item, index) in slides"
            :key="index"
            :name="index"
            class="column no-wrap flex-center"
          >
            <div class="q-pa-md text-center">
              <q-card-section class="q-pa-md q-gutter-md text-center">
                <q-icon :name="item.icon" size="lg" color="primary" style="margin-top:40px" />
              </q-card-section>
              <q-separator />
              <q-card-section class="text-center q-pt-none" style="color:#60008A">
                <div class="text-h6" style="color: #9400D4;">{{ item.title }}</div>
                <div class="text-subtitle2" style="color: #9400D4;">{{ item.desc }}</div>
              </q-card-section>
              <q-separator />
              <q-card-actions align="around" class="q-pa-md">
                <q-btn color="primary" label="Allow" @click="allowAction" />
                <q-btn outline color="primary" label="Decline" @click="denyAction" />
              </q-card-actions>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      backdropFilter: null,
      backdropFilterList: [
        { label: 'Task-2', onClick: this.handleFilterClick },
      ],
      currentSlideIndex: 0,
      slides: [
        { name: 'camera', icon: 'camera', title: 'Allow Camera Access?', desc: 'Do you want the app to allow using the camera to click your picture?' },
        { name: 'GPS Location', icon: 'location_on', title: 'Turn On Location?', desc: 'Do you want the app to know your location to deliver items to you?' },
        { name: 'Gallery', icon: 'photo', title: 'Allow Gallery Access?', desc: 'Do you want the app to allow using the gallery to upload media from your device?' },
        { name: 'Microphone', icon: 'mic', title: 'Allow Audio Access?', desc: 'Do you want the app to allow using the microphone to listen to you?' }
      ]
    };
  },
  methods: {
    handleFilterClick(index) {
      this.backdropFilter = `Task-${index + 1}`;
      this.currentSlideIndex = 0; // Reset to first slide
      this.dialog = true;
    },
    allowAction() {
      this.storeUserChoice(this.currentSlideIndex, 'allow');
      this.moveToNextSlide();
    },
    denyAction() {
      this.storeUserChoice(this.currentSlideIndex, 'deny');
      this.moveToNextSlide();
    },
    storeUserChoice(slideIndex, choice) {
      // Use the title of the slide as the key
      const slideTitle = this.slides[slideIndex].title;
      localStorage.setItem(slideTitle, choice);
    },
    retrieveUserChoice(slideTitle) {
      // Retrieve the user's choice based on the slide title
      return localStorage.getItem(slideTitle);
    },
    moveToNextSlide() {
      if (this.currentSlideIndex < this.slides.length - 1) {
        this.currentSlideIndex += 1;
      } else {
        this.dialog = false; // Close the dialog if at the last slide
      }
    }
  },
  created() {
    // Optionally, handle any initialization based on stored data
    this.slides.forEach((slide) => {
      const choice = this.retrieveUserChoice(slide.title);
      if (choice) {
        console.log(`Slide "${slide.title}" choice: ${choice}`);
        // You can handle pre-filling logic or other actions based on the stored choices here
      }
    });
  }
};
</script>
