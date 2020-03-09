const SalaryGraph = props => {
    let salaryData = props.salary;
    let difference = ((salaryData.byLocation.salary.percentile_50 - salaryData.nationWide.salary.percentile_50) / salaryData.nationWide.salary.percentile_50) * 100
    difference = Math.round(difference)
    return (
        <div style={props.style}>
            <h3>{salaryData.name} Salary Estimate for {props.location}</h3>
            <div>Median: ${Math.round(salaryData.byLocation.salary.percentile_50)}</div>
            <div>Low: ${Math.round(salaryData.byLocation.salary.percentile_20)}</div>
            <div>High: ${Math.round(salaryData.byLocation.salary.percentile_80)}</div>
            <h4>Median Salary</h4>
            <div>{props.location} ${Math.round(salaryData.byLocation.salary.percentile_50)}</div>
            <div>National ${Math.round(salaryData.nationWide.salary.percentile_50)}</div>
            <div>Location +/- {difference}
                {
                    difference > 0 ?
                        "% higher" :
                        "% lower"
                }
            </div>
        </div>
    )
}

export default SalaryGraph;