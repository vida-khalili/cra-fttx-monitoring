import Cards from "src/pages/components/Cards";
import Charts from "src/pages/components/Charts/Charts";
import React from "react";
import ProtectedPage from "src/components/ProtectedPage";
import Layout from "src/components/Layout";

function Content() {
  return (
    <Layout mode={"dark"}>
      <Cards/>
      <Charts/>
    </Layout>
  );
}

export default function Home() {
  return (
    <ProtectedPage>
      <Content/>
    </ProtectedPage>
  );
}
