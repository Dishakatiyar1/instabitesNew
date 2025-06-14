import React from "react";
import "./accordian.css";
import {Collapse} from "antd";

const LegalAccordian = () => {
  const items = [
    {
      key: "1",
      label: "Terms of Use",
      children: (
        <p>
          These terms of use (the "Terms of Use") govern your use of our website
          www.instabites.in (the "Website") and our "instabites" application for
          mobile and handheld devices (the "App"). The Website and the App are
          jointly referred to as the "Services"). Please read these Terms of Use
          carefully before you download, install or use the Services. If you do
          not agree to these Terms of Use, you may not install, download or use
          the Services. By installing, downloading or using the Services, you
          signify your acceptance to the Terms of Use and Privacy Policy (being
          hereby incorporated by reference herein) which takes effect on the
          date on which you download, install or use the Services, and create a
          legally binding arrangement to abide by the same.
        </p>
      ),
    },
    {
      key: "2",
      label: "Privacy Policy",
      children: (
        <p>
          We ( Bundl Technologies Private Limited, alias "instabites" ) are
          fully committed to respecting your privacy and shall ensure that your
          personal information is safe with us. This privacy policy sets out the
          information practices of www.instabites.com ("Website") including the
          type of information is collected, how the information is collected,
          how the information is used and with whom it is shared. Reference to
          "you" in this Privacy Policy refers to the users of this Website
          whether or not you access the services available on the Website or
          consummate a transaction on the Website. By using or accessing this
          Website, you agree to the terms and conditions of this Privacy Policy.
          You also expressly consent to our use and disclosure of your Personal
          Information (as defined below) in any manner as described in this
          Privacy Policy and further signify your agreement to this Privacy
          Policy and the Terms of Use (being incorporated by reference herein).
          If you do not agree with the terms and conditions of this Privacy
          Policy, please do not proceed further or use or access this Website.
        </p>
      ),
    },
    {
      key: "3",
      label: "Cancellations and Refunds",
      children: (
        <p>
          a) As a general rule you shall not be entitled to cancel your order
          once placed. You may choose to cancel your order only within
          one-minute of the order being placed by you. However, subject to your
          previous cancellation history, instabites reserves the right to deny
          any refund to you pursuant to a cancellation initiated by you even if
          the same is within one-minute. b)If you cancel your order after one
          minute of placing it, instabites shall have a right to charge you 100%
          of the order amount as the cancellation fee , with a right to either
          not to refund the order value in case your order is prepaid or recover
          from your subsequent order in case your order is postpaid, to
          compensate our restaurant/merchants and delivery partners.
          c)instabites reserves the right to charge you cancellation fee for the
          orders constrained to be cancelled by instabites for reasons not
          attributable to instabites, including but not limited to: i)in the
          event if the address provided by you is either wrong or falls outside
          the delivery zone; ii) failure to contact you by phone or email at the
          time of delivering the order booking; iii) failure to deliver your
          order due to lack of information, direction or authorization from you
          at the time of delivery; or iv) unavailability of all the items
          ordered by you at the time of booking the order. However, in the
          unlikely event of an item on your order being unavailable, instabites
          will contact you on the phone number provided to us at the time of
          placing the order and inform you of such unavailability. In such an
          event you will be entitled to cancel the entire order and shall be
          entitled to a refund to an amount upto 100% of the order value. d)In
          case of cancellations for the reasons attributable to instabites or
          the restaurant partner or delivery partners, instabites shall not
          charge you any cancellation fee.
        </p>
      ),
    },
  ];
  return <Collapse items={items} defaultActiveKey={["1"]} />;
};

export default LegalAccordian;
