<template>
  <div>
    <a href="#" @click.prevent="open"><img src="@/assets/video.jpg"></a>
    <vue-plyr id="frame" v-click-outside="close" ref="plyr" :options="options" v-show="showFrame">
      <div data-plyr-provider="youtube" data-plyr-embed-id="8Z1eMy2FoX4"></div>
    </vue-plyr>
  </div>
</template>

<script>
  export default {
    data: () => ({
      showFrame: false,
      options: {
        autoplay: false,
        invertTime: false,
      }
    }),
    computed: {
      player(){
        return this.$refs.plyr.player
      }
    },
    methods: {
      close() {
        this.player.stop()
        this.showFrame = false
      },
      open(){
        setTimeout(() => {
          this.showFrame = true
        } , 0)
      }
    }
  }
</script>


<style>
#frame {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10000;
  margin: 140px;
}
.plyr{
  width: 100%;
}
</style>