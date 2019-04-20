import React, { PureComponent } from "react";

import SvelteOptions from "../../component/src/Options.html";

export default class extends PureComponent {
  componentDidMount() {
    const { options, onSelect } = this.props;

    this.svelteOptions = new SvelteOptions({
      target: this.el,
      data: { options }
    });
    this.svelteOptions.on("select", onSelect);
  }

  componentWillUnmount() {
    this.svelteOptions.destroy();
  }

  render() {
    return <div ref={el => (this.el = el)} />;
  }
}
