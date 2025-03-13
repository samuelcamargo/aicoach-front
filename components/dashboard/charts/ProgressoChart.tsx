"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ApexOptions } from 'apexcharts';

// Importando ApexCharts de forma dinâmica para evitar problemas com SSR
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ProgressoChart() {
  const theme = useTheme();
  // Flag para evitar renderização no servidor
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const progresso = 68;

  const series = [progresso];
  
  const chartOptions: ApexOptions = {
    chart: {
      height: 120,
      type: 'radialBar',
      toolbar: {
        show: false
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
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: theme.palette.text.secondary,
            fontSize: '13px'
          },
          value: {
            offsetY: 5,
            fontSize: '22px',
            color: '#2563EB',
            fontWeight: 600,
            formatter: function (val: number) {
              return val + '%';
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
        gradientToColors: ['#3B82F6'],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round',
    },
    colors: ['#2563EB'],
  };

  if (!mounted) return null;

  return (
    <div className="w-full h-32 mt-2 flex items-center justify-center">
      <ReactApexChart 
        options={chartOptions} 
        series={series} 
        type="radialBar" 
        height={120} 
      />
    </div>
  );
} 