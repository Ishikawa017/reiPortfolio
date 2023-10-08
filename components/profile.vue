<template>
  <v-sheet id="profile" color="deep-orange-lighten-4" class="py-16">
    <v-container>
      <v-lazy
        min-height="60px"
        :options="{ threshold: 1.0 }"
        transition="slide-y-reverse-transition"
      >
        <h2 class="text-center text-h2 mb-16">Profile</h2>
      </v-lazy>

      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-lazy
            min-height="200px"
            :options="{ threshold: 1.0 }"
            transition="slide-y-reverse-transition"
          >
            <v-sheet class="pa-8 bg-transparent">
              <v-img
                min-height="350px"
                max-height="500px"
                src="./images/profile/profile.jpg"
              >
              </v-img>
            </v-sheet>
          </v-lazy>
        </v-col>
        <v-col cols="12" md="6" class="align-self-end">
          <v-lazy
            min-height="200px"
            :options="{ threshold: 1.0 }"
            transition="slide-y-reverse-transition"
          >
            <v-sheet class="pa-8 bg-transparent">
              <v-sheet class="pa-6" color="white" rounded>
                <p>Reina Ishikawa</p>
                <p></p>
                <p>
                  出身は宮城県で経営学部卒です。就職と同時に東京にきました。
                </p>
                <p>卒業後は食品・化学品メーカーの事務員をしていましたが、</p>
                <p>
                  業務の中でVBAを独学で勉強し、プログラミングに興味を持ち転職しました。
                </p>
                <p>
                  2019年頃からエンジニアとして働いており、現在はフロントエンジニアとして活躍中です。
                </p>
                <p>
                  趣味でイラストも描いており、ものづくりが大好きな人間です。
                </p>
              </v-sheet>
            </v-sheet>
          </v-lazy>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

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
