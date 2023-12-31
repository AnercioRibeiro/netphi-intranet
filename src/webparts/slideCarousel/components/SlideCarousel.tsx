import * as React from 'react';
import styles from './SlideCarousel.module.scss';
import type { ISlideCarouselProps } from './ISlideCarouselProps';
// import { escape } from '@microsoft/sp-lodash-subset';

export default class SlideCarousel extends React.Component<ISlideCarouselProps, {}> {
  public render(): React.ReactElement<ISlideCarouselProps> {
    const {
      // description,
      // isDarkTheme,
      // environmentMessage,
      hasTeamsContext,
      // userDisplayName
    } = this.props;

    return (
      <section className={`${styles.slideCarousel} ${hasTeamsContext ? styles.teams : ''} flex flex-row p-10 gap-2`}>
        <section className="w-3/4 h-64 bg-gray-200 border-2 rounded-md pt-10">
        
         
              
           
          
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
