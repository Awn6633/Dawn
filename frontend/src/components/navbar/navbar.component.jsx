import React, { useEffect, useRef, useState } from 'react'

import { NavLink, Link } from 'react-router-dom'

import './navbar.styles.css'

import Logo from '../../assets/logo1.png'
import { FaHome } from 'react-icons/fa'
import { NavDropdown, Dropdown, DropdownButton, Nav, Navbar, Container } from 'react-bootstrap'
function TopNav() {
	const navHumb = useRef(null)
	const toggle = useRef(null)
	function toggleNav() {
		// Show Nav
		var navItems = navHumb.current.children
		navHumb.current.classList.toggle('active')

		// Transform Hamburger into 'X'
		toggle.current.classList.toggle('active')

		for (var i = 0, ii = navItems.length; i < ii; i++) {
			navItems[i].classList.toggle('active')
		}
	}

	return (
		<div>
			<div className='small-nav'>
				<div className='brand'>
					<Link className='navbar-brand' to='/'>
						<img alt='logo' src={Logo} width='80' height='80' />
					</Link>
				</div>

				<nav ref={navHumb} className=' nav'>
					<Dropdown>
						<Dropdown.Toggle id='dropdown-basic'>
							<FaHome /> Dawn-دون
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Link className='dropdown-item' to='#action/3.1'>
								Action
							</Link>
							<NavDropdown.Divider />

							<Link className='dropdown-item' to='#action/3.2'>
								Another action
							</Link>
						</Dropdown.Menu>
					</Dropdown>
					<Link to='/' className='nav__link'>
						الرئيسية
					</Link>
					<Link to='/home' className='nav__link '>
						المقالات
					</Link>
					<Link to='/story' className='nav__link '>
						قصتنا
					</Link>
					<Link to='/contact' className='nav__link '>
						فريق العمل
					</Link>
					<Link to='/contact' className='nav__link '>
						المشاريع
					</Link>
					<Link to='/contact' className='nav__link '>
						تواصل معنا
					</Link>
				</nav>

				<div ref={toggle} onClick={toggleNav} className='hamburger'>
					<span className='hamburger__patty'></span>
					<span className='hamburger__patty'></span>
					<span className='hamburger__patty'></span>
				</div>
			</div>
			<div className='large-nav'>
				<Navbar collapseOnSelect expand='lg' bg='#fff'>
					<Container>
						<Navbar.Brand href='#home'>
							<img alt='logo' src={Logo} width='80' height='80' />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='responsive-navbar-nav' />
						<Navbar.Collapse id='responsive-navbar-nav'>
							<Nav className='m-auto'>
								<Dropdown>
									<Dropdown.Toggle id='dropdown-basic'>
										<FaHome /> Dawn-دون
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Link className='dropdown-item' to='#action/3.1'>
											Action
										</Link>
										<NavDropdown.Divider />

										<Link className='dropdown-item' to='#action/3.2'>
											Another action
										</Link>
									</Dropdown.Menu>
								</Dropdown>
							</Nav>
							<Nav>
								<Link className='nav-link' to='#deets'>
									الرئيسية
								</Link>
								<Link className='nav-link' to='#memes'>
									المقالات
								</Link>
								<Link className='nav-link' to='#deets'>
									قصتنا
								</Link>
								<Link className='nav-link' to='#memes'>
									فريق العمل
								</Link>
								<Link className='nav-link' to='#deets'>
									المشاريع
								</Link>
								<Link className='nav-link' to='#memes'>
									تواصل معنا
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</div>
	)
}

export default TopNav
