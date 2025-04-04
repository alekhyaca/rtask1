//Anatomy
const url = "http://localhost:3000/students"
const Table = () => {
  const fetchStudents = () => {
    return fetch(url).then(res=>res.json()).then(data=>data).catch(err=>console.log(err.message))
  }
  console.log(fetchStudents())
  // const data = JSON.parse(localStorage.getItem("hello"))
  // console.log(data)
  return (
    <>
      <h1>Display students</h1>
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((student, index) => {
            console.log("student", student)
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
              </tr>
            )
          })} */}
        </tbody>
      </table>
    </>
  )
}
export default Table