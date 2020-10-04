import * as React           from "react";
import Carousel, {Settings} from "react-slick";
import cn                   from "classnames";

import {GRID_BREAKPOINTS} from "../../../app/consts";

import styles from "./Responsive.module.scss";
import "slick-carousel/slick/slick.css?raw";

const CAROUSEL_SETTINGS: Settings = {
  accessibility: true,
  speed: 300,
  initialSlide: 0,
  arrows: false,
  infinite: false,
  lazyLoad: "ondemand",

  responsive: [
    {
      breakpoint: GRID_BREAKPOINTS.SM,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: GRID_BREAKPOINTS.MD,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: GRID_BREAKPOINTS.LG,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: GRID_BREAKPOINTS.XL,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: true
      }
    },
    {
      breakpoint: 9999999,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: true
      }
    },
  ]
};

export type IProps = {
  isDesktop?: boolean;
  settings?: Settings & {
    equalSlidesHeight?: boolean;
  };
} & React.HTMLAttributes<HTMLDivElement>;

export class ResponsiveSlider extends React.PureComponent<IProps> {

  private _getCarouselSettings(injectedSettings, isDesktop) {
    const settings = {
      ...CAROUSEL_SETTINGS,
      ...injectedSettings
    };
    const { responsive } = settings;

    if (!responsive)
      return settings;

    const responsiveSorted = responsive.sort((a, b) => a.breakpoint > b.breakpoint ? 1 : -1);
    const ssrProps = isDesktop ? responsiveSorted[responsiveSorted.length - 1].settings : responsiveSorted[0].settings;

    return {
      ...ssrProps,
      ...settings
    }
  };

  render() {
    const {
      className = "", children, isDesktop,
      settings: { equalSlidesHeight = true, ...restSettings } = {},
      ...rest
    } = this.props;

    if (!children)
      return null;

    return (
		<div className={cn(styles.slider, className, { [styles.equalSlidesHeight]: equalSlidesHeight })}>
			<Carousel
				swipe={!isDesktop}
				{...this._getCarouselSettings(restSettings, isDesktop)}
				{...rest}
			>
				{children}
			</Carousel>
		</div>
    );
  }
}
