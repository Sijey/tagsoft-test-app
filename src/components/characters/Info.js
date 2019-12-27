import React from 'react';
import { Header, Image, Modal } from 'semantic-ui-react';

const Info = ({ char }) => {

	return (
		<Modal trigger={<p>{char.name}</p>} centered={false}>
			<Modal.Content image>
				<Image wrapped size='medium' src={char.image} />
				<Modal.Description>
					<Header>{char.name}</Header>
					<p>Status: {char.status}</p>
					<p>Species: {char.species}</p>
					<p>Gender: {char.gender}</p>
					<p>Origin: {char.origin.name}</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default Info;
