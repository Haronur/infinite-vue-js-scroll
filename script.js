new Vue({
  el: '#app',
  data: {
    loading: false,
    limit: 10,
    posts: []
  },
  mounted () {

    // Detect when scrolled to bottom.
    const listElm = document.querySelector('#infinite-list');
    listElm.addEventListener('scroll', e => {
      if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.loadMore();
      }
    });

    // Initially load some items.
    this.loadMore();

  },
  methods: {
    loadMore() {
      console.log("Adding 10 more data results");
      this.loading = true;  
      setTimeout(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          console.log(JSON.stringify(response.data));
          const append = response.data.slice(
            this.posts.length,
            this.posts.length + this.limit,
            );
            this.posts = this.posts.concat(append);
            // console.log(JSON.stringify( this.posts));
            this.loading = false;

        })
        .catch(function (error) {
          // handle error
          console.log(error);       
          // reject(error);
          reject(new Error(error)); 
        });
      }, 2000);
    }
  }
});