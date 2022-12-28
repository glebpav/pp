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
              body: "Проектная практика позволяет развить твои компетенции, навыки коммуникации и конечно получить опыт работы в команде ",
            },
            {
              icon: "group",
              title: "Как создать команду",
              body: "Создай команду, чтобы объединиться с людми, имеющими общий с тобой круг интересов, и создай крутой проект, поллучив много знаний и опыта",
            },
            {
              icon: "flag",
              title: "С чеге мне лучше начать",
              body: "Даже если ты ни разу не сталкивался с проектной практикой, не стоит отчаиваться, найди себе хорошего наставника, который поможет тебе прочувствовать, что это такое",
            }
          ]
        },
        {
          icon: "grade",
          title: "Полезные советы",
          cardContent: [
            {
              icon: "dangerous",
              title: "Что делать, если ничего не получается",
              body: "С этим этапом так или иначе сталкивается каждый, саоме главное - это не бросать дело, когда когда кажется, что всё безнадёжно. Терпение и труд - всё перетрут",
            },
            {
              icon: "cookie",
              title: "Как сделать пп приятной",
              body: "Для некоторых проектная практка является чем-то сложным, чем-то неприятны. Но секрет заключается в том, что нужно просто найти интересную для себя тему",
            },
            {
              icon: "sentiment_dissatisfied",
              title: "Мне не нравится моя тема",
              body: "В этой ситуации нужно просто зкакончить семестр на волевых качествах и попытаться осознанней сделать выбор в следующем. Не всё же коту масленица ",
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