let myObject = {
  name: "Banana",
  saying: function (stuff) {
    console.log(stuff);
  },
  jump: function (height) {
      height = parseFloat(height);
      if(height>1.3) {height = 1.3};
      console.log(this.name.concat(" jumped ".concat(height)).concat(" meters."))
  }
};

myObject.jump("2");
