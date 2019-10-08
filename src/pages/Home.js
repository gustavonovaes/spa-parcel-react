import React from "react";

import Dashboard from '../components/Dashboard';
import Col from '../components/UI/Col';
import Row from '../components/UI/Row';

const Doughnut = React.lazy(() => import("../components/Charts/Doughnut"));
const Line = React.lazy(() => import("../components/Charts/Line"));

export default function Home() {
  return <Dashboard>
    <h1>Charts</h1>

    <Row>
      <Col size="1">
        <React.Suspense fallback={<span>Loading...</span>}>
          <Doughnut updateInterval={2000} />
        </React.Suspense>
      </Col>

      <Col size="2" style={{ flexGrow: 3 }}>
        <React.Suspense fallback={<span>Loading...</span>}>
          <Line updateInterval={5000} />
        </React.Suspense>
      </Col>
    </Row>
  </Dashboard>
}