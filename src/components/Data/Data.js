import React from 'react';
import DataSource from './DataSource';

const Data = ({ loveFunction }) => (
  <section id="data" className="my-5 text-center">
    <div className="trends">
      <h2 className="title">How we collect our data:</h2>
      <p>
        We use 30+ resources to measure job demand + developer opinion of the most popular and
        promising tools. Hover over the graph to learn more.
      </p>
      <DataSource loveFunction={loveFunction} />
    </div>
  </section>
);

export default Data;
