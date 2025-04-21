import Head from "next/head";
import React from "react";
import InfoSection from "./InfoSection";

export default function EvaluationPage() {
  return (
    <>
      <Head>
        <title>Employee Evaluation</title>
      </Head>
      <div style={{marginTop: "2250px"}}>
        <InfoSection />
        </div>
    </>
  );
}
