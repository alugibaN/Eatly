import React, { useState } from "react";
import cls from "./NavbarProfile.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import Button, { ButtonType } from "shared/ui/button/Button";
import MagnifyingGlass from "shared/assets/img/MagnifyingGlass.svg";
import Notification from "shared/assets/img/notification.svg";
import NotificationActive from "shared/assets/img/notification-active.svg";
import V from "shared/assets/img/V.svg";
import MiniAvatar from "shared/assets/img/MiniAvatar.png";
import Logo from 'shared/assets/img/logo.svg';

interface NavbarProfileProps {
  className?: string;
}

const NavbarProfile = (props: NavbarProfileProps) => {
  const { className } = props;

  const [messagesActive, setmessagesActive] = useState(false);
  const [menuCheak, setMenuCheak] = useState(false);

  const openModal = () => {
    setMenuCheak((prew) => !prew);
  };
  const mods: Record<string, boolean> = {
    [cls["menu__active"]]: menuCheak,
  };

  return (
    <header className={classNames(cls.profile__navbar, {}, [className])}>
      <div className={cls.navbar}>
         <h1>Dashboard</h1>
        <div className={cls.navbar__links}>
          <Button
            type={ButtonType.SECONDARY}
            className={cls.navbar__links_button}
          >
            <MagnifyingGlass className={cls.lupa} />
          </Button>

          <Button
            type={ButtonType.SECONDARY}
            className={cls.navbar__links_button}
          >
            {messagesActive ? (
              <NotificationActive className={cls.notification__active} />
            ) : (
              <Notification className={cls.notification} />
            )}
          </Button>
          <div
            className={classNames(cls.profile, mods, ['no-select'])}
            onClick={openModal}
          >
            <img className={cls.profile__avatar} src={MiniAvatar} alt="" />
              <p>Alesia K.</p>
            <V />
            {menuCheak ? (
              <ul className={cls.menu}>
                <li>Профиль</li>
                <li>Меню</li>
                <li>Фавориты</li>
                <li>Выход</li>
                <li>два переключателя языка и темы</li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export { NavbarProfile };
