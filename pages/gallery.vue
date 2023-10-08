<template>
  <v-sheet color="grey-darken-4" class="py-16">
    <v-pagination v-model="currentPage" :length="totalPages"></v-pagination>
    <v-row>
      <v-col
        v-for="(imageUrl, i) in currentImageUrls"
        :key="i"
        class="d-flex child-flex"
        cols="4"
      >
        <v-container>
          <v-img width="1000" height="600" :src="imageUrl.src"></v-img>
        </v-container>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1, // 現在のページ
      itemsPerPage: 6, // 1ページあたりの画像数
      imageUrls: [
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
        {
          src: "./images/gallery/img7.png",
        },
        {
          src: "./images/gallery/img8.png",
        },
        {
          src: "./images/gallery/img9.png",
        },
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
          src: "./images/gallery2/img1.png",
        },
        {
          src: "./images/gallery2/img2.png",
        },
        {
          src: "./images/gallery2/img3.png",
        },
        {
          src: "./images/shikishi/img1.jpg",
        },
        {
          src: "./images/shikishi/img2.jpg",
        },
        {
          src: "./images/shikishi/img3.jpg",
        },
        {
          src: "./images/shikishi/img4.jpg",
        },
        {
          src: "./images/shikishi/img5.jpg",
        },
      ],
    };
  },
  computed: {
    // 現在のページに表示する画像のURLの配列を計算
    currentImageUrls() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.imageUrls.slice(startIndex, endIndex);
    },
    // ページネーションの総ページ数を計算
    totalPages() {
      return Math.ceil(this.imageUrls.length / this.itemsPerPage);
    },
  },
};
</script>

<style lang="scss">
@import "vuetify/styles";
</style>
