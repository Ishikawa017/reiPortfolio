<template>
  <!-- ファーストビュー -->
  <!-- カルーセル -->

  <v-carousel
    height="100vh"
    cycle
    :show-arrows="false"
    hide-delimiter-background
    hide-delimiters
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-parallax scale="0.1">
        <v-img
          eager
          height="100vh"
          cover
          :src="item.src"
          gradient="to top, rgba(0,0,0,0.2),rgba(0,0,0,0.6)"
        >
        </v-img>
      </v-parallax>
    </v-carousel-item>
  </v-carousel>

  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          src: "/images/carousel/img1.png",
        },
        {
          src: "/images/carousel/img2.png",
        },
        {
          src: "/images/carousel/img3.png",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
