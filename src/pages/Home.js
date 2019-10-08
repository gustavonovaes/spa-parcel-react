import React from "react";
import styled from "styled-components";

import Dashboard from '../components/Dashboard';
const Doughnut = React.lazy(() => import("../components/Charts/Doughnut"));
const Line = React.lazy(() => import("../components/Charts/Line"));

export default function Home() {
  return <Dashboard>
    <h1>Charts</h1>

    <Row>
      <Col size="1">
        <React.Suspense fallback={<span>Loading...</span>}>
          <Doughnut />
        </React.Suspense>
      </Col>

      <Col size="2" style={{ flexGrow: 3 }}>
        <React.Suspense fallback={<span>Loading...</span>}>
          <Line />
        </React.Suspense>
      </Col>
    </Row>
  </Dashboard>
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const Col = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1 0 50%;

  max-width: 60vw;

  margin: 40px 0;
`