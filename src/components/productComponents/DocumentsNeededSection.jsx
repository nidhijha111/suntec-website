import React from 'react';
const documentsData = {
  column1Title: "The following documents will be required to file a claim for commercial vehicle Insurance",
  column1Items: [
    { text: "Commercial Vehicle Insurance Policy Certificate", iconColor: "blue" },
    { text: "Registration Certificate of Vehicle (RC)", iconColor: "yellow" },
    { text: "Fitness Certificate of the Vehicle", iconColor: "blue" },
    { text: "Driving License (DL) of Driver", iconColor: "yellow" },
    { text: "Original Insurance Policy", iconColor: "blue" }
  ],
  column2Title: "", // The second column in the image doesn't have a distinct blue header text
  column2Items: [
    { text: "Duly Filled Claim Form", iconColor: "blue" },
    { text: "Copy of FIR, if applicable", iconColor: "yellow" },
    { text: "Copy of Aadhar Card", iconColor: "blue" },
    { text: "Tax Paid Receipt", iconColor: "yellow" },
    { text: "Load Challan of Vehicle", iconColor: "blue" }
  ]
};

const DocumentsNeededSection = () => {
  return (
    <section className="documents-needed-section">
      <div className="container">
        <h2 className="section-title">
          Documents needed
          <span> to file a claim</span>
        </h2>
        <div className="documents-content-wrapper">
          <div className="documents-header">
            <p>{documentsData.column1Title}</p>
            {/* The second column's title isn't prominent in the image,
                so it's not explicitly styled here as a blue bar.
                If it were, we'd add another <p> here. */}
          </div>
          <div className="documents-columns-container">
            <div className="documents-column">
              <ul>
                {documentsData.column1Items.map((item, index) => (
                  <li key={`col1-${index}`}>
                    <span className={`list-icon-wrapper icon-${item.iconColor}`}>
                      {/* <BsCheckLg className="list-icon" /> */}
                            <img src='./assets/images/tick_icon.svg' alt='tick icon'/>
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="documents-column">
              <ul>
                {documentsData.column2Items.map((item, index) => (
                  <li key={`col2-${index}`}>
                    <span className={`list-icon-wrapper icon-${item.iconColor}`}>
                      {/* <BsCheckLg className="list-icon" /> */}
                      <img src='./assets/images/tick_icon.svg' alt='tick icon'/>
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="disclaimer-note">
          Please note : The required documents may vary between insurers. Hence, please check with the respective Insurance company to ensure a successful claim settlement.
        </p>
      </div>
    </section>
  );
};

export default DocumentsNeededSection;