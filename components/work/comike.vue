<template>
  <v-sheet color="grey-darken-4" class="py-16">
    <v-container>
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col cols="6">
            <v-card>
              <v-col>
                <v-row>
                  <v-col cols="6">
                    <v-img src="./images/comike/c96_1.jpg"></v-img>
                  </v-col>

                  <v-col cols="6">
                    <v-img src="./images/comike/c96_3.jpg"></v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card>
              <v-col>
                <v-row>
                  <v-col cols="6">
                    <v-img src="./images/comike/c95_1.jpg"></v-img>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="./images/comike/c95_3.jpg"></v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card>
              <v-col>
                <v-row>
                  <v-col cols="6">
                    <v-img src="./images/comike/c94_1.jpg"></v-img>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="./images/comike/c94_2.jpg"></v-img>
                  </v-col>
                </v-row>
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
