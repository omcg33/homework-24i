/*! @license
 * Shaka Player
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import shaka from "shaka-player/dist/shaka-player.ui.js";

/**
 * A custom UI button, to allow users to close the video element.
 * This cannot actually extend shaka.ui.Element, as that class does not exist
 * at load-time when in uncompiled mode.
 * @extends {shaka.ui.Element}
 */
class CloseButton extends shaka.ui.Element {
	/**
	 * @param {!HTMLElement} parent
	 * @param {!shaka.ui.Controls} controls
	 */
	constructor(parent, controls, props) {
		super(parent, controls);
		const { onClick } = props;

		this.button_ = document.createElement('button');
		this.button_.classList.add('shaka-close-button');
		this.button_.textContent = 'X';
		parent.appendChild(this.button_);


		this.button_.addEventListener('click', () => {
			this.player.unload();
			if (typeof onClick === "function")
				onClick();
		});
	}
};

export class CloseButtonFactory {
	constructor(props) {
		this.props = props
	}

	/** @override */
	create(rootElement, controls) {
		return new CloseButton(rootElement, controls, this.props);
	}
};
