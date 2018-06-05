var app = new Vue({
  el: '#app',
  data() {
    return {
      items: [],
      profile: null,
      search: '',
      selectedContact: -1,
      profileRatings: 0
    }
  },
  computed: {
    filteredList() {
      return this.items.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created() {
    axios.get('people.json')
      .then((response) => {
        this.items = response.data.People;
      })
  },
  methods: {
    showContact(index) {
      this.profile = this.filteredList[index];
      this.selectedContact = this.filteredList[index].name;      
      this.profileRatings = 5 - this.filteredList[index].rating;
    }
  },
});