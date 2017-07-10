$(document).ready(function () {

  var data = {
    currentVideo : 'video A',
  };

  new Vue({
    el: '#app',
    data: data,
    methods: {
      ejecutar: function () {
        var currentVideo = this.currentVideo;

        $.get("http://localhost:3000/send/test", function (response) {
          var message = `Ejecutando ${currentVideo}`;
          console.log(message);
        });
      },
      selectedRB: function (event) {
        this.currentVideo = event.target.value;
      }
    },
  });

});