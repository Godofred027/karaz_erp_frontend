import React, { useState } from "react";

export default function SubirDocumentos() {
    const [file, setFile] = useState(null);
    const [projects, setProjects] = useState([]);
    
    const getProjects = async () => {
        const res = await fetch(
        "https://api.karaz.com.mx/api/v1/projects",
        {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        }
        );

        const projects = await res.json();
        setProjects(projects);
    };
    
    const handleFile = async(e) => {
        setFile(e.target.files[0]);
    };
    
    const handleUpload = async () => {
        /*const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "upload");
    
        const res = await fetch(
        "",
        {
            method: "POST",
            body: formData,
        }
        );
    
        const file = await res.json();*/
        console.log(file);
        console.log("enviado")
    };
    
    return (
        <div>
        <input type="file" onChange={handleFile} />
        <select name="projects" id="projects">
            {projects.map((project) => (
                <option value={project.id}>{project.name}</option>
            ))}
        </select>
        <button onClick={handleUpload}>Upload</button>  
        </div>
    );
    }