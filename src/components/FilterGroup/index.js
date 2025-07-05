import './index.css'

const FilterGroup = props => {
  const {
    employmentTypesList,
    salaryRangesList,
    selectedCheckBox,
    updateSalary,
    selectedBox,
    locations,
  } = props
  const renderTypesList = () =>
    employmentTypesList.map(e => {
      const onSelectCheckbox = () => {
        selectedCheckBox(e.employmentTypeId)
      }
      return (
        <li key={e.employmentTypeId}>
          <input
            type="checkbox"
            id={e.employmentTypeId}
            onClick={onSelectCheckbox}
          />
          <label htmlFor={e.employmentTypeId} className="checkbox-label">
            {e.label}
          </label>
        </li>
      )
    })

  const renderLocation = () =>
    locations.map(e => {
      const onSelectbox = () => {
        selectedBox(e.id)
      }
      return (
        <li key={e.id}>
          <input type="checkbox" id={e.id} onClick={onSelectbox} />
          <label htmlFor={e.id} className="checkbox-label">
            {e.id}
          </label>
        </li>
      )
    })

  const renderTypes = () => (
    <>
      <h1 className="category-heading">Type of Employment</h1>
      <ul className="categories-list">{renderTypesList()}</ul>
    </>
  )

  const renderRangesList = () =>
    salaryRangesList.map(e => {
      const onSelectSalary = () => {
        updateSalary(e.salaryRangeId)
      }
      return (
        <li key={e.salaryRangeId}>
          <input
            type="radio"
            name="salary"
            id={e.salaryRangeId}
            onClick={onSelectSalary}
          />
          <label className="checkbox-label" htmlFor={e.salaryRangeId}>
            {e.label}
          </label>
        </li>
      )
    })

  const renderRanges = () => (
    <>
      <h1 className="category-heading">Salary Range</h1>
      <ul className="categories-list">{renderRangesList()}</ul>
    </>
  )

  return (
    <div>
      {renderTypes()}
      <hr className="line" />
      {renderRanges()}
      <hr className="line" />
      {renderLocation()}
    </div>
  )
}

export default FilterGroup
