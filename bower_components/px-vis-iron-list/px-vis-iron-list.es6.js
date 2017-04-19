(function() {
  Polymer({

    is: 'px-vis-iron-list',

    properties: {
      /**
      * This property keeps track of the number of clicks.
      *
      * @property counterValue
      */
      items: {
        type: Array,
        value: function(){
          return Array.apply(null, Array(10000)).map(function (x, i) { return i; });
        }
      }
    },

    /**
    * Handles click on the element defined in 'on-click' on the template.
    *
    * @method handleClick
    */
    handleClick: function(event, detail, sender) {
      this.increment();
    },

    /**
    * Increments the counter
    *
    * @method increment
    */
    increment: function() {
      this.counterValue++;
    }
  });
})();
