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
class Title extends shaka.ui.Element {
	/**
	 * @param {!HTMLElement} parent
	 * @param {!shaka.ui.Controls} controls
	 */
	constructor(parent, controls, props) {
		super(parent, controls);
		const { title } = props;

		this.button_ = document.createElement('div');
		this.button_.classList.add('shaka-title');
		this.button_.textContent = title;
		parent.appendChild(this.button_);
	}
};

export class TitleFactory {
	constructor(props) {
		this.props = props
	}

	/** @override */
	create(rootElement, controls) {
		return new Title(rootElement, controls, this.props);
	}
};
