import * as React from 'react';
import styles from './Navbar.module.scss';
import type { INavbarProps } from './INavbarProps';
// import { escape } from '@microsoft/sp-lodash-subset';

export default class Navbar extends React.Component<INavbarProps, {}> {
  public render(): React.ReactElement<INavbarProps> {
    const {
      // description,
      // isDarkTheme,
      // environmentMessage,
      hasTeamsContext,
      // userDisplayName
    } = this.props;
    
    return (
      <section className={`${styles.navbar} ${hasTeamsContext ? styles.teams : ''} p-0`}>
      <nav className="bg-gray-200 w-full h-[70px] p-2 flex gap-2 items-center justify-between">
      <h1 className="ml-6">Logo</h1>
      <ul className="flex gap-8 justify-between list-none">
        <li>
          <a>Meu Perfil</a>
        </li>
        <li className=''>
          <a>Aplicações</a>
        </li>
        <li>
          <a>Comunidade</a>
        </li>
        <li>
          <a>Meus Projetos</a>
        </li>
        <li>
          <a>Pessoas</a>
        </li>
      </ul>
      <div className="flex gap-4 mr-6">
        <input
          type="text"
          placeholder="pesquisar"
          className="rounded-full w-[300px] text-center"
        />
        <div className="h-10 w-10 rounded-full bg-white"></div>
      </div>
    </nav>
    </section>
    );
  }
}
