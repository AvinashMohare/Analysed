import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./PhysiotherapistChart.css";

const PhysiotherapistChart = ({ months, physiotherapistCounts }) => {
    const series = [
        {
            name: "Clients",
            data: physiotherapistCounts,
        },
    ];

    // ApexCharts configuration
    const chartOptions = {
        chart: {
            type: "bar",
            height: 350,
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: months,
            labels: {
                show: true, // This ensures that x-axis labels are visible
                style: {
                    colors: "#456ACC",
                    fontSize: "1rem",
                },
            },
        },
        yaxis: {
            labels: {
                offsetX: -18,
                style: {
                    colors: "#4065C9",
                    fontSize: "0.1rem",
                },
            },
        },
        grid: {
            show: false,
            borderColor: "#AEA8FF",
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        tooltip: {
            theme: "dark",
            x: {
                show: true,
            },
            y: {
                formatter: (value) => `${value} units`,
            },
            marker: {
                show: true,
            },
            style: {
                background: "#FF0000",
                color: "#FFFFFF",
            },
        },
        dataLabels: {
            enabled: false, // Hide data labels on bars
        },
        plotOptions: {
            bar: {
                colors: {
                    ranges: [
                        {
                            from: 0,
                            to: 100,
                            color: "#6585D7",
                        },
                    ],
                },
            },
        },
    };

    return (
        <div className="bar-chart">
            <ReactApexChart
                options={chartOptions}
                series={series}
                type="bar"
                height={350}
            />
        </div>
    );
};

export default PhysiotherapistChart;
