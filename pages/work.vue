<template>
  <v-sheet color="grey-darken-4" class="py-16">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="auto">
          <v-btn
            density="comfortable"
            color="grey-lighten-5"
            @click="showComponentA"
            >Live2Dモデル</v-btn
          >
        </v-col>
        <v-col cols="auto">
          <v-btn
            density="comfortable"
            color="grey-lighten-5"
            @click="showComponentB"
            >コミックマーケット</v-btn
          >
        </v-col>
      </v-row>
      <live2d v-if="displayLive2d" />
      <comike v-if="displayComike" />
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import live2d from "~/components/work/live2d.vue";
import comike from "~/components/work/comike.vue";

export default {
  components: {
    live2d,
    comike,
  },
  data() {
    return {
      displayLive2d: true,
      displayComike: false,
    };
  },
  methods: {
    showComponentA() {
      this.displayLive2d = true;
      this.displayComike = false;
    },
    showComponentB() {
      this.displayComike = true;
      this.displayLive2d = false;
    },
  },
};
</script>

<style lang="scss">
@import "vuetify/styles";
</style>
