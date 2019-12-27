import React, { useEffect } from 'react';
import { Button, Divider, Loader, Message, Table, Pagination } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleSort, loadCharacters, loadPage } from '../../actions/characters';
import Info from "./Info";

const Characters = ({ characters, load, error, loadPage, activePage, sortCharacters, pageInfo }) => {
	useEffect(() => {
		load();
	}, [load]);

	if (error) {
		return (
			<Message negative>
				<Message.Header>{error}</Message.Header>
				<Divider />
				<Button onClick={load}>Try again</Button>
			</Message>
		);
	} else if (characters){
		return (
			<>
				<Table collapsing celled inverted sortable>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell width={1} textAlign='center'>Id</Table.HeaderCell>
							<Table.HeaderCell textAlign='center' onClick={sortCharacters}>Name</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{characters.map(char => {
							return (
								<Table.Row key={char.id}>
									<Table.Cell textAlign='center'>{char.id}</Table.Cell>
									<Table.Cell textAlign='center' selectable>
										<Info char={char} />
									</Table.Cell>
								</Table.Row>
							)
						})}
					</Table.Body>
				</Table>
				<Pagination activePage={activePage} totalPages={pageInfo.pages} onPageChange={loadPage} />
			</>
		)
	} else {
		return <Loader active inline='centered' />
	}
};

export default connect(state => ({
	characters: state.characters,
	pageInfo: state.pageInfo,
	error: state.loadingError,
	activePage: state.activePage,
	sortedChar: state.sortedChar
}), dispatch => ({
	load: () => dispatch(loadCharacters()),
	loadPage: (e, pageInfo) => dispatch(loadPage(e, pageInfo)),
	sortCharacters: sorted => dispatch(handleSort(sorted))
}))(Characters);
