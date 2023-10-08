<template>
  <v-app>
    <v-app-bar class="bg-transparent" flat>
      <v-btn @click.stop="navActive = !navActive" size="large">
        <div class="hamburger-menu" v-bind:class="{ active: navActive }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </v-btn>
      <v-btn>
        <router-link to="/">
          <v-icon color="white" size="25">
            {{ mdiHomeOutline }}
          </v-icon>
        </router-link>
      </v-btn>
      <div v-if="$vuetify.display.mdAndUp">
        <router-link to="/#profile">
          <v-btn color="white" size="large"> Profile </v-btn>
        </router-link>
        <router-link to="/#skills">
          <v-btn color="white" size="large"> Skills </v-btn>
        </router-link>
        <router-link to="/gallery">
          <v-btn color="white" size="large"> Gallery </v-btn>
        </router-link>
        <router-link to="/work">
          <v-btn color="white" size="large"> Work </v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      temporary
      v-model="navActive"
      location="left"
      :width="300"
      elevation="0"
      disable-resize-watcher
    >
      <v-container class="position-relative">
        <v-list style="z-index: 1">
          <v-list-subheader>TOP</v-list-subheader>
          <v-list-item>
            <router-link to="/#profile">
              <v-btn color="black" variant="text" size="large"> Profile </v-btn>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/#skills">
              <v-btn color="black" variant="text" size="large"> Skills </v-btn>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/#preview">
              <v-btn color="black" variant="text" size="large"> Preview </v-btn>
            </router-link>
          </v-list-item>
        </v-list>
        <v-list style="z-index: 1">
          <v-list-subheader>Activity</v-list-subheader>
          <v-list-item>
            <router-link to="/gallery">
              <v-btn color="black" variant="text" size="large"> Gallery </v-btn>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/work">
              <v-btn color="black" variant="text" size="large"> Work </v-btn>
            </router-link>
          </v-list-item>
        </v-list>
        <v-col>
          <v-row justify="center">
            <router-link to="/">
              <v-icon color="black" size="30">
                {{ mdiHomeOutline }}
              </v-icon>
            </router-link>
          </v-row>
        </v-col>
      </v-container>
    </v-navigation-drawer>

    <main>
      <slot></slot>
    </main>
    <v-footer class="d-flex flex-column pa-0">
      <v-row class="px-4 py-2 bg-black text-center w-100" no-gutters>
        <v-col cols="12">
          {{ new Date().getFullYear() }} — <strong>© Reina Ishikawa</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { mdiHomeOutline } from "@mdi/js";
const navActive = ref(false);
</script>

<style scoped lang="scss">
.hamburger-menu {
  position: relative;
}

.hamburger-menu span {
  position: absolute;
  top: -4px;
  left: -15px;
  background-color: rgb(255, 255, 255);
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  height: 3px;
  width: 30px;
}

.hamburger-menu span:nth-child(1) {
  top: -12px;
}

.hamburger-menu.active span:nth-child(1) {
  transform: translateY(8px) rotate(405deg);
}

.hamburger-menu.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-menu span:nth-child(3) {
  top: 4px;
}

.hamburger-menu.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-405deg);
}
</style>
