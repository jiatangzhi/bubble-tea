import React from "react";
import PhoneIcon from "./images/phone.png";
import UberEatsLogo from "./images/uberEats.png";
import DeliverooLogo from "./images/deliveroo.png";
import FaceBookLogo from "./images/facebook.png";
import InstagramLogo from "./images/instagram.png";
export default function FloatingOrderNote() {
  const socialMedias = [
    {
      method: FaceBookLogo,
      content: "Facebook",
      href: "https://www.facebook.com/t4unitedkingdom/",
    },
    {
      method: InstagramLogo,
      content: "Instagram",
      href: "https://www.instagram.com/t4_unitedkingdom/",
    },
  ];
  const details = [
    { method: PhoneIcon, content: "02087493900", href: "tel:02087493900" },
    {
      method: UberEatsLogo,
      content: "Just Eat",
      href: "https://www.ubereats.com/gb/store/t4-bubble-tea-westfield/I6yyGQM8SDed7H36x9skFg",
    },
    {
      method: DeliverooLogo,
      content: "Deliveroo",
      href: "https://deliveroo.co.uk/brands/t4",
    },
  ];
  return (
    <div className="floatingNote">
      {socialMedias.map((item, index) => (
        <a
          className="individualFloatingNote display-none-when-big-screen"
          key={index}
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="floating-icon-adjustments"
            src={item.method}
            alt={item.content}
            title={item.content}
          />{" "}
        </a>
      ))}
      <div className="text-center itallic-subHeading display-none-when-extra-small">
        order:
      </div>
      {details.map((item, index) => (
        <a
          className="individualFloatingNote"
          key={index}
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="floating-icon-adjustments"
            src={item.method}
            alt={item.content}
            title={item.content}
          />{" "}
        </a>
      ))}
    </div>
  );
}
