import "../styles/header.scss";
import React, { Fragment, useState, useEffect, useCallback, memo } from "react";
import { useLocation, Link } from "react-router-dom";

const productsMenuData = [
  {
    id: "motor-insurance",
    label: "Motor Insurance",
    link: "/product/motor",
    children: [
      {
        id: "goods-carrying",
        label: "Goods-carrying vehicle Insurance",
        link: "/product/motor/goods-carrying",
      },
      {
        id: "passenger-carrying",
        label: "Passenger-carrying vehicle Insurance",
        link: "/product/motor/passenger-carrying",
      },
      {
        id: "car-insurance",
        label: "Car Insurance",
        link: "/product/motor/car",
      },
      {
        id: "bike-insurance",
        label: "Bike Insurance",
        link: "/product/motor/bike",
      },
      {
        id: "electric-car-insurance",
        label: "Electric Car Insurance",
        link: "/product/motor/electric-car",
      },
      {
        id: "electric-bike-insurance",
        label: "Electric Bike Insurance",
        link: "/product/motor/electric-bike",
      },
      {
        id: "marine-insurance",
        label: "Marine Insurance",
        link: "/product/motor/marine",
      },
      {
        id: "aviation-insurance",
        label: "Aviation Insurance",
        link: "/product/motor/aviation",
      },
    ],
  },
  {
    id: "life-insurance",
    label: "Life Insurance",
    link: "/product/life",
    children: [], 
  },
  {
    id: "health-insurance",
    label: "Health Insurance",
    link: "/product/health",
    children: [],
  },
  {
    id: "travel-insurance",
    label: "Travel Insurance",
    link: "/product/travel",
    children: [],
  },
  {
    id: "other-categories",
    label: "Other Categories Insurance",
    link: "/product/other",
    children: [
      {
        id: "home-insurance",
        label: "Home Insurance",
        link: "/product/other/home",
      },
      {
        id: "business-insurance",
        label: "Business Insurance",
        link: "/product/other/business",
      },
      {
        id: "personal-accident",
        label: "Personal Accident Insurance",
        link: "/product/other/personal-accident",
      },
      {
        id: "public-liability",
        label: "Public Liability Insurance",
        link: "/product/other/public-liability",
      },
      {
        id: "fidelity-guarantee",
        label: "Fidelity Guarantee Insurance",
        link: "/product/other/fidelity-guarantee",
      },
      {
        id: "cyber-crime",
        label: "Cyber Crime Insurance",
        link: "/product/other/cyber-crime",
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

// --- GENERIC MegaMenuContent Component ---
const MegaMenuContent = memo(
  // activeTopLevelItemId is used as a dependency to ensure resets when switching mega-menus
  ({ onLinkClick, menuItems, activeTopLevelItemId }) => {
    // Helper to find the first item with children in a given menu structure
    const getInitialActiveMainItem = useCallback((items) => {
      return items.find((item) => item.children && item.children.length > 0);
    }, []);

    // State for the currently active item in the *main column* of the mega-menu
    const [activeMainItemId, setActiveMainItemId] = useState(() => {
      // Initialize with the first item that has children from the initial `menuItems` prop
      const initialItem = getInitialActiveMainItem(menuItems);
      return initialItem ? initialItem.id : null;
    });

    // Effect to reset activeMainItemId whenever menuItems prop changes OR
    // when the top-level active dropdown ID changes (signaling a switch between mega-menus)
    useEffect(() => {
      const initialItem = getInitialActiveMainItem(menuItems);
      setActiveMainItemId(initialItem ? initialItem.id : null);
    }, [menuItems, getInitialActiveMainItem, activeTopLevelItemId]); // Crucial dependencies

    // Handlers for hover on main column items
    const handleMainItemHover = useCallback((itemId) => {
      setActiveMainItemId(itemId);
    }, []);

    const handleMainItemLeave = useCallback(() => {
      // In a mega-menu, you generally keep the last hovered item's sub-menu open
      // until the entire mega-menu loses focus. This is why it's empty.
    }, []);

    // Determine the data for the sub-column based on the active main item
    const currentActiveMainItem = menuItems.find(
      (item) => item.id === activeMainItemId
    );
    const currentSubColumnData = currentActiveMainItem
      ? currentActiveMainItem.children
      : [];

    return (
      <div className="mega-menu-content">
        {" "}
        {/* Ensure this class is in your SCSS */}
        <div className="main-column">
          {" "}
          {/* Ensure this class is in your SCSS */}
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
                  {/* Show arrow if this main item has children to display in the sub-column */}
                  {item.children && item.children.length > 0 && (
                    <DropdownArrowIcon direction="right" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Render sub-column only if there's data */}
        {currentSubColumnData && currentSubColumnData.length > 0 && (
          <div className="sub-column">
            {" "}
            {/* Ensure this class is in your SCSS */}
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

// Function to determine if a menu item is active based on current path and active dropdown
const isPathActive = (menuItem, currentPath, activeDesktopDropdownId) => {
  // A top-level dropdown item is considered active if its dropdown is open
  // OR if any of its contained links match the current path.
  if (menuItem.hasDropdown) {
    // If this specific top-level dropdown item's dropdown is active, it's active.
    if (activeDesktopDropdownId === menuItem.id) {
      return true;
    }

    // Check if any link within the dropdown's menuData or submenu matches the current path.
    // Prioritize menuData for top-level items, then children for nested items.
    const childrenData = menuItem.menuData || menuItem.children || [];
    const isAnyChildLinkActive = childrenData.some((child) =>
      isPathActive(child, currentPath, activeDesktopDropdownId)
    );

    if (isAnyChildLinkActive) {
      return true;
    }
  }

  // Standard link check
  if (menuItem.link === currentPath) {
    return true;
  }

  return false;
};

// MenuItem Component (handles individual menu items and their dropdowns)
const MenuItem = memo(
  ({
    item,
    currentPath,
    onMenuAction,
    isMobileView,
    isParentMenuOpen,
    activeDesktopDropdownId,
    isTopLevel = false, // True for main navigation items
  }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    // An item has a dropdown if explicitly set or if it has children in its unified data
    const hasDropdown =
      item.hasDropdown ||
      (item.children && item.children.length > 0) ||
      (item.menuData && item.menuData.length > 0);
    const isActive = isPathActive(item, currentPath, activeDesktopDropdownId);

    // Effect to close mobile submenu if the main mobile menu closes
    useEffect(() => {
      if (isMobileView && !isParentMenuOpen && isSubmenuOpen) {
        setIsSubmenuOpen(false);
      }
    }, [isMobileView, isParentMenuOpen, isSubmenuOpen]);

    // Effect to control desktop dropdown state based on Header's activeDesktopDropdownId
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

    // Handler for clicks on menu items
    const handleItemClick = useCallback(
      (e) => {
        e.stopPropagation(); // Prevent event bubbling up

        if (hasDropdown) {
          const newSubmenuOpenState = !isSubmenuOpen;
          setIsSubmenuOpen(newSubmenuOpenState);

          if (!isMobileView && isTopLevel) {
            // Inform parent Header about desktop dropdown toggle
            onMenuAction({
              type: "dropdownToggle",
              itemId: item.id,
              shouldOpen: newSubmenuOpenState,
            });
          }
        } else {
          // If it's a regular link, trigger action to close all menus
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
        {/* Render as a link that can also toggle dropdowns */}
        {hasDropdown ? (
          <Link
            to={item.link || "#"} // Use '#' if it's primarily a dropdown toggle
            className="nav-link"
            onClick={handleItemClick}
          >
            {item.label}
            <DropdownArrowIcon /> {/* Always show arrow for dropdowns */}
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

// --- Header Component (main component) ---
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls mobile sidebar visibility
  const [activeDesktopDropdownId, setActiveDesktopDropdownId] = useState(null); // Tracks which top-level desktop dropdown is open
  const [isMobileView, setIsMobileView] = useState(false); // Tracks current view (mobile/desktop)

  const location = useLocation();
  const currentPath = location.pathname;

  // Effect to determine mobile view and handle resize
  useEffect(() => {
    const handleResize = () => {
      const newIsMobileView = window.innerWidth <= 992; // Your mobile breakpoint
      if (newIsMobileView !== isMobileView) {
        setIsMobileView(newIsMobileView);
        // If transitioning from mobile to desktop, close the mobile menu
        if (!newIsMobileView && isMenuOpen) {
          setIsMenuOpen(false);
        }
        // If transitioning from desktop to mobile, close any desktop dropdowns
        if (newIsMobileView && activeDesktopDropdownId) {
          setActiveDesktopDropdownId(null);
        }
      }
    };

    // Initial check on mount
    setIsMobileView(window.innerWidth <= 992);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileView, isMenuOpen, activeDesktopDropdownId]); // Include activeDesktopDropdownId to react to changes

  // Effect to manage body overflow when mobile menu is active
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

  // Callback for actions triggered by MenuItem (link click, dropdown toggle)
  const handleMenuAction = useCallback(
    ({ type, itemId, shouldOpen }) => {
      if (type === "linkClick") {
        if (isMenuOpen) {
          setIsMenuOpen(false); // Close mobile menu
        }
        if (!isMobileView && activeDesktopDropdownId) {
          setActiveDesktopDropdownId(null); // Close desktop dropdowns
        }
      } else if (type === "dropdownToggle") {
        if (!isMobileView) {
          // If the clicked item is already open, close it. Otherwise, open it.
          // This handles closing other dropdowns implicitly by setting null.
          setActiveDesktopDropdownId(shouldOpen ? itemId : null);
        }
      }
    },
    [isMenuOpen, isMobileView, activeDesktopDropdownId]
  );

  // Toggle mobile sidebar open/close state
  const toggleMobileSidebar = useCallback(() => {
    setIsMenuOpen((prev) => {
      // If opening mobile menu, ensure desktop dropdowns are closed
      if (!prev && activeDesktopDropdownId) {
        setActiveDesktopDropdownId(null);
      }
      return !prev;
    });
  }, [activeDesktopDropdownId]);

  // Effect to handle clicks outside the navbar to close desktop dropdowns
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbar = document.querySelector(".nav-item");
      // Close dropdown if click is outside the navbar, a desktop dropdown is open, and it's desktop view
      if (
        navbar &&
        !navbar.contains(event.target) &&
        activeDesktopDropdownId &&
        !isMobileView
      ) {
        setActiveDesktopDropdownId(null);
      }
    };

    // Add/remove event listener based on dropdown state and view type
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

      {/* This div seems empty and might be redundant depending on its purpose in CSS */}
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
                isTopLevel={true} // Mark as top-level menu item
              />
            ))}
          </ul>
        </div>

        {/* Hamburger icon for mobile view when menu is closed */}
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
