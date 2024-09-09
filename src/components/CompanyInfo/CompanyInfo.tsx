const CompanyInfo = (props: any) => {
  return (
    <div>
      <h2>Company Info</h2>
      <p>
        Company Name:
        <span>{props.companyName}</span>
      </p>
      <p>
        Company Founded Year:
        {props.foundedYear}
      </p>
      <p>Company Employees Count: {props.employeesCount}</p>
    </div>
  );
}

export default CompanyInfo