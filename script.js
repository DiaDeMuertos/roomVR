$(document).ready(function () {

  var data = {
    videos: [
      {
        name: 'video A'
      },
      {
        name: 'video B'
      },
      {
        name: 'video C'
      },
    ],
    currentVideo: '1',
  };

  new Vue({
    el: '#app',
    data: data,
    methods: {
      execVideo: function () {
        var currentVideo = this.currentVideo;

        $.get(`http://localhost:3000/send/${currentVideo}`, function (response) {
          console.log(`Ejecutando video ${currentVideo}`);
        });
      },
      selectedVideo: function (event) {
        this.currentVideo = event.target.value;
        console.log(`Selecionado video ${this.currentVideo}`);
      }
    },
  });
});