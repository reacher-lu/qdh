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
  // console.log(modernizr);
  console.log($);
  // console.log(tpls.test());
  // console.log(app);
  // console.log(tts.textSearch);
  
  switch ($("html").attr("classes")){
    case "albumList" :
      albumList.init();
      break;
    case "albumDetail" :
      albumDetail.init();
      break;
  }

});