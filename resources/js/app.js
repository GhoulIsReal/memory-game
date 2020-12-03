import React from "react";
import { InertiaApp } from "@inertiajs/inertia-react";
import { render } from "react-dom";
import { InertiaProgress } from "@inertiajs/progress";
import { Provider } from "react-redux";
import configureStore from "./store";

InertiaProgress.init({
  showSpinner: true
});

const el = document.getElementById("app");
const store = configureStore();

render(
  <Provider store={store}>
    <InertiaApp
      initialPage={JSON.parse(el.dataset.page)}
      resolveComponent={name =>
        import(`./Pages/${name}`).then(module => module.default)
      }
    />
  </Provider>,
  el
);
