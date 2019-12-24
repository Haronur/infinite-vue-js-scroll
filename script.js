new Vue({
  el: '#app',
  data: {
    loading: false,
    nextItem: 1,
    items: []
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
    loadMore () {
      
      /** This is only for this demo, you could 
        * replace the following with code to hit 
        * an endpoint to pull in more data.
      **/
      this.loading = true;
      setTimeout(e => {
        for (var i = 0; i < 10; i++) {
          this.items.push('Item ' + this.nextItem++);
        }
        this.loading = false;
      }, 200);
      /**************************************/
      
    }
  }
});