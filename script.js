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
    apps: [
      {
        textName: 'app A',
        fileName: 'appA.exe',
      },
      {
        textName: 'app B',
        fileName: 'appB.exe'
      },
      {
        textName: 'app C',
        fileName: 'appC.exe'
      },
    ],
    currentContent: 'videoA.mpg4',
    currentType: 'video',
  };

  new Vue({
    el: '#app',
    data: data,
    methods: {
      playContent: function () {
        var currentContent = this.currentContent;
        var currentType = this.currentType;

        if (currentType === 'video') {
          $.get(`http://localhost:3000/play-video/${currentContent}`, function (response) {
            console.log(`Ejecutando video ${currentContent}`);
          });
        }
        else {
          $.get(`http://localhost:3000/play-app/${currentContent}`, function (response) {
            console.log(`Ejecutando app ${currentContent}`);
          });
        }
      },
      stopContent: function () {
        var currentContent = this.currentContent;
        var currentType = this.currentType;

        if (currentType === 'video') {
          $.get(`http://localhost:3000/stop-video`, function (response) {
            console.log(`Video detenido`);
          });
        } else {
          $.get(`http://localhost:3000/stop-app`, function (response) {
            console.log(`App detenida`);
          });
        }
      },
      selectedContent: function (event) {
        this.currentContent = event.target.value;
        this.currentType = event.target.className;

        console.log(`Selecionado ${this.currentType} ${this.currentContent}`);
      }
    },
  });
});