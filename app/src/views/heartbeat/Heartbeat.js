import React, { Component } from "react";
import style from "./style.module.scss";
import { Line } from "react-chartjs-2";
import { Table } from "antd";
import InfoButton from "../../components/infoButton/InfoButton";

// const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       fill: false,
//       lineTension: 0.1,
//       borderColor: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
//         Math.random() * 255
//       )},${Math.floor(Math.random() * 255)},${Math.random() + 0.3})`,
//       borderCapStyle: "butt",
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: "miter",
//       pointBorderColor: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
//         Math.random() * 255
//       )},${Math.floor(Math.random() * 255)},${Math.random() + 0.3})`,
//       pointBackgroundColor: "#fff",
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: `rgba(${Math.floor(
//         Math.random() * 255
//       )},${Math.floor(Math.random() * 255)},${Math.floor(
//         Math.random() * 255
//       )},${Math.random() + 0.3})`,
//       pointHoverBorderColor: `rgba(${Math.floor(
//         Math.random() * 255
//       )},${Math.floor(Math.random() * 255)},${Math.floor(
//         Math.random() * 255
//       )},${Math.random() + 0.3})`,
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//       ],
//     },
//     {
//       label: "My Second dataset",
//       fill: true,
//       lineTension: 0.1,
//       borderColor: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
//         Math.random() * 255
//       )},${Math.floor(Math.random() * 255)},${Math.random() + 0.3})`,
//       borderCapStyle: "butt",
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: "miter",
//       pointBorderColor: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
//         Math.random() * 255
//       )},${Math.floor(Math.random() * 255)},${Math.random() + 0.3})`,
//       pointBackgroundColor: "#fff",
//       pointBorderWidth: 10,
//       pointHoverRadius: 10,
//       pointHoverBackgroundColor: `rgba(${Math.floor(
//         Math.random() * 255
//       )},${Math.floor(Math.random() * 255)},${Math.floor(
//         Math.random() * 255
//       )},${Math.random() + 0.3})`,
//       pointHoverBorderColor: `rgba(${Math.floor(
//         Math.random() * 255
//       )},${Math.floor(Math.random() * 255)},${Math.floor(
//         Math.random() * 255
//       )},${Math.random() + 0.3})`,
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//       ],
//     },
//   ],
// };

const file = {
  heartbeat: [
    {
      x: 1,
      y: 10,
    },
    {
      x: 2,
      y: 15,
    },
    {
      x: 3,
      y: 67,
    },
    {
      x: 4,
      y: 15,
    },
    {
      x: 5,
      y: 18,
    },
    {
      x: 6,
      y: 22,
    },
    {
      x: 7,
      y: 88,
    },
    {
      x: 8,
      y: 82,
    },
    {
      x: 9,
      y: 18,
    },
    {
      x: 10,
      y: 25,
    },
    {
      x: 11,
      y: 27,
    },
    {
      x: 12,
      y: 11,
    },
    {
      x: 13,
      y: 93,
    },
    {
      x: 14,
      y: 91,
    },
    {
      x: 15,
      y: 45,
    },
    {
      x: 16,
      y: 18,
    },
    {
      x: 17,
      y: 21,
    },
    {
      x: 18,
      y: 24,
    },
    {
      x: 19,
      y: 15,
    },
    {
      x: 20,
      y: 16,
    },
  ],
};

const dataSource = file.heartbeat.map((item) => {
  if (item.y > 60)
    return {
      state: item.x,
      stressed: "✅",
    };
  else
    return {
      state: item.x,
      normal: "✅",
    };
});

const columns = [
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    render: (text) => <a>{text}</a>,
    width: 75,
    align: "center",
  },
  {
    title: "Normal",
    dataIndex: "normal",
    key: "normal",
    align: "center",
  },
  {
    title: "Stressed",
    dataIndex: "stressed",
    key: "stressed",
    align: "center",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    align: "center",
  },
];

const data = {
  labels: file.heartbeat.map((item) => {
    return item.x;
  }),
  datasets: [
    {
      label: "Researched data",
      fill: false,
      lineTension: 0.1,
      borderColor: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)},${Math.random() + 0.3})`,
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)},${Math.random() + 0.3})`,
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: `rgba(${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.random() + 0.3})`,
      pointHoverBorderColor: `rgba(${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.random() + 0.3})`,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: file.heartbeat.map((item) => {
        return item.y;
      }),
    },
  ],
};

class Heartbeat extends Component {
  render() {
    console.log(window.visualViewport);
    return (
      <div className={style.container}>
        <div className={style.header}>
          <InfoButton navTo={"/heartbeatInfo"} className={style.item} />
          <h2 className={style.item}>Heartbeat</h2>
        </div>
        <div style={{ height: "40%" }}>
          <Line
            ref="chart"
            data={data}
            height={400}
            options={{ maintainAspectRatio: false, responsive: true }}
          />
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          bordered={true}
          tableLayout={"auto"}
        />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}

export default Heartbeat;
