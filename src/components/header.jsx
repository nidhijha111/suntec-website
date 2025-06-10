import "../styles/header.scss";
import React, { Fragment, useState, useEffect, useCallback, memo } from "react";
import { useLocation, Link } from "react-router-dom";

const productsMegaMenuDesktopData = {
  mainCategories: [
    {
      id: "motor-insurance",
      label: "Motor Insurance",
      link: "/product",
    },
    {
      id: "life-insurance",
      label: "Life Insurance",
      link: "/product",
    },
    {
      id: "health-insurance",
      label: "Health Insurance",
      link: "/product",
    },
    {
      id: "travel-insurance",
      label: "Travel Insurance",
      link: "/product",
    },
    {
      id: "other-categories",
      label: "Other Categories Insurance",
      link: "/product",
    },
  ],

  motorInsuranceSubColumnItems: [
    {
      id: "goods-carrying",
      label: "Goods Carrying Vehicle Insurance",
      link: "/product",
    },
    {
      id: "passenger-carrying",
      label: "Passenger Carrying Vehicle Insurance",
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
};

const productsMobileMenuData = [
  {
    id: "motor-insurance-mobile",
    label: "Motor Insurance",
    hasDropdown: true,
    submenu: [
      {
        id: "goods-carrying",
        label: "Goods-carrying vehicle Insurance",
        link: "#",
      },
      {
        id: "passenger-carrying",
        label: "Passenger-carrying vehicle Insurance",
        link: "/products/motor-insurance/passenger-carrying",
      },
      {
        id: "car-insurance",
        label: "Car Insurance",
        link: "/products/motor-insurance/car",
      },
      {
        id: "bike-insurance",
        label: "Bike Insurance",
        link: "/products/motor-insurance/bike",
      },
      {
        id: "electric-car-insurance",
        label: "Electric Car Insurance",
        link: "/products/motor-insurance/electric-car",
      },
      {
        id: "electric-bike-insurance",
        label: "Electric Bike Insurance",
        link: "/products/motor-insurance/electric-bike",
      },
      {
        id: "marine-insurance",
        label: "Marine Insurance",
        link: "/products/marine-insurance",
      },
      {
        id: "aviation-insurance",
        label: "Aviation Insurance",
        link: "/products/aviation-insurance",
      },
    ],
  },
  {
    id: "life-insurance",
    label: "Life Insurance",
    link: "/products/life-insurance",
  },
  {
    id: "other-categories",
    label: "Other Categories",
    hasDropdown: true,
    submenu: [
      {
        id: "home-insurence",
        label: "Home Insurance",
        link: "#",
      },
      {
        id: "business-insurence",
        label: "Business Insurance",
        link: "#",
      },
      {
        id: "travel-insurence",
        label: "Travel Insurance",
        link: "#",
      },
      {
        id: "health-insurence",
        label: "Health Insurance",
        link: "#",
      },
      {
        id: "personal-accident-insurence",
        label: "Personal Accident Insurance",
        link: "#",
      },
      {
        id: "public-liability-insurance",
        label: "Public Liability Insurance ",
        link: "#",
      },
      {
        id: "fidelity-guarantee-insurance",
        label: "Fidelity Guarantee Insurance",
        link: "#",
      },
         {
        id: "cyber-crime-insurance",
        label: "Cyber Crime Insurance",
        link: "#",
      },
    ],
  },
];

const menuItemsData = [
  {
    id: "products",
    label: "Products",
    hasDropdown: true,
    type: "mega-menu",
    mobileSubmenu: productsMobileMenuData,
  },
  { id: "renew", label: "Renew", link: "/renew" },
  { id: "claims", label: "Claims", link: "/claims" },
  {
    id: "about",
    label: "About us",
    hasDropdown: true,
    submenu: [
      { id: "our-company", label: "Our Company", link: "/about/company" },
      { id: "our-team", label: "Our Team", link: "/about/team" },
      { id: "careers", label: "Careers", link: "/about/careers" },
    ],
  },
  { id: "support", label: "Support", link: "/support" },
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
    src="./assets/images/arrow_down.png"
    alt="dropdown arrow"
    className="arrow-icon"
    style={{
      transform: direction === "right" ? "rotate(-90deg)" : "rotate(0deg)",
    }}
  />
));

const ProductsMegaMenuContent = memo(({ onLinkClick, currentPath }) => {
  const [activeSubColumn, setActiveSubColumn] = useState(
    "motor-insurance-subcolumn"
  );

  useEffect(() => {
    if (currentPath.startsWith("/products/motor-insurance")) {
      setActiveSubColumn("motor-insurance-subcolumn");
    } else {
      setActiveSubColumn("motor-insurance-subcolumn");
    }
  }, [currentPath]);

  const handleCategoryHover = useCallback((categoryId) => {
    if (categoryId === "motor-insurance") {
      setActiveSubColumn("motor-insurance-subcolumn");
    } else {
      setActiveSubColumn(null);
    }
  }, []);

  const handleCategoryLeave = useCallback(() => {}, []);

  return (
    <div className="products-mega-menu-content">
      <div className="products-main-column">
        <ul className="category-links">
          {productsMegaMenuDesktopData.mainCategories.map((item) => (
            <li
              key={item.id}
              className={
                item.id === "motor-insurance" &&
                activeSubColumn === "motor-insurance-subcolumn"
                  ? "active-nested"
                  : ""
              }
              onMouseEnter={() => handleCategoryHover(item.id)}
              onMouseLeave={handleCategoryLeave}
            >
              <Link to={item.link} onClick={onLinkClick}>
                {item.label}
                {item.id === "motor-insurance" && (
                  <DropdownArrowIcon direction="right" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {activeSubColumn === "motor-insurance-subcolumn" && (
        <div className="products-sub-column">
          <ul className="category-links">
            {productsMegaMenuDesktopData.motorInsuranceSubColumnItems.map(
              (subItem) => (
                <li key={subItem.id}>
                  <Link to={subItem.link} onClick={onLinkClick}>
                    {subItem.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
});

const isPathActive = (menuItem, currentPath) => {
  if (menuItem.type === "mega-menu" && currentPath.startsWith("/products")) {
    return true;
  }
  if (menuItem.link === currentPath) {
    return true;
  }
  if (menuItem.submenu) {
    return menuItem.submenu.some((subItem) =>
      isPathActive(subItem, currentPath)
    );
  }

  if (menuItem.mobileSubmenu && menuItem.type === "mega-menu") {
    return menuItem.mobileSubmenu.some((subItem) =>
      isPathActive(subItem, currentPath)
    );
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

    const hasDropdown = item.hasDropdown;
    const isActive = isPathActive(item, currentPath);

    useEffect(() => {
      if (isMobileView && !isParentMenuOpen && isSubmenuOpen) {
        setIsSubmenuOpen(false);
      }
    }, [isMobileView, isParentMenuOpen, isSubmenuOpen]);

    useEffect(() => {
      if (!isMobileView && hasDropdown) {
        if (isTopLevel) {
          setIsSubmenuOpen(activeDesktopDropdownId === item.id);
        }
      }
    }, [
      isMobileView,
      hasDropdown,
      activeDesktopDropdownId,
      item.id,
      isTopLevel,
      isSubmenuOpen,
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

        {hasDropdown &&
          shouldBeOpen &&
          (isMobileView ? (
            item.type === "mega-menu" && item.mobileSubmenu ? (
              <ul className="submenu-list">
                {item.mobileSubmenu.map((subItem) => (
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
            ) : (
              item.submenu && (
                <ul className="submenu-list">
                  {item.submenu.map((subItem) => (
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
              )
            )
          ) : item.type === "mega-menu" ? (
            <ProductsMegaMenuContent
              onLinkClick={() => onMenuAction({ type: "linkClick" })}
              currentPath={currentPath}
            />
          ) : (
            item.submenu && (
              <ul className="submenu-list">
                {item.submenu.map((subItem) => (
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
            )
          ))}
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
      }
      if (!newIsMobileView) {
        if (isMenuOpen) setIsMenuOpen(false);
      }
    };

    // Initial check
    setIsMobileView(window.innerWidth <= 992);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileView, isMenuOpen]);

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
      const navbar = document.querySelector(".navbar");
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
