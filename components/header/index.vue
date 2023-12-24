<template>
  <section class="header_component">
    <div class="container">

      <div class="" data-aos="fade-up">
        <VueOwlCarousel v-if="content.length > 0" :loop="true" :margin="40" :autoHeight="true" :items="1"
          :autoplay="false" :navText="['<', '>']" :center="false" dir="ltr" :nav="false" :dots="true">

          <div class="item" v-for="(item, index) in content" :key="'o' + index">
            <div class="image">
              <img loading="lazy" :src="require(`@/assets/images/${item.image}`)" :alt="item.name" :title="item.name" />
            </div>
            <div class="content">
              <h1>Flavours of Italy</h1>
              <p>20% off weekly offer for italian products</p>
              <button class="main_btn" aria-label="Shop Now" title="Shop Now">Shop Now</button>
            </div>
          </div>

        </VueOwlCarousel>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      content: [
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "Hero_banners.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "Hero_banners.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "Hero_banners.png"
        },
        {
          "id": 909,
          "parent": null,
          "name": "Baby Care",
          "image": "Hero_banners.png"
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
