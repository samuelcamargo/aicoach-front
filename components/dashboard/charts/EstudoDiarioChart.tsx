"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ApexOptions } from 'apexcharts';

// Importação dinâmica para evitar problemas de SSR
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function EstudoDiarioChart() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
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
      background: 'transparent',
    },
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100]
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 3,
    },
    markers: {
      size: 4,
      colors: [theme.palette.primary.main, theme.palette.secondary.main],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 6,
      }
    },
    xaxis: {
      categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (value: number) {
          return Math.round(value) + ' min';
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy',
      },
      theme: theme.palette.mode,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    }
  };

  const chartSeries = [
    {
      name: 'Esta Semana',
      data: [110, 80, 140, 130, 160, 95, 130],
    },
    {
      name: 'Semana Anterior',
      data: [70, 60, 90, 80, 120, 60, 90],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ p: 2, height: '100%' }}>
        <Typography variant="h6" gutterBottom>
          Tempo de Estudo Diário
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Comparação entre esta semana e a anterior
        </Typography>
        {mounted && (
          <ReactApexChart 
            options={chartOptions} 
            series={chartSeries} 
            type="area" 
            height={300} 
          />
        )}
      </Box>
    </motion.div>
  );
} 