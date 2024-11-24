"use client";
import { motion } from "framer-motion";
import ProjectCard from "../components/common/ProjectsCard";

const projects = [
  {
    title: "PesaBank: Banking App Website Project",
    description:
      "PesaBank is a full-stack banking application built with React and Flask, offering users a secure platform to manage their finances. Key features include account creation, fund transfers, transaction tracking, loan applications, and savings management. With two-step authentication and SQLAlchemy-powered database management, PesaBank ensures both security and performance. Its intuitive dashboard and responsive design provide a seamless user experience for personal finance management",
    imageUrl: //"/images/TechVoyageCompany.png",
    link: //"https://techvoyage.co.ke",
    tech_stack: "React.js, Flask, SQLAlchemy, PostgreSQL"
 
  },
  {
    title: "MyDuka Inentory Management System Project",
    description:
      "This Flask API is built to support the MyDuka inventory management system, offering endpoints for managing stock, generating reports, and handling user roles. Admins, merchants, and staff can efficiently interact with the platform, utilizing their respective access levels to perform tasks such as adding products, tracking inventory, and generating sales reports.",
    imageUrl: //"/images/LMS.png",
    link: //"https://learning-management-system-alpha-eosin.vercel.app/docs/",
    tech_stack: "Flask, Python, PostgreSQL, SQLAlchemy"
  },
  {
    title: "Medical Billing System",
    description:
      "The medical billing system you're building is designed to streamline the billing process for healthcare providers. It aims to automate and manage patient billing, insurance claims, and payment processing. The system will support features such as generating invoices, tracking payments, managing patient accounts, and integrating with insurance companies for claims verification. It is built to improve efficiency, reduce errors, and ensure accurate billing, making it easier for healthcare professionals to focus on patient care.",
    imageUrl: //"/images/RetailApp.png",
    link: //"https://retail-app-kappa.vercel.app/",
    tech_stack: //"React.js, Spring Boot"
  },

];


export default function Projects() {
  return (
    <section className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2,type:"spring", stiffness:"200" }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}