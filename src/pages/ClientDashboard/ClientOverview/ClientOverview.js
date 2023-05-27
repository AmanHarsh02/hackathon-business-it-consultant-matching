import { ConsultantCard } from "../../../Components/index";

export function ClientOverview() {
  const testConsultant = {
    name: "Test Name",
    description: "Test Description",
    matchedScore: "75%",
    mandayHours: "70",
  };

  return (
    <>
      <h2>Client Overview Page</h2>
      <div className="consultant__card__container">
        <ConsultantCard consultant={testConsultant} />
      </div>
    </>
  );
}
