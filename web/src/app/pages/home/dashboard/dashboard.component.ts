import { Component, OnInit } from '@angular/core';


import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

//Servicios
import { Card, CardRifasService } from '../../../services/card-rifas.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public seleccione: any;
  public dias: any;
  public boletosVendidos: any;
  public invitacionesBoletos: any;
  public rentabilidad: any;
  mostrarFiltro = false;
  Card: Card[] = [];


  constructor( private _CardRifasService: CardRifasService  ) {}

  ngOnInit(): void {
    //Servicio Top Rifas
    this.Card = this._CardRifasService.getCard();
    //  console.log(' esta data del servicio', this.Card);

    this.seleccione = [
      {
        id: '2303 - Televisor Samsung 40 pulgadas',
        text: '2303 - Televisor Samsung 40 pulgadas',
      },
      {
        id: '1828 - Portatil Lenovo 14” Core i5',
        text: '1828 - Portatil Lenovo 14” Core i5',
      },
      {
        id: '1634 - Viaje para dos personas a San Andres',
        text: '1634 - Viaje para dos personas a San Andres',
      },
      {
        id: '1256 - Camiseta selección colombia',
        text: '1256 - Camiseta selección colombia',
      },
      {
        id: '1103 - Maleta Totto',
        text: '1103 - Maleta Totto',
      },
    ];

    this.dias = [
      {
        id: 'Ultimos 7 dias',
        text: 'Ultimos 7 dias',
      },
      {
        id: 'Ultimos 15 dias',
        text: 'Ultimos 15 dias',
      },
      {
        id: 'Ultimos 20 dias',
        text: 'Ultimos 20 dias',
      },
      {
        id: 'Ultimos 30 dias',
        text: 'Ultimos 30 dias',
      },
    ];

    this.mostrarGraficaBoletosVendidos();
    this.mostrarInvitacionesBoletos();
    this.mostrarGraficaRentabilidad();
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
    chart.padding(20, 20, 20, 10);

    // Crear Ejes
    // tslint:disable-next-line: prefer-const
    var ejeFecha = chart.xAxes.push(new am4charts.CategoryAxis());
    ejeFecha.dataFields.category = 'dia';
    ejeFecha.renderer.grid.template.location = 0;
    ejeFecha.renderer.grid.template.disabled = true;
    ejeFecha.renderer.labels.template.fill = am4core.color('#C7CBDD');
    ejeFecha.renderer.labels.template.fontSize = 8;
    ejeFecha.renderer.minGridDistance = 0;

    var ejeValores = chart.yAxes.push(new am4charts.ValueAxis());
    ejeValores.renderer.grid.template.strokeOpacity = 1;
    ejeValores.renderer.grid.template.stroke = am4core.color('#F1F3F8');
    ejeValores.renderer.grid.template.strokeDasharray = '8,10';
    ejeValores.renderer.labels.template.fill = am4core.color('#C7CBDD');
    ejeValores.renderer.labels.template.fontSize = 8;
    ejeValores.cursorTooltipEnabled = false;

    // Crear series
    // tslint:disable-next-line: prefer-const
    let serieInvitaciones = chart.series.push(new am4charts.ColumnSeries());
    serieInvitaciones.dataFields.valueY = 'invitaciones';
    serieInvitaciones.dataFields.categoryX = 'dia';
    serieInvitaciones.name = 'Invitaciones';
    serieInvitaciones.clustered = false;
    serieInvitaciones.columns.template.fill = am4core.color('#4f78e0');
    serieInvitaciones.columns.template.width = am4core.percent(45);
    serieInvitaciones.columns.template.column.cornerRadiusTopLeft = 7;
    serieInvitaciones.columns.template.column.cornerRadiusTopRight = 7;
    serieInvitaciones.columns.template.column.cornerRadiusBottomLeft = 7;
    serieInvitaciones.columns.template.column.cornerRadiusBottomRight = 7;
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
    serieBoletos.strokeWidth = 3;
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
    chart2.radius = am4core.percent(65);
    chart2.innerRadius = am4core.percent(52);

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
    pieSeries.slices.template.strokeWidth = 5;
    pieSeries.slices.template.strokeOpacity = 5;
    pieSeries.labels.template.disabled = true;
    pieSeries.slices.template.cornerRadius = 5;
    pieSeries.slices.template.innerCornerRadius = 5;
    pieSeries.tooltip.getFillFromObject = false;
    pieSeries.tooltip.background.fill = am4core.color('#C7CBDD');
    pieSeries.tooltip.background.cornerRadius = 5;
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

  mostrarGraficaRentabilidad() {
    // Datos
    this.rentabilidad = [
      {
        mes: 'Jun',
        rentabilidad: 11982,
      },
      {
        mes: 'Jul',
        rentabilidad: 18212,
      },
      {
        mes: 'Ago',
        rentabilidad: 28982,
      },
      {
        mes: 'Sep',
        rentabilidad: 23882,
      },
      {
        mes: 'Oct',
        rentabilidad: 29120,
      },
      {
        mes: 'Nov',
        rentabilidad: 30982,
      },
      {
        mes: 'Dic',
        rentabilidad: 35003,
      },
      {
        mes: 'Ene',
        rentabilidad: 32289,
      },
      {
        mes: 'Feb',
        rentabilidad: 27293,
      },
      {
        mes: 'Abr',
        rentabilidad: 24980,
      },
      {
        mes: 'May',
        rentabilidad: 14230,
      },
    ];

    // RENTABILIDAD
    // Crear Instancia Gráfico
    am4core.useTheme(am4themes_animated);
    const chartR = am4core.create('rentabilidad', am4charts.XYChart);
    chartR.numberFormatter.numberFormat = '# a';
    chartR.data = this.rentabilidad;
    chartR.padding(10, 10, 10, 10);

    // Crear Ejes
    var ejeFecha = chartR.xAxes.push(new am4charts.CategoryAxis());
    ejeFecha.dataFields.category = 'mes';
    ejeFecha.renderer.grid.template.location = 0;
    ejeFecha.renderer.grid.template.disabled = true;
    ejeFecha.renderer.labels.template.fill = am4core.color('#C7CBDD');
    ejeFecha.renderer.labels.template.fontSize = 6;
    ejeFecha.renderer.minGridDistance = 3;

    var ejeValores = chartR.yAxes.push(new am4charts.ValueAxis());
    ejeValores.renderer.grid.template.strokeOpacity = 1;
    ejeValores.renderer.grid.template.stroke = am4core.color('#F1F3F8');
    ejeValores.renderer.labels.template.disabled = true;

    var serieRentabilidad = chartR.series.push(new am4charts.LineSeries());
    serieRentabilidad.dataFields.valueY = 'rentabilidad';
    serieRentabilidad.name = 'Rentabilidad';
    serieRentabilidad.dataFields.categoryX = 'mes';
    serieRentabilidad.stroke = am4core.color('#4F78E0');
    serieRentabilidad.strokeWidth = 3;
    serieRentabilidad.tensionX = 0.7;
    serieRentabilidad.fillOpacity = 0.1;
    serieRentabilidad.fill = am4core.color('#4F78E0');
    serieRentabilidad.tooltipText = '{name}: [bold]{valueY}[/]';
    serieRentabilidad.tooltip.getFillFromObject = false;
    serieRentabilidad.tooltip.background.fill = am4core.color('#7DD7F9');
    serieRentabilidad.tooltip.background.cornerRadius = 5;
    serieRentabilidad.tooltip.background.filters.clear();

    // axis ranges
    var range = ejeFecha.axisRanges.create();
    range.category = 'My';
    range.axisFill.fill = am4core.color('#C6F0FC');
    range.axisFill.fillOpacity = 0.2;
    range.axisFill.strokeWidth = 0;
    range.grid.strokeOpacity = 0;

    var fechaTooltip = ejeFecha.tooltip;
    fechaTooltip.background.fill = am4core.color('#C7CBDD');
    fechaTooltip.background.strokeWidth = 0;
    fechaTooltip.background.cornerRadius = 5;
  }
}
