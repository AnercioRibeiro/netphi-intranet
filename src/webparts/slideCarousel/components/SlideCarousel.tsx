import * as React from 'react';
import styles from './SlideCarousel.module.scss';

import type { ISlideCarouselProps } from './ISlideCarouselProps';
import Carousel from './Carousel';
// import { escape } from '@microsoft/sp-lodash-subset';

export default class SlideCarousel extends React.Component<ISlideCarouselProps, {}> {
  public render(): React.ReactElement<ISlideCarouselProps> {
    const images = [
      'https://cdn.hubblecontent.osi.office.net/m365content/publish/00521290-3fc8-4711-a984-637571646b60/1195588117.jpg',
      'https://zck3l.sharepoint.com/SiteAssets/SitePages/Home/1321049383banner-site-carta-o-multicaixa.png',
      'https://cdn.hubblecontent.osi.office.net/m365content/publish/00521290-3fc8-4711-a984-637571646b60/1195588117.jpg',
    ];
    const {
      // description,
      // isDarkTheme,
      // environmentMessage,
      hasTeamsContext,
     // images
      // userDisplayName
    } = this.props;


    return (
      <section className={`${styles.slideCarousel} ${hasTeamsContext ? styles.teams : ''} flex flex-row p-10 gap-2`}>
        <section className="w-3/4 h-60 bg-gray-200 border-2 rounded-md">

        <Carousel images={images} />;

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
}
