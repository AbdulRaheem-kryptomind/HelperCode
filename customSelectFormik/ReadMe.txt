            <Field
              name="technologies"
              options={technologyOptions}
              component={CustomSelect}
              placeholder="Select technologies..."
              isMulti={true}
            />
            <div className={styles.error}>
              <ErrorMessage name="technologies" />
            </div>


**********************************************************

const technologyOptions = [
  {
    label: "React",
    value: "React",
  },
  {
    label: "React Native",
    value: "React Native",
  },
  {
    label: "Node",
    value: "Node",
  },
  {
    label: "MySQL",
    value: "MySQL",
  },
  {
    label: "MongoDB",
    value: "MongoDB",
  },
  {
    label: "Stellar",
    value: "Stellar",
  },
  {
    label: "Ethereum",
    value: "Ethereum",
  },
  
];