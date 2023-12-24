<template>
  <div>

    <lazyLayoutNavbar />
    <lazyHeader />
    <lazyOffers />
    <lazyProductCategories />
    <lazyCashBack />
    <lazyProducts />
    <lazyWeekOffers />
    <lazyProducts />
    <lazyGiftCard />
    <lazyProducts />
    <lazyShopNow />
    <lazyProducts />
    <lazyProducts />
    <lazyLayoutFooter />

  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  // async asyncData(context) {
  //   const services = await context.$axios.$get('home')
  //   const filteredServices = {
  //     defaultAddress: services.data.filter(service => service.type === 'default_address'),
  //     bannerSliders: services.data.filter(service => service.type === 'banner_sliders'),
  //     quikDelivery: services.data.filter(service => service.type === 'quik_delivery'),
  //     mainCategories: services.data.filter(service => service.type === 'main_categories')
  //   }

  //   return { services: filteredServices }
  // },
}
</script>
