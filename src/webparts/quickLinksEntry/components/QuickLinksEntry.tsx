import * as React from 'react';
import styles from './QuickLinksEntry.module.scss';
import type { IQuickLinksEntryProps } from './IQuickLinksEntryProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";

export default class QuickLinksEntry extends React.Component<IQuickLinksEntryProps, {}> {
  public render(): React.ReactElement<IQuickLinksEntryProps> {
    const {
      // description,
      // isDarkTheme,
      // environmentMessage,
      hasTeamsContext,
      // userDisplayName
    } = this.props;

    return (
      <section className={`${styles.quickLinksEntry} ${hasTeamsContext ? styles.teams : ''} flex flex-row p-10 gap-2`}>
       <div className="w-3/4 h-[200px] p-2 gap-2">
              <h3 className="font-normal">Atalhos rápidos</h3>
              <div className="flex flex-row gap-4 mt-10">
                <div className="w-40 h-40 border-2 rounded-md justify-start gap-2 flex flex-col p-4">
                  <AddHomeWorkIcon />
                  <h3>HelpDesk</h3>
                </div>
                <div className="w-40 h-40 border-2 rounded-md justify-start gap-2 flex flex-col p-4">
                  <AddHomeWorkIcon />
                  <h3>HelpDesk</h3>
                </div>
                <div className="w-40 h-40 border-2 rounded-md justify-start gap-2 flex flex-col p-4">
                  <AddHomeWorkIcon />
                  <h3>HelpDesk</h3>
                </div>
                <div className="w-40 h-40 border-2 rounded-md justify-start gap-2 flex flex-col p-4">
                  <AddHomeWorkIcon />
                  <h3>HelpDesk</h3>
                </div>
                <div className="w-40 h-40 border-2 rounded-md justify-start gap-2 flex flex-col p-4">
                  <AddHomeWorkIcon />
                  <h3>HelpDesk</h3>
                </div>
                <div className="w-40 h-40 border-2 rounded-md justify-start gap-2 flex flex-col p-4">
                  <AddHomeWorkIcon />
                  <h3>HelpDesk</h3>
                </div>
                
               
              </div>
            </div>
      </section>
    );
  }
}
