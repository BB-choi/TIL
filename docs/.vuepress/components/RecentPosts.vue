<template>
  <div class="recent-posts">
    <h2>최근 글</h2>
    <ul v-if="recentPosts">
      <li v-for="post in recentPosts">
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
      const posts = this.$site.pages
        .filter((post) => post.path !== "/")
        .sort((a, b) => {
          b.lastUpdatedStamp - a.lastUpdatedStamp;
        })
        .slice(0, 5);

      return posts;
    },
  },
};
</script>
