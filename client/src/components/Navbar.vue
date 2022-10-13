<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
  name : "Navbar",
  computed : {
    ...mapState(useUserStore, ["isLogin"])
  },
  methods : {
    ...mapActions(useUserStore, ["logout"])
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light mb-4">
    <div class="container-fluid">
      <img src="../assets/img/logo.png" alt="" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
          <li class="nav-item">
            <a @click.prevent="this.$router.push('/')" class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li v-if="isLogin" @click.prevent="logout" class="nav-item">
            <a class="nav-link">Logout</a>
          </li>
          <li v-if="!isLogin"  @click.prevent="this.$router.push('/login')" class="nav-item">
            <a class="nav-link">Login</a>
          </li>
        </ul>


        <!-- <form class="d-flex justify-content-between" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>
