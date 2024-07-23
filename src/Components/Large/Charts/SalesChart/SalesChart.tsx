'use client'
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './SalesChart.module.css'
export default function SalesChart() {
  return (
    <Box className={styles.chart} sx={{width:450 ,height:300}}>
      <Typography variant="h6" sx={{ padding:2 }}>
        Daily Sales
      </Typography>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
            color: '#FFCA40',
          },
        ]}
        width={450}
        height={250}
      />
    </Box>
  );
}
