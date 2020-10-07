/*! @license
 * Shaka Player
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


const shaka = require('shaka-player/dist/shaka-player.ui.js');


/**
 * A custom UI button, to allow users to close the video element.
 * This cannot actually extend shaka.ui.Element, as that class does not exist
 * at load-time when in uncompiled mode.
 * @extends {shaka.ui.Element}
 */
shaka.CloseButton = class extends shaka.ui.Element {
	/**
	 * @param {!HTMLElement} parent
	 * @param {!shaka.ui.Controls} controls
	 */
	constructor(parent, controls) {
		super(parent, controls);
		this.button_ = document.createElement('button');
		this.button_.classList.add('shaka-close-button');
		this.button_.textContent = 'close'; // Close icon.
		this.parent.appendChild(this.button_);

		this.button_.addEventListener('click', () => {
			console.log("click");
		});

		// TODO: Make sure that the screenreader description of this control is
		// localized!
	}
};

/**
 * @implements {shaka.extern.IUIElement.Factory}
 * @final
 */
shaka.CloseButton.Factory = class {
	/** @override */
	create(rootElement, controls) {
		return new shaka.CloseButton(rootElement, controls);
	}
};

// This button is registered inside setup in shakaDemo.Main, rather than
// statically here, since shaka.ui.Controls does not exist in this stage of the
// load process.