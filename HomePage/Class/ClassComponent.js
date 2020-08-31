import React, {Component} from 'react';
import EmptyView from '../EmptyView';

class ClassComponent extends Component {
	render() {
		return (
			<EmptyView getActiveTabName={this.props.getActiveTabName} />
		);
	}
};

export default ClassComponent;