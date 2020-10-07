import React from "react";
import cn    from "classnames";

import "shaka-player/dist/controls.css";
import shaka from "shaka-player/dist/shaka-player.ui.js"
import styles from "./Player.module.scss";

import {CloseButtonFactory} from "./components/shaka/closeButton.js";
import {TitleFactory}       from "./components/shaka/title";


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
		const { src, fullscreen = false, title, onClose } = this.props;
		//Getting reference to video and video container on DOM
		const video = this.videoComponent.current;
		const videoContainer = this.videoContainer.current;

		//Initialize shaka player
		var player = new shaka.Player(video);

		//Setting UI configuration JSON object
		const uiConfig = {
			controlPanelElements: ['time_and_duration', 'fullscreen', 'close', 'title'],
		};

		shaka.ui.Controls.registerElement('close', new CloseButtonFactory({onClick: onClose}));
		if (!!title)
			shaka.ui.Controls.registerElement('title', new TitleFactory({title}));

		//Setting up shaka player UI
		const ui = new shaka.ui.Overlay(player, videoContainer, video);

		ui.configure(uiConfig); //configure UI
		const controls = ui.getControls();

		// Listen for error events.
		player.addEventListener('error', this.onErrorEvent);

		// Try to load a manifest.
		// This is an asynchronous process.
		player.load(src)
			.then(async () => {
				// This runs if the asynchronous load is successful.
				this.setState({loaded: true})

				if (fullscreen)
					controls.toggleFullScreen()
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
			</div>
		);
	}
}
