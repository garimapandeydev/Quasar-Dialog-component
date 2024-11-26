<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="relative">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-nb-nd">
        <div class="text-h3">Welcome : )</div>
        <div class="text-subtitle1">{{ formattedDate }}</div>
      </div>

      <q-img
        src="/flower.jpg"
        class="absolute-top head"
        style="z-index: -1; opacity: 0.2;"
      />
    </q-header>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>

      <!-- Include the TodoDo component here -->

    </q-page-container>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area style="height: calc(100% - 175px); margin-top: 175px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="task" />
            </q-item-section>
            <q-item-section>
              Task-1
            </q-item-section>
          </q-item>
          <q-item to="/hello" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="task" />
            </q-item-section>
            <q-item-section>
              Task-2
            </q-item-section>
          </q-item>
          <q-item to="/todo" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section>
              ToDo List
            </q-item-section>
          </q-item>
          <q-item to="/game" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="gamepad" />
            </q-item-section>
            <q-item-section>
              Game
            </q-item-section>
          </q-item>
          <q-item to="/food" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="style" />
            </q-item-section>
            <q-item-section>
              Files
            </q-item-section>
          </q-item>
          <q-item to="/help" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="feedback" />
            </q-item-section>
            <q-item-section>
              Feedback
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="th.jpg" style="height: 175px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Garima Pandey</div>
          <div>Developer</div>
        </div>
      </q-img>
    </q-drawer>
  </q-layout>
</template>

<script>
import { date } from 'quasar'


export default {
  name: 'MainLayout',



  data() {
    return {
      leftDrawerOpen: false
    }
  },

  computed: {
    formattedDate() {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd, MMMM D, YYYY')
    }
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>

<style lang="scss">
.head {
  height: 150px;
}
</style>
