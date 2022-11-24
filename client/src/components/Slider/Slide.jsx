import React from "react";
import { Button } from "../Button/Button";
import { FaCheckCircle } from "react-icons/fa";

console.clear();

function useTilt(active) {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!ref.current || !active) {
			return;
		}

		const state = {
			rect: undefined,
			mouseX: undefined,
			mouseY: undefined,
		};

		let el = ref.current;

		const handleMouseMove = (e) => {
			if (!el) {
				return;
			}
			if (!state.rect) {
				state.rect = el.getBoundingClientRect();
			}
			state.mouseX = e.clientX;
			state.mouseY = e.clientY;
			const px = (state.mouseX - state.rect.left) / state.rect.width;
			const py = (state.mouseY - state.rect.top) / state.rect.height;

			el.style.setProperty("--px", px);
			el.style.setProperty("--py", py);
		};

		el.addEventListener("mousemove", handleMouseMove);

		return () => {
			el.removeEventListener("mousemove", handleMouseMove);
		};
	}, [active]);

	return ref;
}

function Slide({ slide, offset }) {
	const active = offset === 0 ? true : null;
	const ref = useTilt(active);

	return (
		<div
			ref={ref}
			className="slide"
			data-active={active}
			style={{
				"--offset": offset,
				"--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
			}}
		>
			<div
				className="slideBackground"
				style={{
					backgroundImage: `url('${slide.image}')`,
				}}
			/>
			<div
				className="slideContent"
				style={{
					backgroundImage: `url('${slide.image}')`,
				}}
			>
				<div className="slideContentInner">
				
						<Button
							onClick={() => {
								console.log("You Clicked on Me!");
							}}
							type="button"
							buttonStyle="btn--danger--solid"
							buttonSize="btn--large"
						>
							<span>Like</span>
							<FaCheckCircle id="checkMark"/>
						</Button>
					<h3 className="slideSubtitle">{slide.subtitle}</h3>
					<p className="slideDescription">{slide.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Slide;
