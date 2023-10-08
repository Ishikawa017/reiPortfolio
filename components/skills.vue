<template>
  <v-sheet
    id="skills"
    color="whit"
    style="background: linear-gradient(rgb(255, 204, 188), rgb(252, 255, 209))"
    class="py-16"
  >
    <v-container>
      <v-lazy
        min-height="60px"
        :options="{ threshold: 1.0 }"
        transition="slide-y-reverse-transition"
      >
        <h2 class="text-center text-h2 mb-16">Skills</h2>
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
                <v-card-title class="font-weight-black"
                  >Software Engineering</v-card-title
                >
                <v-card-text>
                  <v-col cols="12">
                    <v-icon color="#555" size="64" class="spin-animation">
                      {{ mdiCog }}
                    </v-icon>
                  </v-col>
                  <v-col>
                    <p>今はTypeScript＆Nuxt.jsのスクラム開発の現場にいます。</p>
                  </v-col>
                  <v-col>
                    <p>
                      フロントエンド、バックエンド問わずチャレンジしてきました！
                    </p>
                    <p>
                      メインではないですが、コンテナ構築やリリース作業などのインフラ業務も行ったことがあり、
                      自分の知らないことでもとりあえずやってみよう！と思えることが長所かなと思います。
                    </p>
                  </v-col>
                  <v-col>
                    <p>Coding languages</p>
                    <v-chip class="ma-2" color="orange"> JavaScript </v-chip>
                    <v-chip class="ma-2" color="orange"> TypeScript </v-chip>
                    <v-chip class="ma-2" color="orange"> Jest </v-chip>
                    <v-chip class="ma-2" color="orange"> PHP </v-chip>
                    <v-chip class="ma-2" color="orange"> Java </v-chip>
                    <v-chip class="ma-2" color="orange"> GO </v-chip>
                  </v-col>
                  <v-col>
                    <p>Framework</p>
                    <v-chip class="ma-2" color="green"> Vue.js </v-chip>
                    <v-chip class="ma-2" color="green"> Nuxt.js </v-chip>
                    <v-chip class="ma-2" color="green"> React </v-chip>
                    <v-chip class="ma-2" color="green"> NestJS </v-chip>
                    <v-chip class="ma-2" color="green"> CakePHP </v-chip>
                    <v-chip class="ma-2" color="green"> Iris </v-chip>
                  </v-col>
                  <v-col>
                    <p>DB</p>
                    <v-chip class="ma-2" color="blue"> SQL Server </v-chip>
                    <v-chip class="ma-2" color="blue"> MongoDB </v-chip>
                    <v-chip class="ma-2" color="blue"> MySQL </v-chip>
                  </v-col>
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
                <v-card-title class="font-weight-black">Illust</v-card-title>
                <v-card-text>
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-icon
                        color="pink-lighten-3"
                        size="64"
                        class="shake-animation"
                      >
                        {{ mdiDrawPen }}
                      </v-icon>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <p>
                        小さい時から絵を描くのが好きで、現在もデジタルイラストを描いております。
                      </p>
                      <p>
                        コミックマーケット（C94,C95,C96）など同人イベントにも参加していました。
                      </p>
                      <p>
                        Live2Dモデル作成、配信用のスタンプ・イラスト作成、SNS用のアイコン作成等の商業活動も行っています。
                      </p>
                    </v-col>
                  </v-row>
                  <v-col>
                    <v-card-actions>
                      <v-row justify="end">
                        <!-- nizimaボタン -->
                        <v-btn
                          elevation="5"
                          href="https://nizima.com/Profile/266790"
                          target="_blank"
                          outlined
                          color="pink"
                        >
                          nizima
                        </v-btn>
                        <!-- Pixivボタン -->
                        <v-btn
                          elevation="5"
                          href="https://www.pixiv.net/users/2224409"
                          target="_blank"
                          outlined
                          color="pink"
                        >
                          Pixiv
                        </v-btn>
                      </v-row>
                    </v-card-actions>
                  </v-col>

                  <v-col>
                    <v-col>
                      <v-card-actions>
                        <v-img
                          min-height="100px"
                          max-height="200px"
                          src="./images/sample/vmodel.gif"
                        >
                        </v-img>
                      </v-card-actions>
                    </v-col>
                  </v-col>
                </v-card-text>
              </v-card>
            </v-lazy>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { mdiCog, mdiDrawPen } from "@mdi/js";
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
.spin-animation {
  animation-name: spin;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.shake-animation {
  animation-name: shake;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes shake {
  0% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(5deg);
  }
}
</style>
