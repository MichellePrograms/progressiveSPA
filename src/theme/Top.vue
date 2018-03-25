<template>
     <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/main" exact>
        <img src="http://bit.ly/vue-img"
          alt="Offline Progressive App" />
      </router-link>
      <router-link class="nav-item is-tab"
        to="/brands">Brands</router-link>
      <router-link class="nav-item is-tab"
        to="/flavors">Flavors</router-link>
      <router-link class="nav-item is-tab"
        to="/login">Login</router-link>
    </div>
  </nav>
</template>
