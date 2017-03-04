 google.charts.load("current", {packages:["sankey"]});
  google.charts.setOnLoadCallback(drawChart);
   function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows([
        ["China", 	"Top 4",    1],
        ["China", 	"Top 4",	0],
        ["China", 	"Top 4",	2],
        ["China", 	"Top 4",	1],
        ["China", 	"Top 4",	0],
        ["China", 	"Top 8",	3],
        ["China", 	"Top 8",	0],
        ["China", 	"Top 8",	1],
        ["China", 	"Top 8",	1],
        ["China", 	"Top 8",	1],
        ["EU", 	"Top 4",	2],
        ["EU", 	"Top 4",	2],
        ["EU", 	"Top 4",	2],
        ["EU", 	"Top 4",	0],
        ["EU", 	"Top 4",	2],
        ["EU", 	"Top 8", 	1],
        ["EU", 	"Top 8", 	2],
        ["EU", 	"Top 8", 	1],
        ["EU", 	"Top 8", 	1],
        ["EU", 	"Top 8", 	1],
        ["NA", 	"Top 4",	1],
        ["NA", 	"Top 4",	1],
        ["NA", 	"Top 4",	0],
        ["NA", 	"Top 4",	2],
        ["NA", 	"Top 4",	2],
        ["NA", 	"Top 8",	0],
        ["NA", 	"Top 8",	1],
        ["NA", 	"Top 8",	0],
        ["NA", 	"Top 8",	0],
        ["NA", 	"Top 8",	1],
        ["SEA", 	"Top 4",	0],
        ["SEA", 	"Top 4",	1],
        ["SEA", 	"Top 4",	0],
        ["SEA", 	"Top 4",	1],
        ["SEA", 	"Top 4",	0],
        ["SEA", 	"Top 8",	0],
        ["SEA", 	"Top 8",	1],
        ["SEA", 	"Top 8",	2],
        ["SEA", 	"Top 8",	2],
        ["SEA", 	"Top 8",	1],
        ["China", 	"Below 8",	2],
        ["China", 	"Below 8",	5],
        ["China", 	"Below 8",	1],
        ["China", 	"Below 8",	3],
        ["China", 	"Below 8",	4],
        ["EU", 	"Below 8",	2],
        ["EU", 	"Below 8",	2],
        ["EU", 	"Below 8",	3],
        ["EU", 	"Below 8",	5],
        ["EU", 	"Below 8",	0],
        ["SEA", "Below 8",	2],
        ["SEA", "Below 8",	0],
        ["SEA", "Below 8",	1],
        ["SEA", "Below 8",	0],
        ["SEA", "Below 8",	2],
        ["NA", 	"Below 8",	2],
        ["NA", 	"Below 8",	1],
        ["NA", 	"Below 8",	3],
        ["NA", 	"Below 8",	0],
        ["NA", 	"Below 8",	1],
        ["Frankfurt", "China", 		6],
        ["Shanghai", "China",	5],
        ["Manila", "China", 4],
        ["The International 6","China",	5],
        ["Boston", "China", 5],
        ["Frankfurt", "EU", 	5],
        ["Shanghai", "EU", 6],
        ["Manila",	"EU", 6],
        ["The International 6","EU",	6],
        ["Boston",	"EU", 3],
        ["Frankfurt","NA", 		3],
        ["Shanghai", "NA", 		3],
        ["Manila", "NA", 	3],
        ["The International 6", "NA", 2],
        ["Boston", "NA", 4],
        ["Frankfurt",	"SEA", 2],
        ["Shanghai",	"SEA", 	2],
        ["Manila",	"SEA", 	3],
        ["The International 6",	"SEA", 	3],
        ["Boston",	"SEA", 	3]
      
       

    ]);
    
    var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];
                  
    // Set chart options
    var options = {
      height: 720,
      width: 1280,
      sankey: {
        node: {
          colors: colors
        },
        link: {
          colorMode: 'gradient',
          colors: colors
        }
      }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
    chart.draw(data, options);
    
   }
  
