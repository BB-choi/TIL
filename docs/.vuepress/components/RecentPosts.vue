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
const POST_COUNT = 5;
export default {
  data() {
    return {};
  },
  computed: {
    recentPosts() {
      const posts = this.$site.pages
        .filter((post) => post.path !== "/")
        .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
        .slice(0, POST_COUNT);

      return posts;
    },
  },
};
</script>
