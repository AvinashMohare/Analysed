import React from "react";
import ReactApexChart from "react-apexcharts";
import "../styles/Chart.css";

const Chart = ({ xCategories, yData }) => {
    const series = [
        {
            name: "Sales",
            data: [0, 15, 20, 15, 20, 25, 30],
        },
    ];

    const options = {
        chart: {
            id: "chart",
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
            axisBorder: {
                show: false, // Hide the x-axis line
            },
            axisTicks: {
                show: false, // Hide the x-axis ticks
            },
            labels: {
                offsetY: 5,
                style: {
                    colors: "#DDDDDD", // Change the color of x-axis labels
                    fontSize: "0.1 rem", // Set the font size of y-axis labels
                },
            },
            tickAmount: 8,
        },
        stroke: {
            curve: "smooth", // Set the curve to smooth
            colors: "#DDDDDD",
            width: 3,
        },
        yaxis: {
            labels: {
                offsetX: -18, // Move labels to the left
                style: {
                    colors: "#DDDDDD", // Change the color of x-axis labels
                    fontSize: "0.1 rem", // Set the font size of y-axis labels
                },
            },
        },

        grid: {
            show: true,
            borderColor: "#AEA8FF",
            position: "back",

            xaxis: {
                lines: {
                    show: true,
                },
            },

            yaxis: {
                lines: {
                    show: false,
                },
            },
        },

        markers: {
            size: 4,
            colors: ["#FFBAD0"],
            strokeColors: "#FFBAD0",
        },

        tooltip: {
            theme: "dark", // Change the tooltip theme to 'dark'
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
                background: "#FF0000", // Change the background color of the tooltip
                color: "#FFFFFF", // Change the font color of the tooltip
            },
        },
    };

    return (
        <div className="line-chart">
            <ReactApexChart options={options} series={series} type="line" />
        </div>
    );
};

export default Chart;
