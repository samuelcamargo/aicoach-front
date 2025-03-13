"use client";

import { useState, useEffect } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

export default function DistribuicaoChart() {
  const theme = useTheme();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const data = [
    { id: 'React', label: 'React', value: 35, color: '#61DAFB' },
    { id: 'JavaScript', label: 'JavaScript', value: 25, color: '#F7DF1E' },
    { id: 'Python', label: 'Python', value: 20, color: '#3776AB' },
    { id: 'UX/UI', label: 'UX/UI', value: 15, color: '#FF6B6B' },
    { id: 'Outros', label: 'Outros', value: 5, color: '#6C757D' },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ p: 2, height: '100%' }}>
        <Typography variant="h6" gutterBottom>
          Distribuição de Estudos
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Tempo gasto por tecnologia
        </Typography>
        <Box sx={{ height: 300 }}>
          {isClient && (
            <ResponsivePie
              data={data}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.6}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              colors={{ datum: 'data.color' }}
              borderWidth={1}
              borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor={theme.palette.text.primary}
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
                }
              ]}
              fill={[
                { match: { id: 'React' }, id: 'dots' },
                { match: { id: 'JavaScript' }, id: 'lines' }
              ]}
              motionConfig={{
                mass: 1,
                tension: 170,
                friction: 26,
                clamp: false,
                precision: 0.01,
                velocity: 0
              }}
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 80,
                  itemHeight: 18,
                  itemTextColor: theme.palette.text.secondary,
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle'
                }
              ]}
            />
          )}
        </Box>
      </Box>
    </motion.div>
  );
} 