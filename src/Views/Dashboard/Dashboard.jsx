import React from 'react';
import { PieChart, Pie, Cell, LabelList, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ScatterChart, Scatter } from 'recharts';
import styles from './dashboard.module.css';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const scatterData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const pieData = [
    { name: 'Direct', value: 400 },
    { name: 'Organic Search', value: 300 },
    { name: 'Referral', value: 300 },
];

const Dashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.header}>
                <div className={styles.headerItem}>
                    <span>New Wins</span>
                    <section>
                        <span className={styles.value}>230</span>
                        <span className={styles.Incvalue}>25</span>
                        <span className={styles.text}>vs previous 30 days</span>
                    </section>
                </div>
                <div className={styles.headerItem}>
                    <span>Trial:Win Rate</span>
                    <section>
                        <span className={styles.value}>9.86</span>
                        <span className={styles.Incvalue}>25</span>
                        <span className={styles.text}>vs previous 30 days</span>
                    </section>
                </div>
                <div className={styles.headerItem}>
                    <span>New MRR</span>
                    <section>
                        <span className={styles.value}>25,690</span>
                        <span className={styles.Incvalue}>8.7</span>
                        <span className={styles.text}>vs previous 30 days</span>
                    </section>
                </div>
                <div className={styles.headerItem}>
                    <span>Page Views</span>
                    <div className={styles.donutChartContainer}>
                        <ResponsiveContainer width="100%" height={150}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={60}
                                    fill="#000000"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                    <LabelList dataKey="name" position='outside' offset={5} style={{ fontSize: '20', fill: 'rgba(0, 0, 0, 0.87)' }} />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className={styles.chartContainer}>
                <div className={styles.chartBox}>
                    <ResponsiveContainer width="95%" height={300}>
                        <ScatterChart>
                            <CartesianGrid />
                            <XAxis type="number" dataKey="x" name="MRR" unit="$" />
                            <YAxis type="number" dataKey="y" name="Country" unit="" />
                            <Scatter name="A school" data={scatterData} fill="#8884d8" />
                        </ScatterChart>
                    </ResponsiveContainer>
                    <div className={styles.chartTitle}>MRR Stats by Country</div>
                </div>
                <div className={styles.chartBox}>
                    <ResponsiveContainer width="95%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                    <div className={styles.chartTitle}>MRR</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
