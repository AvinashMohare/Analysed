import React from "react";
import ReactApexChart from "react-apexcharts";
import "./ClientChart.scss";

const ClientChart = ({ months, physiotherapistCounts }) => {
    const series = [
        {
            name: "Clients",
            data: physiotherapistCounts,
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
            categories: months,
            axisBorder: {
                show: false, // Hide the x-axis line
            },
            axisTicks: {
                show: false, // Hide the x-axis ticks
            },
            labels: {
                offsetY: 5,
                style: {
                    colors: "#4065C9", // Change the color of x-axis labels
                    fontSize: "0.1 rem", // Set the font size of y-axis labels
                },
            },
            tickAmount: 10,
        },
        stroke: {
            curve: "smooth", // Set the curve to smooth
            colors: "#4065C9",
            width: 3,
        },
        yaxis: {
            labels: {
                offsetX: -18, // Move labels to the left
                style: {
                    colors: "#4065C9", // Change the color of x-axis labels
                    fontSize: "0.1 rem", // Set the font size of y-axis labels
                },
            },
            tickAmount: 5,
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
        <div className="chart">
            <div className="header">
                <p className="title">Client</p>

                <div className="button">
                    <p>
                        This Year <span> &#x25BC; </span>
                    </p>
                </div>
            </div>

            <div className="chartMain">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="line"
                    height={300}
                />
            </div>
        </div>
    );
};

export default ClientChart;
