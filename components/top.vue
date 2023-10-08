<template>
  <v-carousel
    cycle
    height="100vh"
    :show-arrows="false"
    hide-delimiter-background
    hide-delimiters
  >
    <v-carousel-item eager v-for="(item, i) in items" :key="i">
      <v-parallax scale="0.1">
        <v-img
          eager
          height="100vh"
          cover
          :src="item.src"
          gradient="to top, rgba(0,0,0,0.2), rgba(0,0,0,0.75)"
        >
        </v-img>
      </v-parallax>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          src: "./images/top/img1.png",
        },
        {
          src: "./images/top/img2.png",
        },
        {
          src: "./images/top/img3.png",
        },
      ],
    };
  },
};
</script>
