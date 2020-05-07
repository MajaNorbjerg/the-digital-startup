<template>
  <div>
    <input type="text" v-model="search" placeholder="Search description.." />
    <div class="grid-container">
      <article v-for="post in filteredList" :key="post.id">
        <div>
          <img :src="post.image" alt />
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <router-link :to="{ name: 'Update', params: { post: post } }">
            <button type="button">Update</button>
          </router-link>
          <button type="button" v-on:click="toDeletePost(post)">Delete</button>
          </div>
      </article>
    </div>
  </div>
</template>

<script>
import { postRef } from '../firebase-db'
export default {
  data () {
    return {
      posts: [],
      search: ''
    }
  },
  firestore: {
    posts: postRef
  },
  methods: {
    toDeletePost (post) {
      const id = post.id
      postRef.doc(id).delete()
    }
  },
  computed: {
    filteredList () {
      console.log(this.posts)
      return this.posts.filter(post => {
        return post.description
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>
/* ---------- Grid container ---------- */
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
  justify-content: space-evenly;
}

@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}

.grid-container > article {
  text-align: center;
  padding: 10px;
  align-self: end;
}

.grid-container > article img {
  max-width: 300px;
  width: 100%;
}

.grid-container > article h3 {
  font-weight: 200;
  margin: 0 0 1.5em;
}

button {
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 12px 15px;
  margin: .1em .5em;
  font-size: 1em;
  border-radius: 0;
  color: var(--text-color-light);
  background-color: var(--secondary);
  width: 70%;
}
</style>
