"use client";

// if you use app dir, don't forget this line
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChart = () => {
  const chartOptions: { series: ApexAxisChartSeries; options: ApexOptions } = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
        color: "#FEF8E9",
      },
      // {
      //   name: 'series2',
      //   data: [11, 32, 45, 32, 34, 52, 41]
      // }
    ],
    options: {
      chart: {
        // height: 350,
        // type: "area",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        labels: {
          style: {
            colors: "#ffffff",
            fontSize: "12px",
            fontFamily: "League Spartan",
            fontWeight: 400,
          },
        },
      },
        yaxis: {
            labels: {
            style: {
                colors: "#ffffff",
                fontSize: "12px",
                fontFamily: "League Spartan",
                fontWeight: 400,
            },
            },
        },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      }
    },
  };

  return (
    <div>
      <div id="chart">
        <ApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="area"
          height="180px"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default AreaChart;
