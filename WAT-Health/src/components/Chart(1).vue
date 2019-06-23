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
  export default {
    name: "Chart",
    mounted() {
      let times = ["Mar 6 2016", "Apr 2017", "June 2017", "Apr 2019"];

// For drawing the lines
      let angerScores = [Math.random(), Math.random(), Math.random(), Math.random()];
      let fearScores = [Math.random(), Math.random(), Math.random(), Math.random()];
      let joyScores = [Math.random(), Math.random(), Math.random(), Math.random()];
      let sadnessScores = [Math.random(), Math.random(), Math.random(), Math.random()];
      let analyticalScores = [Math.random(), Math.random(), Math.random(), Math.random()];
      let confidentScores = [Math.random(), Math.random(), Math.random(), Math.random()];
      let tentativeScores = [Math.random(), Math.random(), Math.random(), Math.random()];

      console.log("HERE !!!!!!");

      let ctx = document.getElementById("myChart");
      let myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: times,
          datasets: [
            {
              data: angerScores,
              label: "Anger",
              borderColor: "#FF3105",
              fill: false
            },
            {
              data: fearScores,
              label: "Fear",
              borderColor: "#05A8FF",
              fill: false
            },
            {
              data: joyScores,
              label: "Joy",
              borderColor: "#FFA005",
              fill: false
            },
            {
              data: sadnessScores,
              label: "Sadness",
              borderColor: "#BF05FF",
              fill: false
            },
            {
              data: analyticalScores,
              label: "Analytical",
              borderColor: "#05FFB7",
              fill: false
            }, {
              data: confidentScores,
              label: "Confident",
              borderColor: "#263F27",
              fill: false
            }, {
              data: tentativeScores,
              label: "Tentative",
              borderColor: "#EA97E6",
              borderDash: [5, 5],
              fill: false
            }
          ]
        },
        options: {
          responsive: false, title: {
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
                labelString: 'Post Date'
              }
            }]
          }
        }
      });
    }
  }
</script>

<style scoped>
  #myChart {
    width: 100%;
    height: 100%;
  }
</style>
