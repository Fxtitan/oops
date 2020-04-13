const Stack = function() {
  return myObj = {
  items: [],// my property that holds empty array.
  add: function(item){ // why can't I put arrow function here? 
    this.items.push(item);//puts number 5 at the end of 4... 1,2,3,4,(5)
  },

  remove: function(item) {
    return this.items.pop(item);
  },

  peek: function(item) {
    return this.items.pop(item);
  }
  }
}

const Queue = function() {
  return myOtherObj = {
    items: [],

    add: function (item) {
      this.items.push(item);
    },

    remove: function (item) {
      return this.items.shift(item);
    },

    peek: function (item) {
      return this.items
    }
    
  }
}

module.exports = {
  Stack,
  Queue,
}