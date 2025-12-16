import { Globe, Cpu, Smartphone, Database, Zap, PenTool, Layout, Server, Wifi } from 'lucide-react';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaVuejs, FaJava,
    FaPython, FaRaspberryPi, FaDocker, FaFigma
} from "react-icons/fa";
import {
    SiTailwindcss, SiMysql, SiMongodb, SiFlutter, SiAndroidstudio,
    SiAdobexd, SiRoboflow, SiTensorflow, SiOpencv, SiStreamlit,
    SiArduino, SiCplusplus, SiNodered
} from "react-icons/si";

// Images


import listMobile from '../assets/๋J/web/Listmobile.png';
import listWeb from '../assets/๋J/web/Listweb.png';
import listWeb2 from '../assets/๋J/web/Listweb2.png';

import smartMushroom from '../assets/๋J/Iot/Smart Mushroom Farm.jpg';
import wasteCabinet from '../assets/๋J/Iot/Metal bottle Detecting cabinet.jpg';
import iotNeon from '../assets/๋J/Iot/Iot neon.png';

import listAi from '../assets/๋J/ai/Segment.jpg';
import listAi2 from '../assets/๋J/ai/Segment ai2.png';
import blueberryYield from '../assets/๋J/ai/Prediction of Wild Blueberry Yield.png';

import listRobot from '../assets/๋J/robot/ListRobot.png';

export const profileData = {
    brand: "YourSkill",
    tagline: "Bridging Software, IoT, and AI",
    description: "A collaborative portfolio combining the strengths of Full Stack Development, IoT Engineering, and Artificial Intelligence.",
    about: "We are a duo of passionate developers from Thailand, combining deep expertise in Computer Science, Robotics, and Web Technologies. Our unified goal is to deliver end-to-end digital solutions that just work.",
    services: [
        {
            title: "Web Development",
            description: "Scalable web apps using React, Node.js, and modern frameworks.",
            icon: Globe
        },
        {
            title: "Mobile Application",
            description: "Cross-platform mobile solutions with Flutter and Native technologies.",
            icon: Smartphone
        },
        {
            title: "AI & Data",
            description: "Intelligent systems, Machine Learning models, and predictive analytics.",
            icon: Database
        },
        {
            title: "IoT Solutions",
            description: "Connected hardware, sensors, and smart automation systems.",
            icon: Cpu
        }
    ],
    skills: {
        web: [
            { name: "ReactJS", level: 90, icon: "FaReact" },
            { name: "Node.js", level: 90, icon: "FaNodeJs" },
            { name: "HTML5", level: 95, icon: "FaHtml5" },
            { name: "CSS3", level: 95, icon: "FaCss3Alt" },
            { name: "Tailwind", level: 95, icon: "SiTailwindcss" },
            { name: "MySQL", level: 88, icon: "SiMysql" },
            { name: "MongoDB", level: 85, icon: "SiMongodb" },
            { name: "Vue.js", level: 85, icon: "FaVuejs" }
        ],
        application: [
            { name: "Flutter", level: 85, icon: "SiFlutter" },
            { name: "Java", level: 85, icon: "FaJava" },
            { name: "Android Studio", level: 80, icon: "SiAndroidstudio" },
            { name: "Figma", level: 85, icon: "FaFigma" },
            { name: "Adobe XD", level: 80, icon: "SiAdobexd" }
        ],
        ai: [
            { name: "Python", level: 90, icon: "FaPython" },
            { name: "YOLOv8", level: 85, icon: "SiRoboflow" },
            { name: "TensorFlow", level: 75, icon: "SiTensorflow" },
            { name: "OpenCV", level: 80, icon: "SiOpencv" },
            { name: "Streamlit", level: 85, icon: "SiStreamlit" }
        ],
        iot: [
            { name: "Arduino", level: 90, icon: "SiArduino" },
            { name: "Raspberry Pi", level: 85, icon: "FaRaspberryPi" },
            { name: "C/C++", level: 80, icon: "SiCplusplus" },
            { name: "Docker", level: 80, icon: "FaDocker" },
            { name: "Node-RED", level: 75, icon: "SiNodered" }
        ]
    },
    projects: [
        {
            title: "AI Mushroom Farm IoT",
            description: "Smart system integrating sensors and Computer Vision (YOLOv8) to monitor temperature, humidity, and mushroom growth.",
            tech: ["Python", "IoT", "YOLOv8", "Roboflow"],
            image: listAi
        },
        {
            title: "AI Mushroom Farm IoT",
            description: "Smart system integrating sensors and Computer Vision (YOLOv8) to monitor temperature, humidity, and mushroom growth.",
            tech: ["Python", "IoT", "YOLOv8", "Roboflow"],
            image: listAi2
        },
        {
            title: "Mushroom Temperature Monitor",
            description: "Created a dedicated Mushroom Temperature Monitor to log and display real-time environmental data for agricultural optimization.",
            tech: ["ReactJS", "Node.js", "MySQL", "Node-RED"],
            image: listWeb
        },
        {
            title: "Cybersecurity Learning Platform",
            description: "A web-based platform simulating real-world cyber threat scenarios for user training. Thesis project.",
            tech: ["ReactJS", "Node.js", "Docker", "MySQL"],
            image: listWeb2
        },
        {
            title: "Financial Management Dashboard",
            description: "Complete UI/UX design and implementation of a stock module with CRUD operations and REST API.",
            tech: ["React", "TypeScript", "Node.js", "MongoDB"],
            image: listWeb
        },

        {
            title: "Doki-Shop E-commerce",
            description: "Full-featured clothing store web application with product import, order management, and user interface.",
            tech: ["ReactJS", "Node.js", "MySQL"],
            image: listWeb
        },
        {
            title: "Waste Sorting Smart Cabinet",
            description: "IoT project using ESP32 to detect and sort plastic vs metal bottles automatically.",
            tech: ["ESP32", "C++", "Sensors"],
            image: wasteCabinet
        },
        {
            title: "Robot Tracking System",
            description: "Joy PS2-controlled robot that tracks lines and performs acrobatics. Uses Arduino Nano and mobile control.",
            tech: ["C++", "Arduino", "Robotics"],
            image: listRobot
        },
        {
            title: "Smart Lamp Application",
            description: "Mobile control for smart lighting systems, developed with Android Studio to control temperature and humidity.",
            tech: ["Android Studio", "Java", "IoT"],
            image: iotNeon
        },
        {
            title: "Blueberry Yield Prediction",
            description: "Kaggle kernel using XGBoost and pickle to forecast wild blueberry yield, deployed via Streamlit.",
            tech: ["Python", "XGBoost", "Streamlit"],
            image: blueberryYield
        },
        {
            title: "Web Application AEKI",
            description: "Web application AEKI for warehouse management with user interface and user experience design.",
            tech: ["ReactJS", "Node.js", "Node.js"],
            image: listWeb2
        },
        {
            title: "List mobile",
            description: "List mobile application for warehouse management with user interface and user experience design.",
            tech: ["Flutter", "Java", "Android Studio"],
            image: listMobile
        },
        {
            title: "Flower Shop UI Prototype",
            description: "High-fidelity mobile app prototype for a flower shop service, designed in Adobe XD.",
            tech: ["Adobe XD", "UI/UX", "Prototyping"],
            image: listMobile
        }
    ]
};
