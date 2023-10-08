<template>
  <!--top画像start-->
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
  <!--top画像end-->

  <!--profile start-->
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
  <!--profile end-->

  <!--skills start-->
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
  <!--skills end-->

  <!--gallery start-->
  <v-sheet id="gallery" color="#333" class="py-16">
    <v-container>
      <v-lazy
        min-height="60px"
        :options="{ threshold: 1.0 }"
        transition="slide-y-reverse-transition"
      >
        <h2 class="text-center text-white text-h2 mb-16">Gallery</h2>
      </v-lazy>
      <v-row class="flex-wrap-reverse">
        <v-col cols="12" sm="4" md="3">
          <v-slide-group
            v-bind:style="{
              height: $vuetify.display.smAndUp ? '750px' : '200px',
            }"
            v-model="model"
            class="pa-4"
            center-active
            :show-arrows="false"
            mandatory
            :direction="$vuetify.display.smAndUp ? 'vertical' : 'horizontal'"
          >
            <v-slide-group-item
              v-for="(item, idx) in galleryItems"
              :key="idx"
              v-slot="{ isSelected, toggle }"
            >
              <v-btn
                class="ma-4 align-self-center"
                :height="isSelected ? 125 : 100"
                :width="isSelected ? 125 : 100"
                color="white"
                v-bind:style="{
                  filter: isSelected ? 'grayscale(0%)' : 'grayscale(80%)',
                }"
              >
                <v-img
                  :height="isSelected ? 125 : 100"
                  :width="isSelected ? 125 : 100"
                  :src="item.src"
                  @click="toggle"
                >
                </v-img>
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </v-col>
        <v-col cols="12" sm="8" md="9">
          <v-carousel v-model="model" cycle hide-delimiters height="80vh">
            <v-carousel-item v-for="item in galleryItems" :src="item.src">
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <!--gallery end-->
</template>

<script setup lang="ts">
import { mdiCog, mdiDrawPen } from "@mdi/js";

const model = ref(null);

const galleryItems = [
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
    src: "./images/gallery/img10.png",
  },
];

const items = [
  {
    src: "./images/top/img1.png",
  },
  {
    src: "./images/top/img2.png",
  },
  {
    src: "./images/top/img3.png",
  },
];
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

.vertical-animation {
  animation-name: vertical-move;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.flip-animation {
  animation-name: flip;
  animation-duration: 4s;
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

@keyframes vertical-move {
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
}

@keyframes flip {
  100% {
    transform: rotateY(360deg);
  }
}
</style>
