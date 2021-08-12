import React, { useEffect, useRef } from 'react'
import './coming-soon.styles.css'
import walkPng from '../../assets/walk-right.png'
import gsap from 'gsap'
function ComingSoon() {
	const canvas = useRef(null)
	const text = useRef(null)
	let newEntert = true
	const interval = useRef(null)
	const show = (spans) => {
		gsap.utils.toArray(spans).forEach((element, idx) => {
			gsap.to(element, { opacity: 1, y: 0, duration: 0.2 }, '-=0.001')
		})
	}
	const dis = (spans) => {
		gsap.utils.toArray(spans).forEach((element, idx) => {
			gsap.set(element, { opacity: 0, y: '20px' })
		})
	}
	useEffect(() => {
		let spans = text.current.children

		const width = (canvas.current.width = window.innerWidth)
		const height = (canvas.current.height = window.innerHeight)
		const ctx = canvas.current.getContext('2d')
		let image = new Image()
		let sprite = 0
		let posX = 0
		image.src = walkPng
		ctx.fillStyle = '#ffffff'
		ctx.fillRect(0, 0, width, height)
		ctx.translate(width / 2, height / 2)
		ctx.font = 'bold 16px Arial'
		const draw = () => {
			ctx.fillRect(-(width / 2), -(height / 2), width, height)
			ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148)

			if (posX % 13 === 0) {
				if (sprite === 5) {
					sprite = 0
				} else {
					sprite++
				}
			}
			if (posX > width / 2) {
				let newStartPos = -(width / 2 + 102)
				posX = Math.ceil(newStartPos)
				dis(spans)
				newEntert = true
			} else {
				posX += 2
			}

			if (posX > width / 2 - 500 && newEntert) {
				show(spans)
				newEntert = false
			}
		}

		interval.current = setInterval(() => {
			draw()
		}, 20)
		return () => {
			clearInterval(interval.current)
		}
	})
	return (
		<div>
			<canvas ref={canvas} className='myCanvas'>
				<p>Add suitable fallback here.</p>
			</canvas>
			<div ref={text} className='coming-text'>
				<span>س</span>
				<span>ن</span>
				<span>أ</span>
				<span>ت</span>
				<span>ي</span>
				<span> </span>
				<span>ق</span>
				<span>ر</span>
				<span>ي</span>
				<span>ب</span>
				<span>اً</span>
				<span>.</span>
				<span>.</span>
				<span>.</span>
			</div>
		</div>
	)
}

export default ComingSoon
