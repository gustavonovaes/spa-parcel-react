import React from "react";
import Layout from "./Layout";
import Col from '../components/UI/Col';
import Row from '../components/UI/Row';

const Doughnut = React.lazy(() => import("../components/Charts/Doughnut"));
const Line = React.lazy(() => import("../components/Charts/Line"));
const SimpleTable = React.lazy(() => import("../components/Tables/Simple"));

export default function Home() {
  return <Layout>
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

    <h1>Tables</h1>

    <React.Suspense fallback={<span>Loading...</span>}>
      <Row >
        <Col style={{ maxHeight: "25vh", overflow: "auto" }}>
          <SimpleTable />
        </Col>
      </Row>
    </React.Suspense>
  </Layout>
}