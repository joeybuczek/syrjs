<template>
  <div>

    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <nuxt-link class="navbar-brand" exact to="/">
        <span class="logo-text-syr">syr(</span>
        <span class="logo-text-js">js</span>
        <span class="logo-text-syr">)</span>
      </nuxt-link>
      <nuxt-link class="nav-link" to="codechallenges">Code Challenges</nuxt-link>
    </nav>

  </div>
</template>

<style>
.navbar-brand {
  position: relative;
  top: -2px;
}
.nav-link {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  color: #aaa;
}
.nav-link:hover {
  color: white;
}
.navbar-spacer {
  margin-bottom: 60px;
}
.logo-text-syr, .logo-text-js {
  font-family: 'Courier New', Courier, monospace;
}
.logo-text-syr {
  color: white;
}
.logo-text-js {
  color: #adff2f;
}
</style>
