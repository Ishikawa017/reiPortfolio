<template>
  <v-sheet color="grey-darken-4" class="py-16">
    <v-container>
      <v-lazy
        min-height="60px"
        :options="{ threshold: 1.0 }"
        transition="slide-y-reverse-transition"
      >
        <h2 class="text-center text-h3 mb-16">ComicMarket</h2>
      </v-lazy>
      <v-row>
        <v-col cols="12" sm="6">
          <v-hover v-slot="{ isHovering, props }">
            <v-lazy
              height="100%"
              min-height="100px"
              :options="{ threshold: 1.0 }"
              transition="slide-y-reverse-transition"
            >
              <v-card
                height="100%"
                :elevation="isHovering ? 12 : 2"
                v-bind="props"
              >
                <v-card-title class="font-weight-black">C96</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <v-img src="./images/comike/c96_1.jpg"></v-img>
                    </v-col>

                    <v-col cols="6">
                      <v-img src="./images/comike/c96_3.jpg"></v-img>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-lazy>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="6">
          <v-hover v-slot="{ isHovering, props }">
            <v-lazy
              height="100%"
              min-height="100px"
              :options="{ threshold: 1.0 }"
              transition="slide-y-reverse-transition"
            >
              <v-card
                height="100%"
                :elevation="isHovering ? 12 : 2"
                v-bind="props"
              >
                <v-card-title class="font-weight-black">C95</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <v-img src="./images/comike/c95_1.jpg"></v-img>
                    </v-col>

                    <v-col cols="6">
                      <v-img src="./images/comike/c95_3.jpg"></v-img>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-lazy>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="6">
          <v-hover v-slot="{ isHovering, props }">
            <v-lazy
              height="100%"
              min-height="100px"
              :options="{ threshold: 1.0 }"
              transition="slide-y-reverse-transition"
            >
              <v-card
                height="100%"
                :elevation="isHovering ? 12 : 2"
                v-bind="props"
              >
                <v-card-title class="font-weight-black">C94</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <v-img src="./images/comike/c94_1.jpg"></v-img>
                    </v-col>

                    <v-col cols="6">
                      <v-img src="./images/comike/c94_2.jpg"></v-img>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-lazy>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "vuetify/styles";
</style>
