import cls from "./ProfileLayout.module.scss"
import { classNames } from "shared/utils/classNames/ClassNames"
import { NavbarProfile } from "widgets/ProfileNavbar/ui/NavbarProfile";
import { Sidebar } from "widgets/Sidebar";

interface ProfilePageProps {
  className?: string,
  children: React.ReactNode
}

const ProfileLayot = (props: ProfilePageProps) => {
  const {className, children} = props 
  return (
    <section className={classNames(cls.ProfilePage, {}, [className])}>
      <NavbarProfile/> 
      <Sidebar/>
      {children}
    </section>
  )
};

export default ProfileLayot;
