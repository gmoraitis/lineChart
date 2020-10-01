$(function () {
    
    var DataModel = Backbone.Model.extend({});

    var DataCollection = Backbone.Collection.extend({
        model: DataModel
    });

    var DataView = Backbone.View.extend({
        el: '#container',
        initialize: function (options) {
            this.data = options.data;
        },
        render: function () {
            this.$el.highcharts({
                title: {
                    text: 'Sales Plot',
                    x: -20 //center
                },
                subtitle: {
                    text: 'With Backbone.js',
                    x: -20
                },
                xAxis: {
                    categories: ['1980', '1985', '1990', '1995', '2000']
                },
                yAxis: {
                    title: {
                        text: 'Sales $'
                    },
                    plotLines: [{
                        value: 0,
                        width: 5,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°$'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: this.data.toJSON()
            });
        }
    });

    var items = new DataCollection([{
        name: 'A Client',
        data: [14000,22000,14000,87000,43400]
    } 
     ]);

    var view = new DataView({ data: items });

    view.render();

});