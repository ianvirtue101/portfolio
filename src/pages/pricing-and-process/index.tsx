import "../../styles/global.scss";
import "./pricingAndProcess.scss";
import { useTheme } from "../../components/ThemeWrapper/ThemeWrapper";
import RootLayout from "@/app/layout";

export default function PricingAndProcess() {
  const { darkMode } = useTheme();

  return (
    <>
      <RootLayout>
        <div className="pricing-structure">
          <div className="description">
            <h2 className="description__title">Our Pricing Structure</h2>
            <p className="description__text">
              We believe in transparency and fairness in pricing. Here's how we
              break down our costs for larger projects:
            </p>
          </div>

          <div className="pricing-structure__timeline">
            <div className="stage">
              {/* Stage 1  */}
              <h3 className="stage__title">Project Kickoff</h3>
              <p className="stage__cost">10% of total cost</p>
              <ul className="stage__details">
                <li>
                  Initial consultation to understand the client's needs and
                  goals
                </li>
                <li>Creation of project proposal and timeline</li>
                <li>Agreement on project scope and cost</li>
              </ul>
            </div>

            <div className="stage">
              {/* Stage 2 */}
              <h3 className="stage__title">
                Detailed project planning UI/UX design and prototype creation
              </h3>
              <p className="stage__cost">30% of total cost</p>
              <ul className="stage__details">
                <li>Client approval of design and project plan Development</li>
              </ul>
            </div>

            <div className="stage">
              {/* Stage 3 */}
              <h3 className="stage__title">
                {" "}
                Coding of the website or application
              </h3>
              <p className="stage__cost">25% of total cost</p>
              <ul className="stage__details">
                <li>
                  Regular updates to the client and adjustments based on
                  feedback
                </li>
                <li>Testing and bug fixes</li>
                <li>Launch</li>
              </ul>
            </div>

            <div className="stage">
              {/* Stage 4 */}
              <h3 className="stage__title">
                Final testing and quality assurance
              </h3>
              <p className="stage__cost">10% of total cost</p>
              <ul className="stage__details">
                <li>Deployment of the website or application</li>
                <li>Client training and handoff</li>
                <li>Post-Launch Suppor</li>
              </ul>
            </div>

            <div className="stage">
              {/* Stage 5 */}
              <h3 className="stage__title">Post-Launch Support</h3>
              <p className="stage__cost">10% of total cost</p>
              <ul className="stage__details">
                <li>
                  Maintenance and updates for a specified period of time (e.g.,
                  30 days)
                </li>
                <li>Additional support as needed</li>
              </ul>
            </div>
          </div>

          <div className="cta">
            <h2 className="cta__title">Ready to start your project?</h2>
            <p className="cta__text">
              Get in touch with us today to schedule your free initial
              consultation.
            </p>
            <button className="cta__button">Contact Us</button>
          </div>
        </div>
      </RootLayout>
    </>
  );
}
