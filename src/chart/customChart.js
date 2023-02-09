const ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  backgroundColor: "red",
  data: {
    labels: ["may", "jun", "july", "aug", "sept", "oct", "nov", "dec"],
    datasets: [
      {
        label: "mobile app",
        tension: 0.4,
        pointRadius: 0,
        data: ["0", "20", "10", "30", "18", "40", "21", "60"],
        borderWidth: 1,
        borderWidth: 5,
        borderColor: "#5E72E4",
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 90,
        bottom: 0,
        right: 50,
        left: 50,
      },
    },
    tooltips: {
      backgroundColor: "red",
      intersect: false,
      backgroundColor: "#090b0b9c",
      titleFontColor: "#FFFFFF",
      bodyFontColor: "#FFFFFF",
      xPadding: 15,
      yPadding: 15,
      caretPadding: 5,
      caretSize: 10,
      cornerRadius: 5,
    },
    interaction: {
      intersect: false,
    },
    legend: {
      display: false,
    },
    animation: {
      duration: 3000,
      easing: "easeOutQuint",
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [5, 5],
          },
          ticks: {
            beginAtZero: 0,
            max: 60,
            stepSize: 10,
            callback: function (value, index, values) {
              return "$" + value + "k";
            },
          },
        },
      ],
    },
  },
});

// bar chart

const ctc = document.getElementById("myBarChart").getContext("2d");

new Chart(ctc, {
  type: "bar",
  backgroundColor: "red",
  data: {
    labels: ["july", "aug", "sept", "oct", "nov", "dec"],
    datasets: [
      {
        label: "mobile app",
        tension: 0.4,
        pointRadius: 10,
        data: ["25", "20", "30", "22", "18", "29"],
        barThickness: 30,
        borderWidth: 2,
        borderRadius: 20, // This will round the corners
        borderSkipped: false,
        backgroundColor: "#FB6340",
      },
    ],
  },

  options: {
    layout: {
      padding: {
        top: 90,
        bottom: 0,
        right: 50,
        left: 50,
      },
    },
    tooltips: {
      backgroundColor: "red",
      intersect: false,
      backgroundColor: "#090b0b9c",
      titleFontColor: "#FFFFFF",
      bodyFontColor: "#FFFFFF",
      xPadding: 15,
      yPadding: 15,
      caretPadding: 5,
      caretSize: 10,
    },
    interaction: {
      intersect: false,
    },
    legend: {
      display: false,
    },
    animation: {
      duration: 3000,
      easing: "easeOutQuint",
    },
    scales: {
      xAxes: [
        {
          barThickness: 11,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [5, 5],
          },
          ticks: {
            beginAtZero: 0,
            max: 30,
            stepSize: 10,
          },
        },
      ],
    },
  },
});
