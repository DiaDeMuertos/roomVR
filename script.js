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