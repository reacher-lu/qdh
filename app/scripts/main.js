require.config({

  packages: [{
    name: "qdh",
    location: "./qdh",
  }],
  // 
  paths: {
    jquery: "../bower_components/jquery/dist/jquery"
  }
});

define([
  "jquery",
  "qdh/index"
], function($, index) {
  console.log($);
  
  switch ($("html").attr("classes")){
    case "albumList" :
      albumList.init();
      break;
    case "albumDetail" :
      albumDetail.init();
      break;
  }

});