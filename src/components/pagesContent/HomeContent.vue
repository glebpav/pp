<template>
  <div :class="smallViewPort ? 'content-min-padding' : 'padding-box'">
    <triple-card :card-info="cards[0]"/>
    <div class="spacer"></div>
    <triple-card :card-info="cards[1]"/>
  </div>
</template>

<script>
import TripleCard from "@/components/UI/TripleCard";

export default {
  name: "HomeContent",
  components: {TripleCard},
  data() {
    return {
      cards: [
        {
          icon: "code",
          title: "Для тех, кто только начинает",
          cardContent: [
            {
              icon: "diversity_1",
              title: "Зечем нужна проектная практика",
              body: "Я тут ещё не придумал, но будет красиво и вкусно, Я тут ещё не придумал, но будет красиво и вкусно, Я тут ещё не придумал, но будет красиво и вкусно",
            },
            {
              icon: "group",
              title: "Зечем нужна проектная практика",
              body: "Я тут ещё не придумал, но будет красиво и вкусно, Я тут ещё не придумал, но будет красиво и вкусно, Я тут ещё не придумал, но будет красиво и вкусно",
            },
            {
              icon: "flag",
              title: "Зечем нужна проектная практика",
              body: "Я тут ещё не придумал, но будет красиво и вкусно, Я тут ещё не придумал, но будет красиво и вкусно, Я тут ещё не придумал, но будет красиво и вкусно",
            }
          ]
        },
        {
          icon: "grade",
          title: "Для тех, кто только начинает",
          cardContent: [
            {
              icon: "dangerous",
              title: "Зечем нужна проектная практика",
              body: "Я тут ещё не придумал, но будет красиво и вкусно, Я тут ещё не придумал, но будет красиво и вкусно, Я тут ещё не придумал, но будет красиво и вкусно",
            },
            {
              icon: "person",
              title: "Зечем нужна проектная практика",
              body: "Я тут ещё не придумал, но будет красиво и вкусно, Я тут ещё не придумал, но будет красиво и вкусно, Я тут ещё не придумал, но будет красиво и вкусно",
            },
            {
              icon: "person",
              title: "Зечем нужна проектная практика",
              body: "Я тут ещё не придумал, но будет красиво и вкусно, Я тут ещё не придумал, но будет красиво и вкусно, Я тут ещё не придумал, но будет красиво и вкусно",
            }
          ]
        }
      ],
      windowWidth: 0,
      smallViewPort: false,
    }
  },
  methods: {
    onResize() {
      console.log(this.smallViewPort)
      this.windowWidth = window.innerWidth;
      this.smallViewPort = this.windowWidth < 500;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
}
</script>

<style scoped>

.content-min-padding {
  padding: 10px 10px;
}

.padding-box {
  padding: 10px 10%;
}

.spacer {
  height: 65px;
}

</style>