import React from 'react'
import SectionsTitle from '../../components/sections-title/sections-title.component'
import TowColumneSection from '../../components/tow-column-section/tow-column.component'
import HeroSection from '../../components/hero/hero.component'

import TT from '../../assets/our-story.svg'
import CC from '../../assets/contact-us.svg'
import ProjectsCard from '../../components/project-card/project-card.component'

import { Row, Col, Container, Carousel } from 'react-bootstrap'
import CustomButton from '../../components/Custom-button/custom-button.component'
import CarouselComponent from '../../components/carousel/carousel.component'
import CommentsCard from '../../components/comments-card/comments-card.component'
import BlogCard from '../../components/blog-card/blog-card.components'

function HomePage() {
	return (
		<div>
			<HeroSection />
			<SectionsTitle title='عن دوّن' />

			<TowColumneSection img={TT}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore
				</p>
			</TowColumneSection>
			<SectionsTitle title='المشاريع' />
			<Container>
				<Row>
					<Col lg={4}>
						<ProjectsCard />
					</Col>
					<Col lg={4}>
						<ProjectsCard />
					</Col>
					<Col lg={4}>
						<ProjectsCard />
					</Col>
				</Row>
				<CustomButton>View More</CustomButton>
			</Container>
			<div style={{ background: '#e9ecef' }}>
				<SectionsTitle title='المقالات' />

				<Container>
					<CarouselComponent>
						<Carousel.Item>
							<BlogCard />
						</Carousel.Item>
						<Carousel.Item>
							<BlogCard />
						</Carousel.Item>
						<Carousel.Item>
							<BlogCard />
						</Carousel.Item>
					</CarouselComponent>
				</Container>
			</div>
			<SectionsTitle title='التواصل معانا' />
			<Container>
				<TowColumneSection img={CC}>
					<h2>هل يمكننا مساعدتك ؟</h2>
					<CustomButton>تواصل</CustomButton>
				</TowColumneSection>
			</Container>
			<div style={{ background: '#e9ecef' }}>
				<SectionsTitle title='الاراء' />
				<Container>
					<CarouselComponent>
						<Carousel.Item>
							<CommentsCard />
						</Carousel.Item>
						<Carousel.Item>
							<CommentsCard />
						</Carousel.Item>
						<Carousel.Item>
							<CommentsCard />
						</Carousel.Item>
					</CarouselComponent>
				</Container>
			</div>
		</div>
	)
}

export default HomePage

// TODO:
