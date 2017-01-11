/**
 * Created by ethomas on 1/5/2017.
 */
import React from 'react';
import Header from '../Header';
import {Stage} from '../Stage';
import Toolbar from '../Toolbar';
import {
		Grid,
		Row,
		Col,
} from 'react-bootstrap';

function Container() {
	return (
			<div>
				<Header></Header>
				<Grid>
					<Row>
						<Col sm={2} className="no-padding" >
							<Toolbar></Toolbar>
						</Col>
						<Col sm={10} className="no-padding" >
							<Stage></Stage>
						</Col>
					</Row>
				</Grid>
			</div>
	);
}

export default Container;
