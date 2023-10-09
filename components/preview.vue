<template>
  <v-sheet id="preview" color="grey-lighten-1" class="py-16">
    <v-container>
      <v-lazy
        min-height="60px"
        :options="{ threshold: 1.0 }"
        transition="slide-y-reverse-transition"
      >
        <h2 class="text-center text-h2 mb-16">Gallery</h2>
      </v-lazy>
      <router-link to="/gallery">
        <v-row justify="end">
          <v-col cols="auto">
            <v-btn color="grey-darken-4" size="x-large">Galleryページへ </v-btn>
          </v-col>
        </v-row>
      </router-link>

      <v-row class="flex-wrap-reverse">
        <v-col cols="12" sm="4" md="3">
          <v-slide-group
            v-bind:style="{
              height: $vuetify.display.smAndUp ? '750px' : '200px',
            }"
            v-model="model"
            class="pa-4"
            center-active
            :show-arrows="false"
            mandatory
            :direction="$vuetify.display.smAndUp ? 'vertical' : 'horizontal'"
          >
            <v-slide-group-item
              v-for="(item, idx) in previewitem"
              :key="idx"
              v-slot="{ isSelected, toggle }"
            >
              <v-btn
                class="ma-4 align-self-center"
                :height="isSelected ? 125 : 100"
                :width="isSelected ? 125 : 100"
                v-bind:style="{
                  filter: isSelected ? 'grayscale(0%)' : 'grayscale(80%)',
                }"
              >
                <v-img
                  :height="isSelected ? 125 : 100"
                  :width="isSelected ? 125 : 100"
                  :src="item.src"
                  @click="toggle"
                >
                </v-img>
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </v-col>
        <v-col cols="12" sm="8" md="9">
          <v-carousel v-model="model" cycle hide-delimiters height="80vh">
            <v-carousel-item
              color="black"
              v-for="item in previewitem"
              :src="item.src"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
const model = ref(null);

const previewitem = [
  {
    src: "./images/top/img1.png",
  },
  {
    src: "./images/top/img2.png",
  },
  {
    src: "./images/top/img3.png",
  },
  {
    src: "./images/gallery/img1.png",
  },
  {
    src: "./images/gallery/img2.png",
  },
  {
    src: "./images/gallery/img3.png",
  },
  {
    src: "./images/gallery/img4.png",
  },
  {
    src: "./images/gallery/img5.png",
  },
  {
    src: "./images/gallery/img6.png",
  },
];
</script>

<style scoped lang="scss">
.slide-y-reverse-transition {
  &-leave-active,
  &-enter-active,
  &-enter-to,
  &-leave,
  &-leave-to {
    transition-duration: 2.5s !important;
  }
}
</style>
