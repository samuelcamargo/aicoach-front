"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Importando ApexCharts de forma dinâmica para evitar problemas com SSR
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ProgressoChart() {
  // Flag para evitar renderização no servidor
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const progresso = 68;

  const series = [progresso];
  
  const options = {
    chart: {
      height: 120,
      type: 'radialBar',
      toolbar: {
        show: false
      },
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
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          size: '65%',
        },
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5,
          dropShadow: {
            enabled: false,
          }
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            fontSize: '22px',
            show: true,
            color: '#2563EB',
            fontWeight: 600,
            formatter: function (val) {
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
        options={options} 
        series={series} 
        type="radialBar" 
        height={120} 
      />
    </div>
  );
} 