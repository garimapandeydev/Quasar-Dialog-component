<template>
  <q-page class="q-pa-md">
    <!-- Skills Card -->
    <q-card class="my-card" flat bordered @click="openSkillsDialog">
      <q-card-section>
        <div class="text-h6" style="color:violet">Skills</div>
      </q-card-section>
    </q-card>

    <!-- Skills Dialog Popup -->
    <q-dialog v-model="skillsDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6" style="color:violet">Skills</div>
        </q-card-section>
        <q-card-section>
          <q-list>
            <!-- Example data, replace with your actual content -->
            <q-item>HTML</q-item>
            <q-item>CSS</q-item>
            <q-item>JavaScript</q-item>
            <q-item>Vue.js</q-item>
            <q-item>Cordova</q-item>
            <q-item>Quasar</q-item>
            <q-item>TypeScript</q-item>
          </q-list>
        </q-card-section>
        <q-card-actions>
          <q-btn flat label="Close" @click="skillsDialog = false" color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Qualifications Card -->
    <q-card class="my-card" flat bordered @click="openQualificationsDialog">
      <q-card-section>
        <div class="text-h6" style="color:violet">Qualifications</div>
      </q-card-section>
    </q-card>

    <!-- Qualifications Dialog Popup -->
    <q-dialog v-model="qualificationsDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6" style="color:violet">Qualifications</div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">BTech CSE</div>
        </q-card-section>
        <q-card-actions>
          <q-btn flat label="Close" @click="qualificationsDialog = false" color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Extra-Curricular Activities Card -->
    <q-card class="my-card" flat bordered @click="openActivitiesDialog">
      <q-card-section>
        <div class="text-h6" style="color:violet">Extra-Curricular Activities</div>
      </q-card-section>
    </q-card>

    <!-- Extra-Curricular Activities Dialog Popup -->
    <q-dialog v-model="activitiesDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6" style="color:violet">Extra-Curricular Activities</div>
        </q-card-section>
        <q-card-section>
          <q-list>
            <q-item>Dance</q-item>
            <q-item>Watching Series</q-item>
            <q-item>Debate</q-item>
            <q-item>Listening Music</q-item>
          </q-list>
        </q-card-section>
        <q-card-actions>
          <q-btn flat label="Close" @click="activitiesDialog = false" color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'InfoCardWithDialog',
  data() {
    return {
      skillsDialog: false, // Controls the visibility of the skills dialog
      qualificationsDialog: false, // Controls the visibility of the qualifications dialog
      activitiesDialog: false // Controls the visibility of the activities dialog
    };
  },
  methods: {
    openSkillsDialog() {
      this.skillsDialog = true; // Open the skills dialog
    },
    openQualificationsDialog() {
      this.qualificationsDialog = true; // Open the qualifications dialog
    },
    openActivitiesDialog() {
      this.activitiesDialog = true; // Open the activities dialog
    }
  }
};
</script>

<style scoped>
.my-card {
  max-width: 400px;
  margin: 0 auto; /* Center the card horizontally */
  cursor: pointer; /* Change cursor to indicate clickable */
}

.q-card-section {
  padding: 16px;
}

.text-h6 {
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
