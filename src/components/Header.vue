<template>
    <div>
        <section class="header-section">
        <header>
  <div class="collapse bg-dark" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Link Router</h4>
          <ul class="list-unstyled">
              <h2>Hello</h2>
            <li v-for="(link) in links" :key="link.title">
                <router-link href="#" class="nav-link" :to="link.url">
                {{link.title}}
                </router-link>
             </li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
        <strong>Users-CRM</strong>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>
    </section>
    </div>
</template>


<script>
export default {
    data() {
        return {
            links: [
                {
                    title: 'Home',
                    url: '/'
                },
                 {
                    title: 'Users',
                    url: '/users'
                },
            ],
        }
    },
}
</script>


<style lang="scss" scoped>


.nav-link {
    &.router-link-exact-active {
        color: rgb(255, 255, 255);
        font-weight: 800;
        text-shadow: 2px 3px 6px 3px;
    }
}

</style>