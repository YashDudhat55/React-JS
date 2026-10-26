import { useState } from "react";
import styles from "./StudentRecords.module.css";

const initialStudents = [
  {
    id: "101",
    name: "Yash Dudhat",
    email: "yash.dudhat@gmail.com",
    phone: "1234567899",
    course: "Full Stack Development",
    year: "1st Year",
    status: "Active",
    gender: "Male",
    dob: "2009-09-24",
    enrollmentDate: "2026-01-10",
    address: "Surat, Gujarat",
  },
  {
    id: "102",
    name: "Rahul Patel",
    email: "rahul.patel@gmail.com",
    phone: "9876543210",
    course: "Web Development",
    year: "2nd Year",
    status: "Active",
    gender: "Male",
    dob: "2005-05-15",
    enrollmentDate: "2025-07-12",
    address: "Ahmedabad, Gujarat",
  },
  {
    id: "103",
    name: "Priya Shah",
    email: "priya.shah@gmail.com",
    phone: "9876543211",
    course: "BCA",
    year: "1st Year",
    status: "Active",
    gender: "Female",
    dob: "2006-08-21",
    enrollmentDate: "2026-01-15",
    address: "Vadodara, Gujarat",
  },
  {
    id: "104",
    name: "Aarav Mehta",
    email: "aarav.mehta@gmail.com",
    phone: "9876543212",
    course: "B.Sc IT",
    year: "3rd Year",
    status: "Inactive",
    gender: "Male",
    dob: "2004-11-08",
    enrollmentDate: "2024-08-18",
    address: "Rajkot, Gujarat",
  },
  {
    id: "105",
    name: "Diya Desai",
    email: "diya.desai@gmail.com",
    phone: "9876543213",
    course: "Full Stack Development",
    year: "2nd Year",
    status: "Active",
    gender: "Female",
    dob: "2005-12-19",
    enrollmentDate: "2025-07-20",
    address: "Gandhinagar, Gujarat",
  },
];

function Icon({ name, size = 20 }) {
  const paths = {
    graduation: (
      <>
        <path d="m2 10 10-5 10 5-10 5-10-5Z" />
        <path d="M6 12v5c4 3 8 3 12 0v-5" />
        <path d="M22 10v6" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m16 16 4 4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 17v4h14v-4" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    trash: (
      <>
        <path d="M3 6h18" />
        <path d="M8 6V4h8v2" />
        <path d="m5 6 1 15h12l1-15" />
        <path d="M10 10v7M14 10v7" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function StudentRecords() {
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem("student-records");
      return saved ? JSON.parse(saved) : initialStudents;
    } catch {
      return initialStudents;
    }
  });

  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("All Courses");
  const [status, setStatus] = useState("All Status");
  const [page, setPage] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const pageSize = 5;

  function saveStudents(updatedStudents) {
    setStudents(updatedStudents);
    localStorage.setItem(
      "student-records",
      JSON.stringify(updatedStudents)
    );
  }

  const courses = [
    ...new Set(students.map((student) => student.course)),
  ];

  const filteredStudents = students.filter((student) => {
    const query = search.toLowerCase();

    const matchesSearch =
      student.name.toLowerCase().includes(query) ||
      student.email.toLowerCase().includes(query) ||
      student.id.toLowerCase().includes(query);

    const matchesCourse =
      course === "All Courses" || student.course === course;

    const matchesStatus =
      status === "All Status" || student.status === status;

    return matchesSearch && matchesCourse && matchesStatus;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredStudents.length / pageSize)
  );

  const currentPage = Math.min(page, totalPages);

  const startIndex = (currentPage - 1) * pageSize;

  const visibleStudents = filteredStudents.slice(
    startIndex,
    startIndex + pageSize
  );

  function handleSearch(value) {
    setSearch(value);
    setPage(1);
  }

  function handleCourse(value) {
    setCourse(value);
    setPage(1);
  }

  function handleStatus(value) {
    setStatus(value);
    setPage(1);
  }

  function addStudent() {
    const name = window.prompt("Enter student name:");
    if (!name?.trim()) return;

    const email = window.prompt("Enter student email:");
    if (!email?.trim()) return;

    const phone = window.prompt("Enter student phone:");
    if (!phone?.trim()) return;

    const newStudent = {
      id: String(
        Math.max(100, ...students.map((student) => Number(student.id) || 0)) +
          1
      ),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      course: "Full Stack Development",
      year: "1st Year",
      status: "Active",
      gender: "",
      dob: "",
      enrollmentDate: new Date().toISOString().slice(0, 10),
      address: "",
    };

    saveStudents([newStudent, ...students]);
    setPage(1);
    setSearch("");
    setCourse("All Courses");
    setStatus("All Status");
  }

  function deleteStudent(id) {
    if (!window.confirm("Are you sure you want to delete this student?")) {
      return;
    }

    saveStudents(students.filter((student) => student.id !== id));
    setSelectedStudent(null);
  }

  function exportCSV() {
    const headers = [
      "ID",
      "Name",
      "Email",
      "Phone",
      "Course",
      "Year",
      "Status",
    ];

    const rows = filteredStudents.map((student) => [
      student.id,
      student.name,
      student.email,
      student.phone,
      student.course,
      student.year,
      student.status,
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row
          .map(
            (value) =>
              `"${String(value ?? "").replace(/"/g, '""')}"`
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "student-records.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Icon name="graduation" size={48} />
          </div>

          <div>
            <h1>Student Records</h1>
            <p>Manage and view all student information</p>
          </div>
        </div>

        <button className={styles.addButton} onClick={addStudent}>
          <Icon name="plus" size={23} />
          <span>Add Student</span>
        </button>
      </header>

      <section className={styles.toolbar}>
        <div className={styles.searchBox}>
          <Icon name="search" size={23} />

          <input
            type="text"
            placeholder="Search by name, email or ID..."
            value={search}
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>

        <div className={styles.filterBox}>
          <Icon name="graduation" size={23} />

          <select
            value={course}
            onChange={(event) => handleCourse(event.target.value)}
            aria-label="Filter by course"
          >
            <option>All Courses</option>

            {courses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterBox}>
          <Icon name="clock" size={23} />

          <select
            value={status}
            onChange={(event) => handleStatus(event.target.value)}
            aria-label="Filter by status"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <button className={styles.exportButton} onClick={exportCSV}>
          <Icon name="download" size={23} />
          <span>Export CSV</span>
        </button>
      </section>

      <section className={styles.tableCard}>
        <div className={styles.tableHeading}>
          <Icon name="users" size={27} />
          <h2>All Students ({filteredStudents.length})</h2>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Course</th>
                <th>Year</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {visibleStudents.map((student) => (
                <tr key={student.id}>
                  <td className={styles.idCell}>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.course}</td>
                  <td>{student.year}</td>

                  <td>
                    <span
                      className={`${styles.statusBadge} ${
                        student.status === "Active"
                          ? styles.active
                          : styles.inactive
                      }`}
                    >
                      <span className={styles.statusDot} />
                      {student.status}
                    </span>
                  </td>

                  <td>
                    <div className={styles.actions}>
                      <button
                        className={styles.viewButton}
                        onClick={() => setSelectedStudent(student)}
                        aria-label={`View ${student.name}`}
                        title="View student"
                      >
                        <Icon name="eye" size={21} />
                      </button>

                      <button
                        className={styles.deleteButton}
                        onClick={() => deleteStudent(student.id)}
                        aria-label={`Delete ${student.name}`}
                        title="Delete student"
                      >
                        <Icon name="trash" size={21} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {visibleStudents.length === 0 && (
                <tr>
                  <td colSpan="8" className={styles.emptyMessage}>
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <footer className={styles.tableFooter}>
          <p>
            Showing{" "}
            {filteredStudents.length === 0 ? 0 : startIndex + 1} to{" "}
            {Math.min(startIndex + pageSize, filteredStudents.length)} of{" "}
            {filteredStudents.length} students
          </p>

          <div className={styles.pagination}>
            <button
              disabled={currentPage === 1}
              onClick={() => setPage(currentPage - 1)}
            >
              Previous
            </button>

            <span className={styles.currentPage}>{currentPage}</span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </footer>
      </section>

      {selectedStudent && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedStudent(null)}
        >
          <section
            className={styles.modal}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="student-title"
          >
            <h2 id="student-title">Student Details</h2>

            <p>
              <strong>ID:</strong> {selectedStudent.id}
            </p>
            <p>
              <strong>Name:</strong> {selectedStudent.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedStudent.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedStudent.phone}
            </p>
            <p>
              <strong>Course:</strong> {selectedStudent.course}
            </p>
            <p>
              <strong>Year:</strong> {selectedStudent.year}
            </p>
            <p>
              <strong>Status:</strong> {selectedStudent.status}
            </p>
            <p>
              <strong>Gender:</strong> {selectedStudent.gender || "—"}
            </p>
            <p>
              <strong>Date of Birth:</strong> {selectedStudent.dob || "—"}
            </p>
            <p>
              <strong>Enrollment Date:</strong>{" "}
              {selectedStudent.enrollmentDate || "—"}
            </p>
            <p>
              <strong>Address:</strong> {selectedStudent.address || "—"}
            </p>

            <button
              className={styles.addButton}
              onClick={() => setSelectedStudent(null)}
            >
              Close
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default StudentRecords;