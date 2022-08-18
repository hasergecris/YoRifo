import { Component, OnInit } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent implements OnInit {
  public boletosVendidos: any;
  public invitacionesBoletos: any;

  constructor() {}

  ngOnInit(): void {
    // GRAFICAS

    // BOLETOS VENDIDOS

    this.boletosVendidos = [
      {
        dia: '7 May',
        invitaciones: 30,
        boletos: 10,
      },
      {
        dia: '8 May',
        invitaciones: 50,
        boletos: 35,
      },
      {
        dia: '9 May',
        invitaciones: 20,
        boletos: 12,
      },
      {
        dia: '10 May',
        invitaciones: 30,
        boletos: 18,
      },
      {
        dia: '11 May',
        invitaciones: 50,
        boletos: 34,
      },
      {
        dia: '12 May',
        invitaciones: 24,
        boletos: 14,
      },
      {
        dia: '13 May',
        invitaciones: 18,
        boletos: 10,
      },
    ];

    this.mostrarGraficaBoletosVendidos();
    this.mostrarInvitacionesBoletos();
    this.mostrarGraficaBoletos();
  }
  
  mostrarGraficaBoletosVendidos() {
    // BOLETOS VENDIDOS
    this.boletosVendidos = [
      {
        dia: '7 May',
        invitaciones: 30,
        boletos: 10,
      },
      {
        dia: '8 May',
        invitaciones: 50,
        boletos: 35,
      },
      {
        dia: '9 May',
        invitaciones: 20,
        boletos: 12,
      },
      {
        dia: '10 May',
        invitaciones: 30,
        boletos: 18,
      },
      {
        dia: '11 May',
        invitaciones: 50,
        boletos: 34,
      },
      {
        dia: '12 May',
        invitaciones: 24,
        boletos: 14,
      },
      {
        dia: '13 May',
        invitaciones: 18,
        boletos: 10,
      },
    ];

    am4core.useTheme(am4themes_animated);
    const chart = am4core.create('boletosVendidos', am4charts.XYChart);
    chart.data = this.boletosVendidos;
    chart.padding(30, 20, 10, 20);

    // Crear Ejes
    // tslint:disable-next-line: prefer-const
    var ejeFecha = chart.xAxes.push(new am4charts.CategoryAxis());
    ejeFecha.dataFields.category = 'dia';
    ejeFecha.renderer.grid.template.location = 0;
    ejeFecha.renderer.grid.template.disabled = true;
    ejeFecha.renderer.labels.template.fill = am4core.color('#C7CBDD');
    ejeFecha.renderer.labels.template.fontSize = 10;
    ejeFecha.renderer.minGridDistance = 10;

    var ejeValores = chart.yAxes.push(new am4charts.ValueAxis());
    ejeValores.renderer.grid.template.strokeOpacity = 1;
    ejeValores.renderer.grid.template.stroke = am4core.color('#F1F3F8');
    ejeValores.renderer.grid.template.strokeDasharray = '8,10';
    ejeValores.renderer.labels.template.fill = am4core.color('#C7CBDD');
    ejeValores.renderer.labels.template.fontSize = 10;
    ejeValores.cursorTooltipEnabled = false;

    // Crear series
    // tslint:disable-next-line: prefer-const
    let serieInvitaciones = chart.series.push(new am4charts.ColumnSeries());
    serieInvitaciones.dataFields.valueY = 'invitaciones';
    serieInvitaciones.dataFields.categoryX = 'dia';
    serieInvitaciones.name = 'Invitaciones';
    serieInvitaciones.clustered = false;
    serieInvitaciones.columns.template.fill = am4core.color('#4f78e0');
    serieInvitaciones.columns.template.width = am4core.percent(35);
    serieInvitaciones.columns.template.column.cornerRadiusTopLeft = 5;
    serieInvitaciones.columns.template.column.cornerRadiusTopRight = 5;
    serieInvitaciones.columns.template.column.cornerRadiusBottomLeft = 5;
    serieInvitaciones.columns.template.column.cornerRadiusBottomRight = 5;
    serieInvitaciones.tooltipText = '{name}: [bold]{valueY}[/]';
    serieInvitaciones.tooltip.getFillFromObject = false;
    serieInvitaciones.tooltip.background.fill = am4core.color('#4f78e0');
    serieInvitaciones.tooltip.background.cornerRadius = 5;
    serieInvitaciones.tooltip.background.filters.clear();

    let serieBoletos = chart.series.push(new am4charts.LineSeries());
    serieBoletos.dataFields.valueY = 'boletos';
    serieBoletos.name = 'Boletos';
    serieBoletos.dataFields.categoryX = 'dia';
    serieBoletos.stroke = am4core.color('#7DD7F9');
    serieBoletos.strokeWidth = 4;
    serieBoletos.tensionX = 0.7;
    serieBoletos.tooltipText = '{name}: [bold]{valueY}[/]';
    serieBoletos.tooltip.getFillFromObject = false;
    serieBoletos.tooltip.background.fill = am4core.color('#7DD7F9');
    serieBoletos.tooltip.background.cornerRadius = 5;
    serieBoletos.tooltip.background.filters.clear();

    let bullet = serieBoletos.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 4;
    bullet.circle.strokeWidth = 2;
    bullet.circle.fill = am4core.color('#fff');

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;

    // tslint:disable-next-line: prefer-const
    var fechaTooltip = ejeFecha.tooltip;
    fechaTooltip.background.fill = am4core.color('#EB5995');
    fechaTooltip.background.strokeWidth = 0;
    fechaTooltip.background.cornerRadius = 5;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;
  }

  mostrarInvitacionesBoletos() {
    // Add data
    this.invitacionesBoletos = [
      {
        categoria: 'Invitaciones',
        valor: 800,
        color: am4core.color('#4f78e0'),
      },
      {
        categoria: 'Boletos',
        valor: 150,
        color: am4core.color('#7DD7F9'),
      },
    ];

    //  INVITACIONES VS BOLETOS
    // Se crea el gráfico
    const chart2 = am4core.create('invitacionesBoletos', am4charts.PieChart);
    chart2.data = this.invitacionesBoletos;

    // Configuraciones del gráfico
    chart2.radius = am4core.percent(57);
    chart2.innerRadius = am4core.percent(45);

    var textoCentral = chart2.seriesContainer.createChild(am4core.Label);
    textoCentral.text = '15,8%';
    textoCentral.horizontalCenter = 'middle';
    textoCentral.verticalCenter = 'middle';
    textoCentral.fontSize = 20;
    textoCentral.fill = am4core.color('#4f78e0');

    // Configuración Series
    var pieSeries = chart2.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'valor';
    pieSeries.dataFields.category = 'categoria';
    pieSeries.slices.template.propertyFields.fill = 'color';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 6;
    pieSeries.slices.template.strokeOpacity = 6;
    pieSeries.labels.template.disabled = true;
    pieSeries.slices.template.cornerRadius = 6;
    pieSeries.slices.template.innerCornerRadius = 6;
    pieSeries.tooltip.getFillFromObject = false;
    pieSeries.tooltip.background.fill = am4core.color('#C7CBDD');
    pieSeries.tooltip.background.cornerRadius = 6;
    pieSeries.tooltip.background.filters.clear();
    pieSeries.slices.template.tooltipText = '{category}: {value}';

    var shadow = pieSeries.slices.template.filters.push(
      new am4core.DropShadowFilter()
    );

    shadow.color = am4core.color('#E4E4F4');
    shadow.dx = 0;
    shadow.dy = 20;
    shadow.blur = 8;

    // Crear la animación
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }

  mostrarGraficaBoletos() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // create chart
    let chart = am4core.create('graficaBoletos', am4charts.GaugeChart);
    chart.hiddenState.properties.opacity = 0;
    chart.innerRadius = am4core.percent(90);

    let axis = chart.xAxes.push(
      new am4charts.ValueAxis<am4charts.AxisRendererCircular>()
    );
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;
    axis.renderer.labels.template.disabled = true;
    axis.renderer.ticks.template.disabled = true;
    axis.renderer.grid.template.disabled = true;

    var shadow = axis.filters.push(new am4core.DropShadowFilter());
    shadow.color = am4core.color('#E4E4F4');
    shadow.dx = 0;
    shadow.dy = 10;
    shadow.blur = 10;

    let colorSet = new am4core.ColorSet();

    let range0 = axis.axisRanges.create();
    range0.value = 0;
    range0.endValue = 65;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = am4core.color('#7DD7F9');
    range0.axisFill.zIndex = -1;

    let range1 = axis.axisRanges.create();
    range1.value = 65;
    range1.endValue = 100;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = am4core.color('#EDF1FC');
    range1.axisFill.zIndex = -1;

    //Manecilla
    var hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis;
    hand.innerRadius = am4core.percent(0);
    hand.startWidth = 10;
    hand.fill = am4core.color('#4C6F91');
    hand.strokeWidth = 1;
    hand.stroke = am4core.color('#fff');
    hand.pin.disabled = false;
    hand.value = 65;

    hand.events.on('propertychanged', function (ev) {
      range0.endValue = ev.target.value;
      range1.value = ev.target.value;
      axis.invalidate();
    });

    var labelList = new am4core.ListTemplate(new am4core.Label());
    labelList.template.isMeasured = false;
    labelList.template.fontSize = 20;
    labelList.template.fill = am4core.color('#4C6F91');
    labelList.template.y = am4core.percent(90);
    labelList.template.horizontalCenter = 'middle';

    var label = labelList.create();
    label.parent = chart.chartContainer;
    label.x = am4core.percent(50);
    label.background.strokeWidth = 0;
    label.text = '78/100';
  }
}

