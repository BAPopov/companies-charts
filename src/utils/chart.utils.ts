import { Options } from 'highcharts';

export const createChartOptions = (companyDataset: [date: string, value: number][], value: string, name: string): Options => {
    return {
        chart: {
            zooming: {
                type: 'x'
            },
            resetZoomButton: {
                position: {
                    x: 0,
                    y: 0,
                },
            },
            type: "line",
        },
        title: {
            text: name,
            align: "left",
            margin: 20,
            x: 30,
            style: {
                fontSize: "24px",
            },
        },
        xAxis: {
            type: "datetime",
            crosshair: {
                width: 2,
            },
        },
        tooltip: {
            shared: true,
        },
        credits: {
            enabled: false,
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5,
            },
            series: {
                connectNulls: true,
            },
        },
        series: [{
            data: companyDataset.map((value) => [Date.parse(value[0]), value[1]]),
            type: 'line' as const,
            name: value,
            color: '#228be6'
        }],
    };
};

