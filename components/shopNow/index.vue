<template>
  <section class="shop_now_component">
    <div class="container">

      <div class="all_content" data-aos="fade-up">

        <div class="row justify-content-center">
          <div class="col-lg-7 col-12">
            <div class="content">

              <div class="clock">
                <!-- <h1>{{ currentTime }}</h1> -->

                <div class="hours">
                  <div class="time">
                    <span>3</span>
                    <span>2</span>
                  </div>
                  <span>Hours</span>
                </div>

                <span class="divide">:</span>

                <div class="hours minutes">
                  <div class="time">
                    <span>1</span>
                    <span>8</span>
                  </div>
                  <span>Minutes</span>
                </div>

              </div>

              <h2>-40% on all Personal Care products</h2>
              <p>*Some explanation small text if needed displayed here.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis egestas mi</p>
              <button class="main_btn">Shop Now</button>
            </div>
          </div>
        </div>

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
      currentTime: this.getCurrentTime()
    }
  },

  async fetch() {

  },


  mounted() {

    // Update the time every minute
    setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 60000);

  },


  methods: {

    getCurrentTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Format the time as HH:MM
      return `${this.padZero(hours)}:${this.padZero(minutes)}`;
    },
    padZero(value) {
      return value < 10 ? `0${value}` : value;
    }

  }
}
</script>

<style lang="scss" scoped></style>
