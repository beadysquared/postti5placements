 google.charts.load("current", {packages:["sankey"]});
  google.charts.setOnLoadCallback(drawChart);
   function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Number of Slots');
    data.addColumn({ type:'string', role : 'style'} );
    data.addColumn({ type: 'string', role : 'tooltip'});
    data.addRows([
        [	'Frankfurt',		'Top 4',	1	,	'#a6cee3',	'China']
        [	'Shanghai',		'Top 4',	0	,	'#a6cee3',	'China ']
        [	'Manila',		'Top 4',	2	,	'#a6cee3',	'China ']
        [	'The International 6',		'Top 4',	1	,	'#a6cee3',	'China ']
        [	'Boston',		'Top 4',	0	,	'#a6cee3',	'China ']
        [	'Frankfurt',		'Top 8',	3	,	'#a6cee3',	'China ']
        [	'Shanghai',		'Top 8',	0	,	'#a6cee3',	'China ']
        [	'Manila',		'Top 8',	1	,	'#a6cee3',	'China ']
        [	'The International 6',		'Top 8',	1	,	'#a6cee3',	'China ']
        [	'Boston',		'Top 8',	1	,	'#a6cee3',	'China ']
        [	'Frankfurt',		'Below 8',	2	,	'#a6cee3',	'China ']
        [	'Shanghai',		'Below 8',	5	,	'#a6cee3',	'China ']
        [	'Manila',		'Below 8',	1	,	'#a6cee3',	'China ']
        [	'The International 6',		'Below 8',	3	,	'#a6cee3',	'China ']
        [	'Boston',		'Below 8',	4	,	'#a6cee3',	'China ']
        [	'Frankfurt',		'Top 4',	2	,	'#b2df8a',	'EU ']
        [	'Shanghai',		'Top 4',	2	,	'#b2df8a',	'EU ']
        [	'Manila',		'Top 4',	2	,	'#b2df8a',	'EU ']
        [	'The International 6',		'Top 4',	0	,	'#b2df8a',	'EU ']
        [	'Boston',		'Top 4',	2	,	'#b2df8a',	'EU ']
        [	'Frankfurt',		'Top 8 ',	1	,	'#b2df8a',	'EU ']
        [	'Shanghai',		'Top 8 ',	2	,	'#b2df8a',	'EU ']
        [	'Manila',		'Top 8 ',	1	,	'#b2df8a',	'EU ']
        [	'The International 6',		'Top 8 ',	1	,	'#b2df8a',	'EU ']
        [	'Boston',		'Top 8 ',	1	,	'#b2df8a',	'EU ']
        [	'Frankfurt',		'Below 8',	2	,	'#b2df8a',	'EU ']
        [	'Shanghai',		'Below 8',	2	,	'#b2df8a',	'EU ']
        [	'Manila',		'Below 8',	3	,	'#b2df8a',	'EU ']
        [	'The International 6',		'Below 8',	5	,	'#b2df8a',	'EU ']
        [	'Boston',		'Below 8',	0	,	'#b2df8a',	'EU ']
        [	'Frankfurt',		'Top 4',	1	,	'#fb9a99',	'NA ']
        [	'Shanghai',		'Top 4',	1	,	'#fb9a99',	'NA ']
        [	'Manila',		'Top 4',	0	,	'#fb9a99',	'NA ']
        [	'The International 6',		'Top 4',	2	,	'#fb9a99',	'NA ']
        [	'Boston',		'Top 4',	2	,	'#fb9a99',	'NA ']
        [	'Frankfurt',		'Top 8',	0	,	'#fb9a99',	'NA ']
        [	'Shanghai',		'Top 8',	1	,	'#fb9a99',	'NA ']
        [	'Manila',		'Top 8',	0	,	'#fb9a99',	'NA ']
        [	'The International 6',		'Top 8',	0	,	'#fb9a99',	'NA ']
        [	'Boston',		'Top 8',	1	,	'#fb9a99',	'NA ']
        [	'Frankfurt',		'Below 8',	2	,	'#fb9a99',	'NA ']
        [	'Shanghai',		'Below 8',	1	,	'#fb9a99',	'NA ']
        [	'Manila',		'Below 8',	3	,	'#fb9a99',	'NA ']
        [	'The International 6',		'Below 8',	0	,	'#fb9a99',	'NA ']
        [	'Boston',		'Below 8',	1	,	'#fb9a99',	'NA ']
        [	'Frankfurt',		'Top 4',	0	,	'#33a02c',	'SEA ']
        [	'Shanghai',		'Top 4',	1	,	'#33a02c',	'SEA ']
        [	'Manila',		'Top 4',	0	,	'#33a02c',	'SEA ']
        [	'The International 6',		'Top 4',	1	,	'#33a02c',	'SEA ']
        [	'Boston',		'Top 4',	0	,	'#33a02c',	'SEA ']
        [	'Frankfurt',		'Top 8',	0	,	'#33a02c',	'SEA ']
        [	'Shanghai',		'Top 8',	1	,	'#33a02c',	'SEA ']
        [	'Manila',		'Top 8',	2	,	'#33a02c',	'SEA ']
        [	'The International 6',		'Top 8',	2	,	'#33a02c',	'SEA ']
        [	'Boston',		'Top 8',	1	,	'#33a02c',	'SEA ']
        [	'Frankfurt',		'Below 8',	2	,	'#33a02c',	'SEA ']
        [	'Shanghai',		'Below 8',	0	,	'#33a02c',	'SEA ']
        [	'Manila',		'Below 8',	1	,	'#33a02c',	'SEA ']
        [	'The International 6',		'Below 8',	0	,	'#33a02c',	'SEA ']
        [	'Boston',		'Below 8',	2	,	'#33a02c',	'SEA ']

       

    ]);
    
    var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];
                  
    // Set chart options
    var options = {
      height: 720,
      width: 1280,
      sankey: {
        link: {
          colorMode: 'gradient',
        }
      }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
    chart.draw(data, options);
    
   }
  
