<template>
  <section class="products_component sub_cat">
    <div class="container">

      <div data-aos="fade-up">
        <VueOwlCarousel v-if="content.length > 0" :loop="true" :margin="40" :autoHeight="true" :items="9"
          :autoplay="false" :navText="['<', '>']" :center="false" dir="ltr" :nav="true" :dots="false"
          :responsive="responsive">

          <!-- <template v-slot:prev>
          <font-awesome-icon class="left" :icon="['fas', 'chevron-left']" />
        </template>
        <template v-slot:next class="right">
          <font-awesome-icon class="right" :icon="['fas', 'chevron-right']" />
        </template> -->

          <div class="item" v-for="(item, index) in content" :key="'o' + index">
            <div class="image">
              <img loading="lazy" :src="require(`@/assets/images/${item.image}`)" :title="item.name" :alt="item.name" />
            </div>
            <span>{{ item.name }}</span>
          </div>

        </VueOwlCarousel>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "ProductCategories",

  data() {
    return {
      content: [
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "icon-partner-1.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "icon-partner-2.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "icon-partner-3.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "icon-partner-4.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "icon-partner-5.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "icon-partner-6.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "icon-partner-7.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "icon-partner-8.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "icon-partner-3.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "icon-partner-1.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "icon-partner-2.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "icon-partner-3.png"
        },
      ],

      responsive: {
        0: {
          items: 2,
          nav: false
        },
        480: {
          items: 2,
          nav: false
        },
        570: {
          items: 3,
          nav: false
        },
        991: {
          items: 6,
          nav: false
        },
        1042: {
          items: 9,
          nav: false
        },
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>
