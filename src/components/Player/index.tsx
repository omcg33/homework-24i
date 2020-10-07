import React  from "react";
import cn     from "classnames";

import "shaka-player/dist/controls.css";
import styles from "./Player.module.scss";

const shaka = require('shaka-player/dist/shaka-player.ui.js');


export type IProps = {
	src: string;

	autoPlay?: boolean;
	title?: string;
	onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export class ShakaPlayer extends React.PureComponent<IProps>{
	private videoComponent;
	private videoContainer;

	constructor(props){

		super(props);

		//Creating reference to store video component on DOM
		this.videoComponent = React.createRef();

		//Creating reference to store video container on DOM
		this.videoContainer = React.createRef();

		//Initializing reference to error handlers
		this.onErrorEvent = this.onErrorEvent.bind(this);
		this.onError = this.onError.bind(this);
	}

	onErrorEvent(event) {
		// Extract the shaka.util.Error object from the event.
		this.onError(event.detail);
	}

	onError(error) {
		// Log the error.
		console.error('Error code', error.code, 'object', error);
	}

	componentDidMount(){
		const { src } = this.props;
		//Getting reference to video and video container on DOM
		const video = this.videoComponent.current;
		const videoContainer = this.videoContainer.current;

		//Initialize shaka player
		var player = new shaka.Player(video);

		//Setting UI configuration JSON object
		const uiConfig = {
			controlPanelElements: ['time_and_duration'],
		};

		//Setting up shaka player UI
		const ui = new shaka.ui.Overlay(player, videoContainer, video);

		ui.configure(uiConfig); //configure UI
		ui.getControls();

		// Listen for error events.
		player.addEventListener('error', this.onErrorEvent);

		// Try to load a manifest.
		// This is an asynchronous process.
		player.load(src)
			.then(() => {
				// This runs if the asynchronous load is successful.
				console.log('The video has now been loaded!');
			})
			.catch(this.onError);  // onError is executed if the asynchronous load fails.



	}

	render(){
		const { title, autoPlay, onClose, className = "", ...rest } = this.props;

		return(
			<div className={cn(styles.videoWrp, className)} ref={this.videoContainer} { ...rest}>
				<video
					autoPlay={autoPlay}
					className={styles.video}
					ref={this.videoComponent}
				/>

				{
					title
						? <span className={styles.videoTitle}>{title}</span>
						: null
				}
				{
					typeof onClose === "function"
						? <div className={styles.close} onClick={onClose}>X</div>
						: null
				}
			</div>
		);
	}
}
