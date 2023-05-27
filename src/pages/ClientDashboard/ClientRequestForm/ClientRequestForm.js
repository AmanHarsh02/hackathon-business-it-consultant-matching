export function ClientRequestForm() {
  const domainsOfExpertise = ["Ed Tech", "HR", "XYZ"];
  const softwareOptions = ["Option 1", "Option 2", "Option 3"];

  return (
    <div>
      <h1>Request Form</h1>
      <SelectOption label="Domain of Expertise" options={domainsOfExpertise} />
      <SelectOption label="Software" options={softwareOptions} />
      <InputOption label="Number of Users" type="number" />
      <InputOption label="Budget" type="text" />
      <InputOption label="Deadine" type="date" />
      <button>Submit</button>
    </div>
  );
}
