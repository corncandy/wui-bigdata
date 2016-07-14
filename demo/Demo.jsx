import React from 'react';
import {
  BarChart,
  ScatterChart,
  LineChart,
  PieChart,
  ForceDirectedGraph,
  ChordDiagram,
  TreeDiagram,
  ClusterDiagram,
  BundleDiagram,
  PackDiagram,
  Histogram,
  PartitionDiagram,
  StackDiagram,
  Treemap,
  GeoMap
} from '../src';

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <BarChart />
        <ScatterChart />
        <LineChart />
        <PieChart />
        <ForceDirectedGraph />
        <ChordDiagram />
        <TreeDiagram />
        <ClusterDiagram />
        <BundleDiagram />
        <PackDiagram />
        <Histogram />
        <PartitionDiagram shape="rect" />
        <PartitionDiagram shape="circle" />
        <StackDiagram shape="rect" />
        <StackDiagram shape="area" />
        <Treemap />
        <GeoMap />
      </div>
    );
  }
}