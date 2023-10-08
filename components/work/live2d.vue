<template>
  <v-sheet color="grey-darken-4" class="py-16">
    <v-container>
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col cols="4">
            <v-card>
              <v-img src="./images/work/vmodel1.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-col>
                <v-img src="./images/sample/vmodel.gif"></v-img>
              </v-col>
              <v-col>
                <v-img src="./images/work/vmodel2.gif"></v-img>
              </v-col>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-col>
                <v-img src="./images/work/vmodel3.png"></v-img>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
  </v-sheet>
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

<style lang="scss">
@import "vuetify/styles";
</style>
