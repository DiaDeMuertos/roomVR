$(document).ready(function () {

  var data = {
    videos: [
      {
        textName: 'video A',
        fileName: 'videoA.mpg4',
      },
      {
        textName: 'video B',
        fileName: 'videoB.mpg4'
      },
      {
        textName: 'video C',
        fileName: 'videoC.mpg4'
      },
    ],
    currentVideo: 'videoA.mpg4',
  };

  new Vue({
    el: '#app',
    data: data,
    methods: {
      playVideo: function () {
        var currentVideo = this.currentVideo;

        $.get(`http://localhost:3000/play/${currentVideo}`, function (response) {
          console.log(`Ejecutando video ${currentVideo}`);
        });
      },
      stopVideo: function () {
        var currentVideo = this.currentVideo;

        $.get(`http://localhost:3000/stop`, function (response) {
          console.log(`Video detenido`);
        });
      },
      selectedVideo: function (event) {
        this.currentVideo = event.target.value;
        console.log(`Selecionado video ${this.currentVideo}`);
      }
    },
  });
});