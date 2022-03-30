import React from "react";
import Layout from "../../components/Layout";
import Sidebar from "./Sidebar";
export default function Home() {
  return (
    <Layout>
      <h1>Welcome To Admin Dashboard</h1>
      <Sidebar />
    </Layout>
  );
}
