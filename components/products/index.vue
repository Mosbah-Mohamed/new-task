<template>
  <section class="products_component main_product">
    <div class="container">

      <div data-aos="fade-down">
        <h3>Most Popular Products</h3>

        <VueOwlCarousel v-if="content.length > 0" :loop="true" :margin="40" :autoHeight="true" :items="17"
          :autoplay="false" :navText="['<', '>']" :center="false" dir="ltr" :nav="true" :dots="false"
          :responsive="responsive">

          <div class="item" v-for="(item, index) in content" :key="'o' + index">
            <div class="head">
              <div class="deal">
                <img loading="lazy" src="@/assets/images/fire.png" alt="fire" title="fire">
                <span>Top deal</span>
              </div>
              <div class="fav">
                <img loading="lazy" src="@/assets/images/favourite.png" alt="favourite" title="favourite">
              </div>

            </div>
            <div class="image">
              <img loading="lazy" :src="require(`@/assets/images/${item.image}`)" :alt="item.name" :title="item.name" />
            </div>
            <div class="counter">
              <span class="plus">+</span>
            </div>
            <div class="rate">
              <div class="stars">
                <img loading="lazy" src="@/assets/images/star.png" alt="">
                <img loading="lazy" src="@/assets/images/star.png" alt="">
                <img loading="lazy" src="@/assets/images/star.png" alt="">
                <img loading="lazy" src="@/assets/images/star_2.png" alt="">
                <img loading="lazy" src="@/assets/images/star_3.png" alt="">
              </div>
              <div class="gold_price">
                <p>+5.99 SAR </p>
                <img loading="lazy" src="@/assets/images/account_balance.png" alt="">
              </div>
              <div class="list">
                <img loading="lazy" src="@/assets/images/list_add_check.png" alt="">
              </div>
            </div>
            <div class="desc">
              <div class="price">25,00 SAR</div>
              <p>Pasta Reggia — Penne ziti, 500g More information</p>
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
          "id": 1,
          "image": "packet.png",
          "name": "ABU KASS INDIAN MAZZA BASMATI RICE 5kg",
          "desc": "<p>&nbsp;</p>\r\n\r\n<h2><strong>Product Description </strong></h2>\r\n\r\n<ul>\r\n\t<li>ABU KASS INDIAN MAZZA BASMATI RICE 5kg Stock up your kitchen with the Abu Kass Indian Sella Basmati Rice and prepare some lip-smacking rice delicacies.</li>\r\n\t<li>This sella rice has a rich aroma that fills your home when you cook it.</li>\r\n\t<li>Rice is also a rich source of energy and fills your tummy during mealtimes.</li>\r\n\t<li>Loaded with nutrition, the sella rice gives you a healthy meal option.</li>\r\n\t<li>Be it at lunch or any other meal or snack during the day.</li>\r\n\t<li>Moreover, this 5kg pack of basmati rice is enough to last for a prolonged duration. Variety of Dishes This Abu Kass basmati rice is what you require for making a wide variety of dishes.</li>\r\n\t<li>This rice is richly flavored and has a delicious aroma. Be it any cuisine.</li>\r\n\t<li>This sella basmati is perfect for making a variety of rice preparations that are sure to enchant your guests.</li>\r\n\t<li>Taste and Nourishment This Indian sella basmati is a perfect combination of mouthwatering aroma and taste packed with great nutritional value.</li>\r\n\t<li>It is a rich source of carbohydrates, fiber, and energy, making the rice a healthy pick for your meals.</li>\r\n</ul>",
          "rate_avg": 0,
          "price": 40,
          "is_fav": false,
          "is_express": false,
          "type": "top_deals",
          "type_trans": "Top deals",
          "percentage": null,
          "price_after": null,
          "have_sale": null,
          "limit_order_num": 50,
          "currency": "SAR",
          "available_quantity": 0,
          "in_cart": false,
          "in_cart_count": 0,
          "product_id_in_cart": null
        },
        {
          "id": 6,
          "image": "packet.png",
          "name": "Green Farms Egyptian Rice 1 KG",
          "desc": "<p>Green Farms Egyptian Rice 1 KG</p>",
          "rate_avg": 0,
          "price": 10.5,
          "is_fav": false,
          "is_express": false,
          "type": "top_deals",
          "type_trans": "Top deals",
          "percentage": null,
          "price_after": null,
          "have_sale": null,
          "limit_order_num": null,
          "currency": "SAR",
          "available_quantity": 0,
          "in_cart": false,
          "in_cart_count": 0,
          "product_id_in_cart": null
        },
        {
          "id": 11,
          "image": "packet.png",
          "name": "Punjabi Muhaidib Brown Basmati Rice 2kg",
          "desc": "<p>Product description Punjabi Al-Muhaidib rice is considered one of the best and most renowned basmati rice types. It is planted in Punjab region. It is distinguished for its supreme quality and best types. Punjabi Al-Muhaidib rice grains length is doubled upon cooking and become separate. Country Of Origin : India</p>",
          "rate_avg": 0,
          "price": 29.949999999999999289457264239899814128875732421875,
          "is_fav": false,
          "is_express": false,
          "type": "top_deals",
          "type_trans": "Top deals",
          "percentage": null,
          "price_after": null,
          "have_sale": null,
          "limit_order_num": 6,
          "currency": "SAR",
          "available_quantity": 0,
          "in_cart": false,
          "in_cart_count": 0,
          "product_id_in_cart": null
        },
        {
          "id": 12,
          "image": "packet.png",
          "name": "Royal Umbrella Thai Jasmine Rice 5kg",
          "desc": "<p>Royal Umbrella Thai Jasmine Rice 5KG is recognised as being one of the best Thai Jasmine Rice brands available.</p>\r\n\r\n<p>This Thai Jasmine Rice cooks easily and our Royal Umbrella Thai Hom Mali Rice has a beautiful Jasmine fragrance that you will notice when you are cooking it.</p>\r\n\r\n<p>Easy to cook, with great results, we know that you will love this Thai Jasmine Rice.&nbsp;</p>",
          "rate_avg": 0,
          "price": 41.9500000000000028421709430404007434844970703125,
          "is_fav": false,
          "is_express": false,
          "type": "top_deals",
          "type_trans": "Top deals",
          "percentage": null,
          "price_after": null,
          "have_sale": null,
          "limit_order_num": null,
          "currency": "SAR",
          "available_quantity": 0,
          "in_cart": false,
          "in_cart_count": 0,
          "product_id_in_cart": null
        },
        {
          "id": 15,
          "image": "packet.png",
          "name": "Sunwhite Calrose Rice 5 kg",
          "desc": "<p>Product Details An oval medium-grain white rice known for its quality and taste Soft and moist in texture and is naturally gluten free Packed with a high number of micronutrients and macronutrients as well as minerals and vitamins Ideal for making sushi, soups, or salads Makes a healthy addition to your regular mealtimes Hygienically packed for safety and storage Product description Sunwhite Calrose Rice is an oval medium-grain white rice known for its quality and taste. When cooked, Calrose rice becomes soft and tender with a tendency to stick together due to its succulent grains, allowing it to retain its moisture. It is used in dishes that require a bit more creaminess as well as a side dish to compliment almost every meal. For best results, rinse this rice with cold water. Drain well before cooking. All rice is naturally gluten-free.</p>",
          "rate_avg": 0,
          "price": 39.9500000000000028421709430404007434844970703125,
          "is_fav": false,
          "is_express": false,
          "type": "top_deals",
          "type_trans": "Top deals",
          "percentage": 7.509386733416800296936344238929450511932373046875,
          "price_after": 36.9500000000000028421709430404007434844970703125,
          "have_sale": null,
          "limit_order_num": null,
          "currency": "SAR",
          "available_quantity": 0,
          "in_cart": false,
          "in_cart_count": 0,
          "product_id_in_cart": null
        },
        {
          "id": 20,
          "image": "packet.png",
          "name": "Botan Light Meat Tuna in Brine 90g",
          "desc": "<p>Botan Light Meat Tuna in Brine 90g</p>",
          "rate_avg": 0,
          "price": 5.25,
          "is_fav": false,
          "is_express": false,
          "type": "top_deals",
          "type_trans": "Top deals",
          "percentage": null,
          "price_after": null,
          "have_sale": null,
          "limit_order_num": null,
          "currency": "SAR",
          "available_quantity": 0,
          "in_cart": false,
          "in_cart_count": 0,
          "product_id_in_cart": null
        }
      ],

      responsive: {
        0: {
          items: 1,
          nav: false
        },
        500: {
          items: 2,
          nav: false
        },
        991: {
          items: 3,
          nav: false
        },
        1200: {
          items: 4,
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
