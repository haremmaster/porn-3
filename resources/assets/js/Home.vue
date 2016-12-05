<template>


<div class="app">
    <navbar></navbar>
    <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <router-view></router-view>
            </div>

            <div class="col-lg-12"><h1>bottom</h1></div>
          </div>
        </div>

    </div>
</div>

</template>

<script>

import Navbar from './layouts/Navbar.vue'


export default {
    components: {
        Navbar
    },
    replace: false
}

</script>

<style>
.content{
    padding-top:65px;
    background:#ddd;
}

</style>
