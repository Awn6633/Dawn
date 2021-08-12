import React from 'react'

import './project-card.styles.css'

import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const ProjectsCard = () => {
	return (
		<div className='project-card'>
			<Card>
				<Card.Img variant='top' src='https://via.placeholder.com/150' />
				<Card.Body>
					<Card.Title>عنوان الكارت</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the card's
						content.
					</Card.Text>
				</Card.Body>
				<Link to='/soon' className='stretched-link' />
			</Card>
		</div>
	)
}

export default ProjectsCard
