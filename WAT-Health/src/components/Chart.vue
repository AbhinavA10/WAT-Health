<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';
  export default {
    name: "Chart",
    created() {
      this.userID = this.$route.params.id; // get the user's firebase id from the url
    },
    mounted() {
      let db = firebase.firestore();
      //db.settings({
        //timestampsInSnapshots: true
      //});
      let data = {};
      data['times'] = [];
      data['angerScores'] = [];
      data['fearScores'] = [];
      data['joyScores'] = [];
      data['sadnessScores'] = [];
      data['analyticalScores'] = [];
      data['confidentScores'] = [];
      data['tentativeScores'] = [];
      db.collection("Users").doc(this.userID).collection("Emotions").get()
        .then((snapshot) => {
          snapshot.forEach(postEmotionData => {
            // add user's emotion data to data to graph on the chart
            data['times'].push(postEmotionData.data().timestamp);
            data['angerScores'].push(postEmotionData.data().values[0]);
            data['fearScores'].push(postEmotionData.data().values[1]);
            data['joyScores'].push(postEmotionData.data().values[2]);
            data['sadnessScores'].push(postEmotionData.data().values[3]);
            data['analyticalScores'].push(postEmotionData.data().values[4]);
            data['confidentScores'].push(postEmotionData.data().values[5]);
            data['tentativeScores'].push(postEmotionData.data().values[6]);
          })
        }).then(() => {
        var ctx = document.getElementById("myChart");

        //ctx.width = 16;
        //ctx.height = 9;
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: data['times'],
            datasets: [{
              data: data['angerScores'],
              label: "Anger",
              borderColor: "#FF3105",
              fill: false
            },
              {
                data: data['fearScores'],
                label: "Fear",
                borderColor: "#05A8FF",
                fill: false
              },
              {
                data: data['joyScores'],
                label: "Joy",
                borderColor: "#FFA005",
                fill: false
              },
              {
                data: data['sadnessScores'],
                label: "Sadness",
                borderColor: "#BF05FF",
                fill: false
              },
              {
                data: data['analyticalScores'],
                label: "Analytical",
                borderColor: "#05FFB7",
                fill: false
              }, {
                data: data['confidentScores'],
                label: "Confident",
                borderColor: "#263F27",
                fill: false
              }, {
                data: data['tentativeScores'],
                label: "Tentative",
                borderColor: "#EA97E6",
                borderDash: [5, 5],
                fill: false
              }
            ]
          },
          options: {
            responsive: false,
            title: {
              display: true,
              text: 'User Emotions Over Time'
            },
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Percentage of Post Containing Emotion'
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Post Date - M/D/Y'
                }
              }]
            }
          }
        });
      })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
      console.log("Finished creating chart");
    }
  }
</script>

<style scoped>
  #myChart {
    width: 100%;
    height: 100%;
  }
</style>