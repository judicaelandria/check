import React from "react";
import { Helmet } from "react-helmet";

export const SEO = ({ title, description }) => {
  return (
    <Helmet titleTemplate={title || "Check"}>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <html lang="en" />
      <meta name="description" content={description || "Check your task"} />
      <link rel="icon" href="./logo.png" />
      <link rel="canonical" href="https://checktask.netlify.app" />
    </Helmet>
  );
};
