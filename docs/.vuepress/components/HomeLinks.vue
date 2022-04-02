<template>
  <div>
    <div v-if="thisMonthPages">
      <h2 :id="thisMonth">
        {{ thisMonth }}
      </h2>
      <ul>
        <li class="thisMonth-page-link" v-for="page in thisMonthPages">
          <router-link :to="{ path: page.path }">{{ page.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    thisMonth() {
      return "2022-04";
    },
    thisMonthPages() {
      const thisMonth = this.thisMonth;
      const thisMonthPages = [];

      for (const page of this.$site.pages) {
        for (const idx in page.frontmatter.tags) {
          if (page.frontmatter.tags[idx] === thisMonth) {
            thisMonthPages.push(page);
          }
        }
      }

      return thisMonthPages;
    },
  },
};
</script>
