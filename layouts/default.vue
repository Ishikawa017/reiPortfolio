<template>
  <v-app>
    <v-app-bar density="default" class="bg-transparent" flat>
      <v-app-bar-title>
        <v-img height="68" width="250" src="./iamges/logo/logo.png"> </v-img>
      </v-app-bar-title>
      <div v-if="$vuetify.display.mdAndUp">
        <v-btn href="#profile" size="large"> Profile </v-btn>
        <v-btn href="#skills" size="large"> Skills </v-btn>
        <v-btn href="#gallery" size="large"> Gallery </v-btn>
      </div>
      <v-btn @click.stop="navActive = !navActive" size="large">
        <div class="hamburger-menu" v-bind:class="{ active: navActive }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      temporary
      v-model="navActive"
      location="left"
      :width="$vuetify.display.width"
      class=""
      color="blue-lighten-5"
      elevation="0"
      disable-resize-watcher
    >
      <v-container class="position-relative">
        <v-img
          style="z-index: 1"
          height="125"
          src="./images/logo/logo.png"
        ></v-img>
        <v-list style="z-index: 1">
          <v-list-item>
            <v-btn variant="text" href="#profile" size="large"> Profile </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn variant="text" href="#skills" size="large"> Skills </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn variant="text" href="#gallery" size="large"> Gallery </v-btn>
          </v-list-item>
        </v-list>
        <v-img
          class="position-fixed"
          style="bottom: 0; left: 0; max-height: 800px; z-index: 0"
          :width="$vuetify.display.width"
          src="./images/profile/profile.png"
        >
        </v-img>
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
const navActive = ref(false);
const drawer = ref(false);
</script>

<style scoped lang="scss">
.hamburger-menu {
  position: relative;
}

.hamburger-menu span {
  position: absolute;
  top: -4px;
  left: -15px;
  background-color: black;
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
