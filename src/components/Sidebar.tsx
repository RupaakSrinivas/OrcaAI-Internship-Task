import { useState } from "react";
import { Avatar, Group } from "@mantine/core";
import { PiFilesFill } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { RiPieChart2Fill } from "react-icons/ri";
import classes from "./../styles/sidebar.module.css";

const data = [
  { link: "", label: "Home", icon: IoHome },
  { link: "", label: "Templates", icon: MdDashboard },
  { link: "", label: "Reports", icon: PiFilesFill },
  { link: "", label: "Sales Performance", icon: RiPieChart2Fill },
];

export default function Sidebar() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={"1.5"} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={`border-2 shadow-2xl p-4 rounded-3xl ${classes.navbar}`}>
      <div className={`${classes.navbarMain}`}>
        <Group className={classes.header} justify="space-end">
          <img src={"./vite.svg"} alt="Mantine logo" width={40} height={40} />
          <p>Orca AI</p>
        </Group>
        {links}
      </div>
      <div className={classes.footer}>
        <div className="flex flex-row gap-4 items-center">
            <Avatar size={36} color="red" />
            <div className="flex flex-col">
                <p className="font-semibold text-blue-900 ">Adela Parkson</p>
                <p className="text-xs text-gray-400">Manager</p>
            </div>
        </div>
      </div>
    </nav>
  );
}
