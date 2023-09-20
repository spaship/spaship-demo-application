"use client";
import React from "react";
import "./style.css";
import {
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Button,
  Flex,
  FlexItem,
} from "@patternfly/react-core";
// import { logo } from "../../../public/img/spaship-logo-light.svg";
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  Divider,
  MenuToggle,
  MenuToggleElement,
} from "@patternfly/react-core";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (
    _event: React.MouseEvent<Element, MouseEvent> | undefined,
    value: string | number | undefined
  ) => {
    setIsOpen(false);
  };
  return (
    <>
      <Masthead className="navbar-main">
        <MastheadMain>
          <MastheadBrand>
            <img
              src="/img/spaship-logo-light.svg"
              alt="login logo"
              style={{ width: "200px", height: "85px" }}
            />
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent className="masthead-content-right">
          <Dropdown
            isOpen={isOpen}
            onSelect={onSelect}
            onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={onToggleClick}
                isExpanded={isOpen}
              >
                Contact Us
              </MenuToggle>
            )}
            ouiaId="BasicDropdown"
            shouldFocusToggleOnSelect
          >
            <DropdownList>
              <DropdownItem value={0} key="action">
                <Button variant="link">
                  <span>
                    <a
                      href="https://redhat-internal.slack.com/archives/C04F5PRKEMC"
                      target="_blank"
                    >
                      <img
                        src="/img/slack-logo.svg"
                        style={{ verticalAlign: "bottom" }}
                      />
                      &nbsp;Slack
                    </a>
                  </span>
                </Button>
              </DropdownItem>
              <DropdownItem
                value={1}
                key="link"
                to="#default-link2"
                // Prevent the default onClick functionality for example purposes
                onClick={(ev: any) => ev.preventDefault()}
              >
                <Button
                  className="pf-u-pl-sm"
                  // component="a"
                  aria-label="spaship-dev@redhat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    window.location.href = "mailto:spaship-dev@redhat.com";
                  }}
                  variant="link"
                >
                  <span>
                    <img
                      src="/img/login-mail.svg"
                      alt="email logo"
                      // style={{ height: "25px", width: "25px", paddingTop: "5px" }}
                      style={{ verticalAlign: "bottom" }}
                    />
                    &nbsp;Email
                  </span>
                </Button>
              </DropdownItem>
            </DropdownList>
          </Dropdown>
        </MastheadContent>
      </Masthead>
    </>
  );
}
