import { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "./Terminal.css";
import pdfFile from "./assets/mdcv2025.pdf";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const commands = {
    help: "📝 Available commands: about, projects, experience, education, contact, clear",
    about: `
      🚀 Hi, I'm <strong>Md Shamse</strong>! Aspiring <strong>Full-Stack Developer</strong> | <strong>Data Analyst</strong>. <br/>
      💡 <strong>Frontend:</strong> JavaScript, React, Tailwind CSS, Bootstrap. <br/>
      💡 <strong>Backend:</strong> Node.js, Express.js, MongoDB, Firebase Authentication. <br/>
      💡 <strong>Database:</strong> SQL, MongoDB. <br/>
      💡 <strong>Data Analysis:</strong> Python (Pandas, NumPy, Matplotlib). <br/>
      💡 <strong>Visualization:</strong> Power BI, Matplotlib, Seaborn for dashboards & reports. <br/>
      💡 <strong>Excel:</strong> Data cleaning, pivot tables, VLOOKUP. <br/>
      💡 <strong>Version Control:</strong> Git, GitHub. <br/>
      📂 <a href=${pdfFile} download style="color: cyan;">Download CV</a>
    `,
    experience: `
      💼 <strong>Work Experience:</strong> <br/>
      🔹 <strong>IT Intern</strong> - Birla Fertility & IVF (June 2023 - July 2023) <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;✅ Developed an Examination System using PHP. <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;✅ Implemented authentication and different user roles. <br/>
    `,
    education: `
      🎓 <strong>Education:</strong> <br/>
      📌 <strong>Postgraduate (PG):</strong> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;✅ Master’s in Computer Applications (MCA) - Lovely Professional University 2024-current. <br/>
      📌 <strong>Undergraduate (UG):</strong> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;✅ Bachelor’s in Computer Applications (BCA) - Lovely Professinal  University (Year of Passing: 2024) <br/>
      📌 <strong>Schooling:</strong> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;✅ High School - Delhi Public School (Year of Passing: 2021) <br/>
    `,
    projects: `
      📌 <strong>My Projects:</strong> <br/>
      🔹 <a href="https://github.com/mdshamse1/node_restaurant" target="_blank" style="color: cyan;">Restaurant Booking System using (Node.js, MongoDB).</a> <br/>
      🔹 <a href="https://github.com/mdshamse1/Auth" target="_blank" style="color: cyan;">Authentication (React, Node.js, MongoDB, Express, CORS, Mongoose).</a> <br/>
      🔹 <a href="https://github.com/mdshamse1/Book_store" target="_blank" style="color: cyan;">Book Store (React, Node, MongoDB, Express).</a> <br/>
    `,
    contact: "📧 Email: mdshamse19@gmail.com",
  };

  const handleInput = (event) => {
    if (event.key === "Enter") {
      if (input.toLowerCase() === "clear") {
        setOutput([]);
      } else {
        setOutput((prev) => [
          ...prev,
          `> ${input}`,
          <span dangerouslySetInnerHTML={{ __html: commands[input.toLowerCase()] || "❌ Command not found! Type 'help' for options." }} />,
        ]);
      }
      setInput("");
    }
  };

  return (
    <div className="terminal-container">
      <motion.p
        className="terminal-text"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typewriter
          words={["Hey! My name is Md Shamse Alam", "👨‍💻 Welcome to My Terminal Portfolio!", "💡 Type 'help' to see commands."]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={40}
        />
      </motion.p>

      <div className="terminal-output">
        {output.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      <div className="terminal-input">
        <span>{">"}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInput}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
