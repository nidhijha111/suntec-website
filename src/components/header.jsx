import "../styles/header.scss";
import React, { Fragment, useState, useEffect, useCallback, memo } from "react";
import { useLocation, Link } from "react-router-dom";

const productsMenuData = [
  {
    id: "motor-insurance",
    label: "Motor Insurance",
    link: "/product",
    children: [
      {
        id: "goods-carrying",
        label: "Goods-carrying vehicle Insurance",
        link: "/product",
      },
      {
        id: "passenger-carrying",
        label: "Passenger-carrying vehicle Insurance",
        link: "/product",
      },
      {
        id: "car-insurance",
        label: "Car Insurance",
        link: "/product",
      },
      {
        id: "bike-insurance",
        label: "Bike Insurance",
        link: "/product",
      },
      {
        id: "electric-car-insurance",
        label: "Electric Car Insurance",
        link: "/product",
      },
      {
        id: "electric-bike-insurance",
        label: "Electric Bike Insurance",
        link: "/product",
      },
      {
        id: "marine-insurance",
        label: "Marine Insurance",
        link: "/product",
      },
      {
        id: "aviation-insurance",
        label: "Aviation Insurance",
        link: "/product",
      },
    ],
  },
  {
    id: "life-insurance",
    label: "Life Insurance",
    link: "/product",
    children: [],
  },
  {
    id: "other-categories",
    label: "Other Categories",
    link: "/product",
    children: [
      {
        id: "home-insurance",
        label: "Home Insurance",
        link: "/product",
      },
      {
        id: "business-insurance",
        label: "Business Insurance",
        link: "/product",
      },
      {
        id: "travel-insurance",
        label: "Travel Insurance",
        link: "/product",
      },
      {
        id: "health-insurance",
        label: "Health Insurance",
        link: "/product",
      },
      {
        id: "personal-accident-insurance",
        label: "Personal Accident Insurance",
        link: "/product",
      },
      {
        id: "public-liability-insurance ",
        label: "Public Liability Insurance ",
        link: "/product",
      },
      {
        id: "fidelity-guarantee-insurance",
        label: "Fidelity Guarantee Insurance",
        link: "/product",
      },
      {
        id: "cyber-crime-insurance",
        label: "Cyber Crime Insurance",
        link: "/product",
      },
    ],
  },
];

// const renewMenuData = [
//   {
//     id: "motor-policy",
//     label: "Motor Policy",
//     link: "/renew/motor",
//     children: [
//       {
//         id: "renew-car",
//         label: "Renew Car Insurance",
//         link: "/renew/motor/car",
//       },
//       {
//         id: "renew-bike",
//         label: "Renew Bike Insurance",
//         link: "/renew/motor/bike",
//       },
//     ],
//   },
//   {
//     id: "health-policy",
//     label: "Health Policy",
//     link: "/renew/health",
//     children: [],
//   },
//   {
//     id: "travel-policy",
//     label: "Travel Policy",
//     link: "/renew/travel",
//     children: [],
//   },
//   {
//     id: "fire-policy",
//     label: "Fire Policy",
//     link: "/renew/fire",
//     children: [],
//   },
// ];

const menuItemsData = [
  {
    id: "products",
    label: "Products",
    hasDropdown: true,
    type: "mega-menu",
    menuData: productsMenuData,
  },
  // {
  //   id: "renew",
  //   label: "Renew",
  //   hasDropdown: true,
  //   type: "mega-menu",
  //   menuData: renewMenuData,
  // },
  { id: "renew", label: "Renew", link: "/renew", children: [] },
  { id: "claims", label: "Claims", link: "/claims", children: [] },
  {
    id: "about",
    label: "About us",
    hasDropdown: true,
    type: "standard-dropdown",
    menuData: [
      { id: "our-story", label: "Our Story", link: "/about" },
      { id: "careers", label: "Careers", link: "/careers" },
    ],
  },
  { id: "support", label: "Support", link: "/support", children: [] },
];

const HamburgerIcon = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke="#005A9C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

const CloseIcon = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="#005A9C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

const DropdownArrowIcon = memo(({ direction }) => (
  <img
    src="./assets/images/arrow_down.png" // Ensure this path is correct for your project
    alt="dropdown arrow"
    className="arrow-icon"
    style={{
      transform: direction === "right" ? "rotate(-90deg)" : "rotate(0deg)",
    }}
  />
));

const MegaMenuContent = memo(
  ({ onLinkClick, menuItems, activeTopLevelItemId }) => {
    const getInitialActiveMainItem = useCallback((items) => {
      return items.find((item) => item.children && item.children.length > 0);
    }, []);

    const [activeMainItemId, setActiveMainItemId] = useState(() => {
      const initialItem = getInitialActiveMainItem(menuItems);
      return initialItem ? initialItem.id : null;
    });

    useEffect(() => {
      const initialItem = getInitialActiveMainItem(menuItems);
      setActiveMainItemId(initialItem ? initialItem.id : null);
    }, [menuItems, getInitialActiveMainItem, activeTopLevelItemId]); // Crucial dependencies

    const handleMainItemHover = useCallback((itemId) => {
      setActiveMainItemId(itemId);
    }, []);

    const handleMainItemLeave = useCallback(() => {}, []);

    const currentActiveMainItem = menuItems.find(
      (item) => item.id === activeMainItemId
    );
    const currentSubColumnData = currentActiveMainItem
      ? currentActiveMainItem.children
      : [];

    return (
      <div className="mega-menu-content">
        <div className="main-column">
          <ul className="category-links">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={item.id === activeMainItemId ? "active-nested" : ""}
                onMouseEnter={() => handleMainItemHover(item.id)}
                onMouseLeave={handleMainItemLeave}
              >
                <Link to={item.link} onClick={onLinkClick}>
                  {item.label}
                  {item.children && item.children.length > 0 && (
                    <DropdownArrowIcon direction="right" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {currentSubColumnData && currentSubColumnData.length > 0 && (
          <div className="sub-column">
            <ul className="category-links">
              {currentSubColumnData.map((subItem) => (
                <li key={subItem.id}>
                  <Link to={subItem.link} onClick={onLinkClick}>
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

const isPathActive = (menuItem, currentPath, activeDesktopDropdownId) => {
  if (menuItem.hasDropdown) {
    if (activeDesktopDropdownId === menuItem.id) {
      return true;
    }

    const childrenData = menuItem.menuData || menuItem.children || [];
    const isAnyChildLinkActive = childrenData.some((child) =>
      isPathActive(child, currentPath, activeDesktopDropdownId)
    );

    if (isAnyChildLinkActive) {
      return true;
    }
  }

  if (menuItem.link === currentPath) {
    return true;
  }

  return false;
};

const MenuItem = memo(
  ({
    item,
    currentPath,
    onMenuAction,
    isMobileView,
    isParentMenuOpen,
    activeDesktopDropdownId,
    isTopLevel = false,
  }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const hasDropdown =
      item.hasDropdown ||
      (item.children && item.children.length > 0) ||
      (item.menuData && item.menuData.length > 0);
    const isActive = isPathActive(item, currentPath, activeDesktopDropdownId);

    useEffect(() => {
      if (isMobileView && !isParentMenuOpen && isSubmenuOpen) {
        setIsSubmenuOpen(false);
      }
    }, [isMobileView, isParentMenuOpen, isSubmenuOpen]);

    useEffect(() => {
      if (!isMobileView && hasDropdown && isTopLevel) {
        setIsSubmenuOpen(activeDesktopDropdownId === item.id);
      }
    }, [
      isMobileView,
      hasDropdown,
      activeDesktopDropdownId,
      item.id,
      isTopLevel,
    ]);

    const handleItemClick = useCallback(
      (e) => {
        e.stopPropagation();

        if (hasDropdown) {
          const newSubmenuOpenState = !isSubmenuOpen;
          setIsSubmenuOpen(newSubmenuOpenState);

          if (!isMobileView && isTopLevel) {
            onMenuAction({
              type: "dropdownToggle",
              itemId: item.id,
              shouldOpen: newSubmenuOpenState,
            });
          }
        } else {
          onMenuAction({ type: "linkClick" });
        }
      },
      [
        hasDropdown,
        isMobileView,
        item.id,
        onMenuAction,
        isSubmenuOpen,
        isTopLevel,
      ]
    );

    const shouldBeOpen = isSubmenuOpen;

    let dropdownContent = null;
    if (hasDropdown && shouldBeOpen) {
      if (isMobileView) {
        const childrenToRender = item.menuData || item.children || [];
        if (childrenToRender.length > 0) {
          dropdownContent = (
            <ul className="submenu-list">
              {childrenToRender.map((subItem) => (
                <MenuItem
                  key={subItem.id}
                  item={subItem}
                  currentPath={currentPath}
                  onMenuAction={onMenuAction}
                  isMobileView={isMobileView}
                  isParentMenuOpen={isParentMenuOpen}
                  activeDesktopDropdownId={activeDesktopDropdownId}
                  isTopLevel={false}
                />
              ))}
            </ul>
          );
        }
      } else {
        if (item.type === "mega-menu" && item.menuData) {
          dropdownContent = (
            <MegaMenuContent
              onLinkClick={() => onMenuAction({ type: "linkClick" })}
              activeTopLevelItemId={activeDesktopDropdownId}
              menuItems={item.menuData}
            />
          );
        } else if (item.type === "standard-dropdown" && item.menuData) {
          dropdownContent = (
            <ul className="submenu-list">
              {item.menuData.map((subItem) => (
                <MenuItem
                  key={subItem.id}
                  item={subItem}
                  currentPath={currentPath}
                  onMenuAction={onMenuAction}
                  isMobileView={isMobileView}
                  isParentMenuOpen={isParentMenuOpen}
                  activeDesktopDropdownId={activeDesktopDropdownId}
                  isTopLevel={false}
                />
              ))}
            </ul>
          );
        } else if (item.children && item.children.length > 0) {
          dropdownContent = (
            <ul className="submenu-list">
              {item.children.map((subItem) => (
                <MenuItem
                  key={subItem.id}
                  item={subItem}
                  currentPath={currentPath}
                  onMenuAction={onMenuAction}
                  isMobileView={isMobileView}
                  isParentMenuOpen={isParentMenuOpen}
                  activeDesktopDropdownId={activeDesktopDropdownId}
                  isTopLevel={false}
                />
              ))}
            </ul>
          );
        }
      }
    }

    return (
      <li
        className={`nav-item ${hasDropdown ? "has-submenu" : ""} ${
          isActive ? "active" : ""
        } ${shouldBeOpen ? "open" : ""}`}
        data-item-id={item.id}
      >
        {hasDropdown ? (
          <Link
            to={item.link || "#"}
            className="nav-link"
            onClick={handleItemClick}
          >
            {item.label}
            <DropdownArrowIcon />
          </Link>
        ) : (
          <Link to={item.link} className="nav-link" onClick={handleItemClick}>
            {item.label}
          </Link>
        )}

        {dropdownContent}
      </li>
    );
  }
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDesktopDropdownId, setActiveDesktopDropdownId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleResize = () => {
      const newIsMobileView = window.innerWidth <= 992;
      if (newIsMobileView !== isMobileView) {
        setIsMobileView(newIsMobileView);
        if (!newIsMobileView && isMenuOpen) {
          setIsMenuOpen(false);
        }
        if (newIsMobileView && activeDesktopDropdownId) {
          setActiveDesktopDropdownId(null);
        }
      }
    };

    setIsMobileView(window.innerWidth <= 992);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileView, isMenuOpen, activeDesktopDropdownId]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("mobile-menu-active");
    } else {
      document.body.classList.remove("mobile-menu-active");
    }
    return () => {
      document.body.classList.remove("mobile-menu-active");
    };
  }, [isMenuOpen]);

  const handleMenuAction = useCallback(
    ({ type, itemId, shouldOpen }) => {
      if (type === "linkClick") {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
        if (!isMobileView && activeDesktopDropdownId) {
          setActiveDesktopDropdownId(null);
        }
      } else if (type === "dropdownToggle") {
        if (!isMobileView) {
          setActiveDesktopDropdownId(shouldOpen ? itemId : null);
        }
      }
    },
    [isMenuOpen, isMobileView, activeDesktopDropdownId]
  );

  const toggleMobileSidebar = useCallback(() => {
    setIsMenuOpen((prev) => {
      if (!prev && activeDesktopDropdownId) {
        setActiveDesktopDropdownId(null);
      }
      return !prev;
    });
  }, [activeDesktopDropdownId]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbar = document.querySelector(".nav-item");
      if (
        navbar &&
        !navbar.contains(event.target) &&
        activeDesktopDropdownId &&
        !isMobileView
      ) {
        setActiveDesktopDropdownId(null);
      }
    };

    if (activeDesktopDropdownId && !isMobileView) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [activeDesktopDropdownId, isMobileView]);

  return (
    <Fragment>
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <a href="tel:9810000000">
              <img src="./assets/images/phone_icon.png" alt="phone icon" />
              Toll Free 98100 00000
            </a>
            <a href="mailto:care@suntecinsurance.com">
              <img src="./assets/images/message_icon.png" alt="message icon" />
              care@suntecinsurance.com
            </a>
          </div>
        </div>
      </div>

      <div></div>

      <nav className="navbar">
        <div className="logo-wrapper">
          <Link to="/">
            <img
              src="./assets/images/brand_logo.svg"
              alt="Suntec Insurance Logo"
            />
          </Link>
        </div>

        <div className="nav-links-wrapper">
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            {isMobileView && (
              <button
                className="mobile-menu-close-button"
                onClick={toggleMobileSidebar}
                aria-label="Close Menu"
              >
                <CloseIcon />
              </button>
            )}

            {menuItemsData.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                currentPath={currentPath}
                onMenuAction={handleMenuAction}
                isMobileView={isMobileView}
                activeDesktopDropdownId={activeDesktopDropdownId}
                isParentMenuOpen={isMenuOpen}
                isTopLevel={true}
              />
            ))}
          </ul>
        </div>

        {!isMenuOpen && (
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileSidebar}
            aria-label="Toggle Menu"
          >
            <HamburgerIcon />
          </button>
        )}
      </nav>
    </Fragment>
  );
}
