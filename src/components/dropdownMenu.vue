<template>
  <div class="dropdownMenu">
    <button @click="showDropdown" class="dropdownButton">{{ menuName }}</button>
    <div v-if="showMenu" class="dropdown">
      <div class="menuItem" v-for="item in menuItems" :key="item.name">
        <RouterLink :to="initialLink + '/' + item.link" @click="showDropdown">{{ item.name }}</RouterLink>
      </div>
    </div>
  </div>
</template>
  
<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'dropdownMenu',
  components: {
    RouterLink
  },
  data: function () {
    return {
      showMenu: false
    }
  },
  props: {
    menuName: {
      type: String,
      required: true
    },
    menuItems: {
      type: Array,
      required: true
    },
    initialLink: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    showDropdown: function () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
  
<style scoped>
.dropdown {
  position: absolute;
  transition: 0.3s;
  line-height: 1.7rem;
  top: 100%;
  width: 10em;
  right: 0%;
  background-color: white;
  border: 2px solid black;
  padding-top: 2px;
  padding-bottom: 2px;
}

.menuItem {
  display: flex;
  justify-content: center;
  & a {
    border: 2px solid white;
    padding: 2px;
    transition: 0.3s;
  }
  & :hover {
    border: 2px solid black;
  }
}

.dropdownButton {
  border: 2px solid black;
  width: 6em;
  height: 2em;
  font-size: 1rem;
}

.dropdownMenu {
  width: fit-content;
  align-self: center;
  transition: 0.3s;
  & :hover {
    color: #c23b3b;
  }
}
</style>