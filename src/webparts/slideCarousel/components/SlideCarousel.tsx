import * as React from 'react';


import { escape } from '@microsoft/sp-lodash-subset';
// import styles from './SlideCarousel.module.scss';

import { Carousel, CarouselButtonsLocation, CarouselButtonsDisplay, ICarouselImageProps } from "@pnp/spfx-controls-react/lib/Carousel";

import type { ISlideCarouselProps } from './ISlideCarouselProps';
import { ImageFit } from '@fluentui/react/lib/components/Image';


export default class SlideCarousel extends React.Component<ISlideCarouselProps, {}> {
  public render(): React.ReactElement<ISlideCarouselProps> {

    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
      elements
    } = this.props;

    const carouselElements: ICarouselImageProps[] = elements.map(i => {return {
      imageSrc: i.imageSrc,
      title: i.title,
      description: i.description,
      url: i.url,
      showDetailsOnHover: true,
      imageFit: ImageFit.cover      
    };
  });

    return (
      <section className="flex flex-row p-10 gap-2">
        <section className="w-3/4 h-60 bg-gray-200 border-2 rounded-md">

        <Carousel
            buttonsLocation={CarouselButtonsLocation.top}
            buttonsDisplay={CarouselButtonsDisplay.block}
            contentContainerStyles=""
            containerButtonsStyles=""
            isInfinite={true}
            element={carouselElements}
            pauseOnHover={true}
            interval={4000}
            onMoveNextClicked={this._onCarouselMoveNextClicked}
            onMovePrevClicked={this._onCarouselMovePrevClicked}
            onSelect={this._onCarouselSelect}
          />

        </section>
        <div className="w-1/4 border-2 rounded-md flex flex-col p-4 gap-2">
            <div className="flex flex-col gap-2">
              <h4>Entradas</h4>
              <div className="flex justify-between p-4 border items-center rounded-md h-16">
                <div className="flex flex-col ">
                  <strong>Nome</strong>
                  <p>06-Julho-2022</p>
                </div>
                <div className="w-8 h-8 bg-slate-400 rounded-full"></div>
              </div>
              <div className="flex justify-between p-4 border items-center rounded-md h-16">
                <div className="flex flex-col ">
                  <strong>Nome</strong>
                  <p>06-Julho-2022</p>
                </div>
                <div className="w-8 h-8 bg-slate-400 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4>Saidas</h4>
              <div className="flex justify-between p-4 border items-center rounded-md h-16">
                <div className="flex flex-col ">
                  <strong>Nome</strong>
                  <p>06-Julho-2022</p>
                </div>
                <div className="w-8 h-8 bg-slate-400 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4>Mobilidade</h4>
              <div className="flex justify-between p-4 border items-center rounded-md h-16">
                <div className="flex flex-col ">
                  <strong>Nome</strong>
                  <p>06-Julho-2022</p>
                </div>
                <div className="w-8 h-8 bg-slate-400 rounded-full"></div>
              </div>
            </div>
          </div>
      </section>
    );
  }
  private _onCarouselMoveNextClicked = (index: number): void => {
    console.log(`Next button clicked: ${index}`);
  }
  private _onCarouselMovePrevClicked = (index: number): void => {
    console.log(`Prev button clicked: ${index}`);
  }

  private _onCarouselSelect = (selectedIndex: number): void => {
    console.log(`Item selected: ${selectedIndex}`);
  }
}
