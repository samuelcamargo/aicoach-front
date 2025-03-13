"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// Importando ApexCharts de forma dinâmica para evitar problemas com SSR
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DesempenhoChart() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const chartOptions = {
    chart: {
      height: 350,
      type: 'bar',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      },
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '50%',
        distributed: true,
        dataLabels: {
          position: 'top'
        }
      }
    },
    colors: [
      theme.palette.primary.light,
      theme.palette.primary.main,
      theme.palette.primary.dark,
      theme.palette.secondary.light,
      theme.palette.secondary.main,
    ],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false
    },
    grid: {
      show: true,
      borderColor: theme.palette.divider,
      strokeDashArray: 3,
    },
    xaxis: {
      categories: ['Quiz 1', 'Quiz 2', 'Projeto', 'Desafio', 'Final'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return Math.round(value) + '%';
        },
      },
      min: 0,
      max: 100,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        }
      }
    }
  };

  const chartSeries = [{
    name: 'Desempenho',
    data: [92, 75, 88, 70, 85]
  }];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ p: 2, height: '100%' }}>
        <Typography variant="h6" gutterBottom>
          Desempenho em Avaliações
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Resultados nas últimas avaliações
        </Typography>
        {mounted && (
          <ReactApexChart 
            options={chartOptions} 
            series={chartSeries} 
            type="bar" 
            height={300} 
          />
        )}
      </Box>
    </motion.div>
  );
} 