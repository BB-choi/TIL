<template>
  <div class="recent-posts">
    <h2 class="title">📝 Recent Posts</h2>
    <ul v-if="recentPosts" class="list">
      <li v-for="post in recentPosts" v-bind:key="post.path">
        <router-link :to="{ path: post.path }">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    recentPosts() {
      const POST_COUNT = 5;
      const now = new Date();

      const getPostsByMonthTag = (date) => {
        return date.toISOString().slice(2, 7); // "22-07"
      };

      const getRecentPosts = (month) => {
        return this.$site.pages.filter((page) =>
          page.frontmatter.tags?.includes(month)
        );
      };

      const thisMonthPosts = getPostsByMonthTag(now);
      let recentPosts = [...getRecentPosts(thisMonthPosts)];

      const year = now.getFullYear();
      const month = now.getMonth();
      const day = now.getDate();
      const GMTSeoul = 9;

      while (recentPosts.length < POST_COUNT) {
        recentPosts = [
          ...recentPosts,
          ...getRecentPosts(
            getPostsByMonthTag(new Date(year, month - 1, day, GMTSeoul))
          ),
        ];
      }

      const slicedRecentPosts = recentPosts
        .sort(({ title: a }, { title: b }) => b.localeCompare(a))
        .slice(0, POST_COUNT);

      return slicedRecentPosts;
    },
  },
};
</script>
