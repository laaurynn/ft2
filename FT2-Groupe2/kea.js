am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// create chart
var chart = am4core.create("Dataviz1", am4charts.GaugeChart);
chart.innerRadius = am4core.percent(82);

/**
 * Normal axisx
 */

var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = 0;
axis.max = 100;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 1;
axis.renderer.ticks.template.disabled = false
axis.renderer.ticks.template.strokeOpacity = 1;
axis.renderer.ticks.template.length = 10;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = 40;
axis.renderer.labels.template.adapter.add("text", function(text) {
  return text + "%";
})

/**
 * Axis for ranges
 */

var colorSet = new am4core.ColorSet();

var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = 0;
axis2.max = 100;
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = true;

var range0 = axis2.axisRanges.create();
range0.value = 0;
range0.endValue = 50;
range0.axisFill.fillOpacity = 1;
range0.axisFill.fill = colorSet.getIndex(0);

var range1 = axis2.axisRanges.create();
range1.value = 50;
range1.endValue = 100;
range1.axisFill.fillOpacity = 1;
range1.axisFill.fill = colorSet.getIndex(2);

/**
 * Label
 */

var label = chart.radarContainer.createChild(am4core.Label);
label.isMeasured = false;
label.fontSize = 45;
label.x = am4core.percent(50);
label.y = am4core.percent(100);
label.horizontalCenter = "middle";
label.verticalCenter = "bottom";
label.text = "50%";


/**
 * Hand
 */

var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.innerRadius = am4core.percent(20);
hand.startWidth = 10;
hand.pin.disabled = true;
hand.value = 50;

hand.events.on("propertychanged", function(ev) {
  range0.endValue = ev.target.value;
  range1.value = ev.target.value;
  label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
  axis2.invalidate();
});

setInterval(function() {
  var value = Math.round(40);
  var animation = new am4core.Animation(hand, {
    property: "value",
    to: value
  }, 1000, am4core.ease.cubicOut).start();
}, 2000);

}); // end am4core.ready()

am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end



// Create chart instance
var chart = am4core.create("Dataviz2", am4charts.RadarChart);

// Add data
chart.data = [{
  "category": "Profils commerciaux",
  "value": 71,
  "full": 100
}, {
  "category": "Profils ingénieurs",
  "value": 27,
  "full": 100
}, {
  "category": "Profils autres",
  "value": 2,
  "full": 100
}];

// Make chart not full circle
chart.startAngle = -90;
chart.endAngle = 180;
chart.innerRadius = am4core.percent(20);

// Set number format
chart.numberFormatter.numberFormat = "#.#'%'";

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.strokeOpacity = 0;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.fontWeight = 500;
categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
  return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
});
categoryAxis.renderer.minGridDistance = 10;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeOpacity = 0;
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;

// Create series
var series1 = chart.series.push(new am4charts.RadarColumnSeries());
series1.dataFields.valueX = "full";
series1.dataFields.categoryY = "category";
series1.clustered = false;
series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
series1.columns.template.fillOpacity = 0.08;
series1.columns.template.cornerRadiusTopLeft = 20;
series1.columns.template.strokeWidth = 0;
series1.columns.template.radarColumn.cornerRadius = 20;

var series2 = chart.series.push(new am4charts.RadarColumnSeries());
series2.dataFields.valueX = "value";
series2.dataFields.categoryY = "category";
series2.clustered = false;
series2.columns.template.strokeWidth = 0;
series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
series2.columns.template.radarColumn.cornerRadius = 20;

series2.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});

// Add cursor
chart.cursor = new am4charts.RadarCursor();


}); // end am4core.ready()


// Dataviz3
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("Dataviz3", am4charts.XYChart3D);

// Add data
chart.data = [{
  "Métier": "Management et technologie",
  "visits": 1000,
  "color": chart.colors.next()
}, {
  "Métier": "Audit / expertise comptable",
  "visits": 2000,
  "color": chart.colors.next()
}, {
  "Métier": "Conseil",
  "visits": 3000,
  "color": chart.colors.next()
}, {
  "Métier": "Communication / Média",
  "visits": 4000,
  "color": chart.colors.next()
}, {
  "Métier": "Conseil en stratégie",
  "visits": 5000,
  "color": chart.colors.next()
}, {
  "Métier": "Transport logique",
  "visits": 6000,
  "color": chart.colors.next()
}, {
  "Métier": "Énergie / Environnement",
  "visits": 7000,
  "color": chart.colors.next()
}, {
  "Métier": "IT/Digital",
  "visits": 8000,
  "color": chart.colors.next()
}, {
  "Métier": "Bien de Communication",
  "visits": 9000,
  "color": chart.colors.next()
}, {
  "Métier": "Conseil en stratégie",
  "visits": 10000,
  "color": chart.colors.next()
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Métier";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.renderer.labels.template.hideOversized = false;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.tooltip.label.rotation = 270;
categoryAxis.tooltip.label.horizontalCenter = "right";
categoryAxis.tooltip.label.verticalCenter = "middle";

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Métier";
valueAxis.title.fontWeight = "bold";

// Create series
var series = chart.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "Métier";
series.name = "Visits";
series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;
series.columns.template.propertyFields.fill = "color";

var columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = am4core.color("#FFFFFF");

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.strokeOpacity = 0;
chart.cursor.lineY.strokeOpacity = 0;

// Enable export
chart.exporting.menu = new am4core.ExportMenu();

}); // end am4core.ready()