"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// Importando ApexCharts de forma dinâmica para evitar problemas com SSR
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function MetasCompletadasChart() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const chartOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
      animations: {
        speed: 1000,
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: '70%',
          background: 'transparent',
        },
        track: {
          background: theme.palette.divider,
          strokeWidth: '67%',
          margin: 0,
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            fontSize: '16px',
            color: theme.palette.text.secondary,
            offsetY: -10
          },
          value: {
            offsetY: 0,
            fontSize: '22px',
            color: theme.palette.text.primary,
            formatter: function (val) {
              return val + "%";
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [theme.palette.primary.light],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      dashArray: 3
    },
    labels: ['Metas Completadas'],
    colors: [theme.palette.primary.main],
  };

  const chartSeries = [78];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Box sx={{ p: 2, height: '100%' }}>
        <Typography variant="h6" gutterBottom>
          Metas Semanais
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Progresso geral das metas definidas
        </Typography>
        {mounted && (
          <ReactApexChart 
            options={chartOptions} 
            series={chartSeries} 
            type="radialBar" 
            height={300} 
          />
        )}
      </Box>
    </motion.div>
  );
} 