import React from "react";
import PhoneIcon from "./images/phone.png";
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
    { method: PhoneIcon, content: "02085554090", href: "tel:02085554090" },
    {
      method: DeliverooLogo,
      content: "Deliveroo",
      href: "https://deliveroo.co.uk/brands/t4/?utm_medium=backlink&utm_source=t4&utm_campaign=webreferral",
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
