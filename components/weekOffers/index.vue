<template>
  <section class="week_offer_component">
    <div class="container">

      <div data-aos="fade-down">
        <h3>This week offers</h3>

        <VueOwlCarousel v-if="content.length > 0" :loop="true" :margin="40" :autoHeight="true" :items="2"
          :autoplay="false" :navText="['<', '>']" :center="false" dir="ltr" :nav="true" :dots="false"
          :responsive="responsive">

          <div class="item" v-for="(item, index) in content" :key="'o' + index">
            <div class="image">
              <img loading="lazy" :src="require(`@/assets/images/${item.image}`)" />
              <!-- <nuxt-img :src="`@/assets/images/${item.image}`" alt="image" format="webp" width="88" height="88" /> -->
            </div>
            <div class="cart_shop">
              <div class="info">
                <h4>Up to 50% discount</h4>
                <p>Household Essentials</p>
                <button class="main_btn">Shop Now</button>
              </div>
            </div>
          </div>

        </VueOwlCarousel>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "ProductCategories",

  // props: { items: { type: Array, default: [] } },

  data() {
    return {
      content: [
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "add.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "banner_3.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "add.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "banner_3.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "add.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "banner_3.png"
        },
      ],

      responsive: {
        0: {
          items: 1,
          nav: false
        },
        480: {
          items: 1,
          nav: false
        },
        570: {
          items: 1,
          nav: false
        },
        991: {
          items: 2,
          nav: false
        },
        1042: {
          items: 2,
          nav: false
        },
      }
    }
  },

  async fetch() {

  },


  mounted() {
  },


  methods: {


  }
}
</script>

<style lang="scss" scoped></style>
