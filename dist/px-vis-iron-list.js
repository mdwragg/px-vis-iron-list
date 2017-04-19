'use strict';(function(){Polymer({is:'px-vis-iron-list',properties:{items:{type:Array,value:function value(){return Array.apply(null,Array(10000)).map(function(x,i){return i})}}},handleClick:function handleClick(event,detail,sender){this.increment()},increment:function increment(){this.counterValue++}})})();
//# sourceMappingURL=px-vis-iron-list.js.map
