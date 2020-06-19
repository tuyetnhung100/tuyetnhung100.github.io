jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Sql Chart
  var doughnutData = [{
      value: 70,
      color: "#eb608d"
    },
    {
      value: 30,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("sql").getContext("2d")).Doughnut(doughnutData);

  // C Chart
  var doughnutData = [{
    value: 70,
    color: "#eb608d"
  },
  {
    value: 10,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("c").getContext("2d")).Doughnut(doughnutData);

  // C++ Chart
  var doughnutData = [{
    value: 65,
    color: "#eb608d"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("c++").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 80,
    color: "#eb608d"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // C# Chart
  var doughnutData = [{
    value: 70,
    color: "#eb608d"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("c#").getContext("2d")).Doughnut(doughnutData);

  // Asp.net Chart
  var doughnutData = [{
    value: 50,
    color: "#eb608d"
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("asp.net").getContext("2d")).Doughnut(doughnutData);
});
