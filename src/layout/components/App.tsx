import React from 'react';
import { PropsFromDispatch, PropsFromState } from '../containers/App';
import { Header } from './Header';
import { Footer } from './Footer';
import { View } from './View';

export class App extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSessionState();
    }

    render() {
        const { view } = this.props;

        return(
            <>
                <Header/>
                <View>
                    { view }
                </View>
                <Footer/>
            </>
        );
    }
}

export type Props = PropsFromState & PropsFromDispatch;
