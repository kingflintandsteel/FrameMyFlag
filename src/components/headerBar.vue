<template>
  <div class="header">
    <RouterLink class="logo" to="/">
      <b>THE FRAME MY FLAG COMPANY</b>
    </RouterLink>
    <div class="otherLinks">
      <RouterLink to="/vintage"><p class="link">Vintage</p></RouterLink>
      <RouterLink to="/betsy"><p class="link">Betsy Ross</p></RouterLink>
      <RouterLink to="/bennington"><p class="link">Bennington 1776</p></RouterLink>
      <RouterLink to="/traditional"><p class="link">Traditional U.S. Flag</p></RouterLink>
      <RouterLink to="/unframed"><p class="link">Vintage (Unframed)</p></RouterLink>
      <!--<RouterLink to="/frameyourflag"><p class="link">Frame Your Flag</p></RouterLink>-->
      <dropdownMenu menuName="More..." :menuItems="moreList"></DropdownMenu>
    </div>
  </div>
</template>
  
<script>
import { RouterLink } from 'vue-router'
import dropdownMenu from './dropdownMenu.vue';

export default {
  components: {
    RouterLink,
    dropdownMenu
  },
  name: 'HeaderBar',
  data: function () {
    return {
      moreList:
        [
          { name: "About Us", link: "about" },
          { name: "Design Partners", link: "designPartners" },
          { name: "Proper Flag Folding", link: "flagFolding" }
        ]
    }
  }
}
</script>
  
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: white;
  border-bottom: 1px solid #d1d1d1;
}

.logo {
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  padding-left: 1rem;
  transition: 0.3s;
}

.logo:hover {
  color: #c23b3b;
}

.link {
  border: 2px solid white;
  padding: 3px;
  transition: 0.3s;
}

.link:hover {
  border: 2px solid black;
}

.otherLinks {
  display: flex;
  justify-content: space-around;
  width: 70%;
}
</style>