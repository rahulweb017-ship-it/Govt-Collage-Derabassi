import React from 'react';
import StatBar from '../ui/StatBar';
import { stats } from '../../data/content';

const KeyStats = () => {
  return (
    <section id="stats">
      <StatBar stats={stats} />
    </section>
  );
};

export default KeyStats;
