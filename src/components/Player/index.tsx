import React from "react";
import cn    from "classnames";

import "shaka-player/dist/controls.css";
import shaka from "shaka-player/dist/shaka-player.ui.js"
import styles from "./Player.module.scss";

require ("./components/shaka/closeButton.js");


export type IProps = {
	src: string;

	autoPlay?: boolean;
	fullscreen?: boolean;

	title?: string;
	onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

type IState = {
	loaded: boolean;
}

export class ShakaPlayer extends React.PureComponent<IProps, IState>{
	private videoComponent;
	private videoContainer;

	constructor(props){

		super(props);

		//Creating reference to store video component on DOM
		this.videoComponent = React.createRef();

		//Creating reference to store video container on DOM
		this.videoContainer = React.createRef();

		this.state = {
			loaded: false
		}
	}

	private onErrorEvent(event) {
		// Extract the shaka.util.Error object from the event.
		this.onError(event.detail);
	}

	private onError(error) {
		// Log the error.
		console.error('Error code', error.code, 'object', error);
	}

	componentDidMount(){
		const { src, fullscreen = false } = this.props;
		//Getting reference to video and video container on DOM
		const video = this.videoComponent.current;
		const videoContainer = this.videoContainer.current;

		//Initialize shaka player
		var player = new shaka.Player(video);

		//Setting UI configuration JSON object
		const uiConfig = {
			controlPanelElements: ['time_and_duration'],
		};

		const closeFactory = new shaka.CloseButton.Factory();
		shaka.ui.Controls.registerElement('close', closeFactory);

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
				this.setState({loaded: true})
				if (fullscreen)
					video.requestFullscreen();
			})
			.catch(this.onError);  // onError is executed if the asynchronous load fails.
	}

	render(){
		const { title, autoPlay, onClose, className = "", fullscreen, ...rest } = this.props;
		const { loaded } = this.state;

		return(
			<div
				className={cn(styles.videoWrp, className, {
					[styles.fullscreen]: fullscreen,
					[styles.loaded]: loaded
				})}
				ref={this.videoContainer}
				{ ...rest}
			>
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
			</div>
		);
	}
}
