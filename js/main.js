// Source data
var person={
  name: "Ann",
  metrics:{ age:"25" }
};

// Manifest
var manifest = {

  //Default data
  data: { name:"", metrics:{ age:"" }},

  // Init function
  init: function ($node, runtime) {
    $node.html(
      '<h4>Simplest form</h4>'+
      '<div><input id="name" type="text" placeholder="Name"/></div>' +
      '<div><input id="age" type="number" placeholder="Age"/></div>'
    );
  },

  // Bindings
  ui: {
    "#name": { bind: "name" },
    "#age" : { bind: "metrics.age" }
  }
};

// Init $.my over DOM node
$("#form").my( manifest, person );

