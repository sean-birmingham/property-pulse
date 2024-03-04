import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description:
    "Find your dream rental property with PropertyPulse. We have a wide range of properties to choose from.",
  keywords: "rental, property, real estate, house, apartment, condo",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
