import React, { useState } from "react";
import Home from "./pages/Home";
import { IntlProvider } from "react-intl";
import translations from "./i18n";

function App() {
  const LANGUAGE = navigator.language.split(/[-_]/)[0];

  const [locale] = useState(LANGUAGE);
  return (
    <>
      <IntlProvider locale={locale} messages={translations[LANGUAGE]}>
        <Home />
      </IntlProvider>
    </>
  );
}

export default App;
