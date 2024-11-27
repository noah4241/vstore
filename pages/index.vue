<template>
  <div class="">
    <button class="btn btn-secondary" @click="mail()">Clicked</button>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
      <div class="collapse-content">
        <p>hello</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    async mail() {
      var parma = await {
      }
      var data = await this.$axios.$get('polls/mail', parma)
    }
  },
  mounted() {
    // this.lab();
  },
}
</script>
