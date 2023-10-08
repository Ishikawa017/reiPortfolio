<template>
  <v-sheet  color="grey-darken-4" class="py-16">
    <v-container>
      <v-lazy
        min-height="60px"
        :options="{ threshold: 1.0 }"
        transition="slide-y-reverse-transition"
      >
        <h2 class="text-center text-h3 mb-16">Live2D</h2>
      </v-lazy>
      <v-row>
        <v-col cols="12" sm="12">
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
                <v-card-text>
                  <v-row>
                    <v-col>
                      <v-img  src="./images/work/vmodel1.png"></v-img>
                    </v-col>
                    <v-col>
                      <v-img class="pa-12" src="./images/sample/vmodel.gif"></v-img>
                      <v-img class="pa-12" src="./images/work/vmodel2.png"></v-img>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-lazy>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="12">
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
                <v-card-text>
                  <v-row>
                    <v-col>
                      <v-img src=./images/work/vmodel3.png></v-img>
                    </v-col>
                    <v-col>
                      <v-img src="./images/work/vmodel2.gif"></v-img>
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
