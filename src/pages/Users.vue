<template>
  <div>
    <section class="users-section">
      <div class="container">
        <div class="row">
         

            <div class="col-xl-12 mt-5">

                <table class="table">   
  <thead>
    <tr>
      <th scope="col" @click="sort('name')">Name</th>
      <th scope="col" @click="sort('username')">User Name</th>
      <th scope="col" @click="sort('phone')">Phone</th>
      <th scope="col" @click="sort('website')">Website</th>
      <th scope="col" @click="sort('address')">Adress</th>
    </tr>
  </thead>
  <tbody>

      <!-- Body table -->


    <tr v-for="(user, index) in usersSort" :key="index" >
      <td>
          
            <div class="card">
  <div class="card-body">
    {{user.name}}
  </div>
</div>


      </td>
      <td>

          <div class="card">
  <div class="card-body">
    {{user.username}}
  </div>
</div>
      </td>
      <td>

<div class="card">
  <div class="card-body">
    {{user.phone}}
  </div>
</div>
          
      </td>
      <td>

          
<div class="card">
  <div class="card-body">
   {{user.website}}
  </div>
</div>

      </td>
      <td>

<div class="card">
  <div class="card-body">
  {{user.address.street}}
  </div>
</div>
          
      </td>
    </tr>
    
  </tbody>
</table>

<h6>Debug: sort: {{currrentSort}}, dir: {{correntSortDir}}, page: {{this.page.current}}</h6>

            </div>
            


        </div>
        <Button :users="users"/>
      </div>
    </section>

    

  </div>
</template>


<script>

import Button from '@/components/Button.vue'
import axios from 'axios'


export default {

    components: {
        Button
    },

    data() {
        return {
            page: {},
            users: [],
            currrentSort: 'name',
            correntSortDir: 'asc',  
           
        }
    },

    computed: {
        
    },


    created () {

        this.page = this.$store.getters.getPage;

        axios
        .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // console.log(response.data);
                     this.users = response.data;
        })
                .catch((error) => {
                    console.log(error);
                })

        
    },

    computed: {
        usersSort () {
            return this.users.sort((a, b) => {
                let mod = 1;
                    if (this.currrentSortDir === 'desc') mod = -1;
                    if (a[this.currrentSort] < b[this.currrentSort]) return -1*mod;
                    if (a[this.currrentSort] > b[this.currrentSort]) return 1*mod;
                    return 0;
            }).filter((row, index) => {
                let statr = (this.page.current - 1 )*this.page.length;
                let end = this.page.current * this.page.length;
                if (index >= statr && index < end) return true;
            })
        }, 
    },


    methods: {
        sort (e){
            if (e === this.currrentSort) {
                this.correntSortDir = this.currrentSortDir === 'asc' ? 'desc' : 'asc';
            }
            this.currrentSort = e;
        },
    },



};
</script>


<style lang="scss">



td {
    
    &:hover {
        transform: scale(1.1);
        transition: ease-in-out 0.4s;
    }
}


th {
    cursor: pointer;
}

.users-section {
    margin-bottom: 70px;
}
    
</style>