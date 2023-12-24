<template>
  <section class="navbar_component">
    <div class="container hide">

      <div class="top_nav">

        <div class="row justify-content-center">

          <div class="col-lg-6 col-12">
            <div class="delivery">
              <div class="cashback">
                <img loading="lazy" src="@/assets/images/storefront.png" alt="storefront" />
                <p>+ 500 offline stores with high quality products</p>
              </div>
              <div class="cashback">
                <img loading="lazy" src="@/assets/images/storefront.png" alt="storefront" />
                <p>Fast Delivery & Free delivery</p>
              </div>
              <div class="cashback">
                <img loading="lazy" src="@/assets/images/Active.png" alt="Active" />
                <p>Save more by returning cashback for each order</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-12">
            <div class="settings">
              <div class="lang">
                <span>AR</span>
                <span class="active">|</span>
                <span class="active">En</span>
              </div>
              <div class="whatsapp">
                <img loading="lazy" src="@/assets/images/whatsapp.png" alt="whatsapp" />
                <span>+966 55 80 2 88 55</span>
              </div>
            </div>
          </div>



        </div>

      </div>

    </div>

    <hr class="hide">

    <div class="container hide">
      <div class="middle_nav">
        <div class="row">
          <div class="col-lg-5 col-12">
            <div class="logo_side">
              <div class="logo">
                <img loading="lazy" src="@/assets/images/logo_nav.png" alt="logo_nav" width="150" height="44">
              </div>

              <div class="search">
                <div class="icon_search">
                  <img loading="lazy" src="@/assets/images/search.png" alt="search">
                </div>
                <input type="text" placeholder="Search products">
                <div class="barcode">
                  <img loading="lazy" src="@/assets/images/barcode.png" alt="barcode">
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-12">
            <div class="location">
              <div class="icon">
                <img loading="lazy" src="@/assets/images/location-02.png" alt="location-02">
              </div>

              <div class="info">
                <p>Delivery to: </p>
                <p class="place"> Sulaimaniyah Dist, 455 Riyad Saud...</p>
                <p class="time">
                  (30-45 mins)
                </p>
              </div>

              <div class="change">
                <a href="#">Change</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-12">
            <div class="icons">

              <div class="pay_cash">
                <span>Your Cashback</span>
                <div class="price">
                  <span>SAR 124,00</span>
                  <img loading="lazy" src="@/assets/images/account_balance_wallet.png" alt="account_balance_wallet">
                </div>
              </div>

              <ul>
                <li>
                  <img loading="lazy" src="@/assets/images/notification.png" alt="notification">
                </li>
                <li>
                  <img loading="lazy" src="@/assets/images/user.png" alt="user">
                </li>
                <li>
                  <img loading="lazy" src="@/assets/images/favourite_nav.png" alt="favourite_nav">
                </li>
                <li>
                  <img loading="lazy" src="@/assets/images/cart.png" alt="cart">
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container hide">
      <div class="nav_bottom">
        <div class="row">
          <div class="nav_links">
            <ul>
              <li v-for="(link, idx) in nav_links" :key="idx">
                <nuxt-link :to="link.url" :aria-label="link.text" class="nav-link" v-if="link.type == 'link'">
                  <span class="link_text">{{ link.text }}</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <hr class="hide">

    <div class="responsive_nav navbar_component">
      <div class="container">

        <div class="row">
          <div class="nav_top">
            <div class="logo">

              <div class="sidebar side_bar_content d-none">
                <b-button v-b-toggle.sidebar-backdrop>
                  <font-awesome-icon :icon="['fas', 'list']" />
                  <!-- <font-awesome-icon icon="fa-solid fa-list" /> -->
                </b-button>

                <b-sidebar id="sidebar-backdrop" backdrop shadow>
                  <div class="info">




                  </div>
                </b-sidebar>
              </div>

              <img loading="lazy" src="@/assets/images/logo.png" alt="logo">

            </div>
            <div class="icon">
              <img loading="lazy" src="@/assets/images/cart.png" alt="cart">
            </div>

          </div>
        </div>

        <div class="row">
          <div class="nav_bottom">
            <div class="search">
              <div class="icon_search">
                <img loading="lazy" src="@/assets/images/search.png" alt="search">
              </div>
              <input type="text" placeholder="Search products">
              <div class="barcode">
                <img loading="lazy" src="@/assets/images/barcode.png" alt="barcode">
              </div>
            </div>
            <div class="icon">
              <img loading="lazy" src="@/assets/images/notification.png" alt="notification">
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Navbar",

  // props: { items: { type: Array, default: [] } },

  data() {
    return {
      nav_links: [
        { text: 'All categories', url: '/', type: 'link' },
        { text: 'Highest cashaback', url: '/', type: 'link' },
        {
          text: 'Top Deals',
          url: '/',
          type: 'dropdown',
          key: 'services',
        },
        { text: 'Fruits & Vegetables', url: '/', type: 'link' },
        { text: 'Diary & Eggs', url: '/our-products', type: 'link' },
        { text: 'Beverages & Drinks', url: '/', type: 'link' },

        { text: 'Fresh Bakery', url: '/', type: 'link' },
        { text: 'Baby Products', url: '/', type: 'link' },
        { text: 'Household', url: '/', type: 'link' },
      ],
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
