<template>
  <div>
    <section class="button-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 mt-5">
            <div class="block">
              <button type="button" class="btn btn-dark" @click="prevPage()">Back</button>
              <button type="button" class="btn btn-dark" @click="nextPage()">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

    props: {
        users: {
            type: Array,
            required: true,
        }
    },

    data() {
        return {
            page: {},
        }
    },

    created () {
        this.page = this.$store.getters.getPage;
    },

    methods: {
         prevPage () {
            if (this.page.current > 1) this.page.current-=1;
        },
        nextPage () {
            if ((this.page.current * this.page.length) < this.users.length) this.page.current+=1;
        },

    },
};
</script>

<style lang="scss" scoped>
button {
  margin-left: 10px;
  width: 120px;
}


.block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}
</style>