import React from "react";
import { PropsFromDispatch, PropsFromState } from "../containers/App";
import { View } from "./View";

export class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSessionState();
  }

  render() {
    const { view } = this.props;

    return <View>{view}</View>;
  }
}

export type Props = PropsFromState & PropsFromDispatch;
