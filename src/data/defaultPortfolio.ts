import { PortfolioData } from "../types";

import frameworksImg from "../assets/png/frameworks.png";
import databasesImg from "../assets/png/databases.png";
import devopsToolsImg from "../assets/png/devops-tools.png";
import cloudPlatformsImg from "../assets/png/cloud-platforms.png";
import softwareDevelopmenMethologiesImg from "../assets/png/software-development-methologies.png";
import generativeAIImg from "../assets/png/generative-ai.png";
import jnrLevelDeveloperImg from "../assets/png/jnr-level-developer.png";
import midLevelDeveloperImg from "../assets/png/mid-level-developer.png";
import observabilityImg from "../assets/png/observability.png";
import aiBusinessAutomationImg from "../assets/png/ai-business-automation.png";
import systemAdministratorImg from "../assets/png/system-administrator.png";
import awsCloudPractitionerImg from "../assets/png/aws-cloud-practitioner.png";
import softwareBackgroundImg from "../assets/jpg/software-background.jpg";
import fullStackDevelopmentImg from "../assets/jpg/full-stack-development.jpg";
import technicalDrawingImg from "../assets/jpg/technical-drawing.jpg";
import blizzardImg from "../assets/jpg/blizzard.jpg";
import finanicalSystemsImg from "../assets/jpg/finanical-systems.jpg";
import filmSetImg from "../assets/jpg/film-set.jpg";

const img = (seed: string) => `https://picsum.photos/seed/${seed}/1200/800`;

export const defaultPortfolio: PortfolioData = {
  person: {
    name: "Steven Berrisford",
    lastUpdated: "Apr 2026",
    headline:
      "Full Stack Software Developer | AWS Cloud & Generative AI Specialist | Delivering Scalable Applications",
    backgroundImage: softwareBackgroundImg,
    location: "United Kingdom",
    email: "stevenberrisford@gmail.com",
    phone: "(+44) 07891078922",
    links: [
      {
        label: "LinkedIn",
        text: "stevenberrisford55061a134",
        url: "https://linkedin.com/in/stevenberrisford55061a134",
      },
      {
        label: "GitHub",
        text: "StevenB96",
        url: "https://github.com/StevenB96",
      },
    ],
  },

  summary: `Highly accomplished Full Stack Software Developer with 3 years of experience in designing, developing, and deploying scalable web and mobile applications. Proven ability to mentor junior engineers, collaborate with cross functional teams, and manage external stakeholders through proactive communication. My primary professional experience is in React, React Native, Laravel, and Pythonbased development, alongside strong proficiency in Django, Flask, Express, and Next.js. Recently completed a focused career break to deepen expertise in Amazon Web Services (AWS) cloud services, Generative Artificial Intelligence (AI), and modern web frameworks, along with Portuguese studies. Seeking to leverage a strong engineering background and a passion for problem-solving to deliver impactful, end-to-end features and pragmatic AI integrations within a dynamic team environment. `,

  experience: [
    {
      id: "mid-level-developer",
      title: "Mid-Level Developer, Scorchsoft Ltd",
      imageUrl: midLevelDeveloperImg,
      redirectUrl: "https://www.scorchsoft.com/",
      text: `July 2022 – Sept 2023

      Delivered across 4 client projects in diplomacy, clinical, and finance sectors, contributing to requirements, estimation, sprint delivery,architecture, development, and deployment.
      • Built scalable web and mobile application features using React, React Native, Laravel, and Python-based services.
      • Designed data models, API integrations, ETL pipelines, and synchronisation processes across multi-application systems.
      • Implemented secure AWS-based deployments, including encryption, IAM least-privilege access, and compliance-aware hosting decisions.
      • Delivered authentication, dashboards, notifications, geolocation/mapping, email workflows, and Bluetooth-related functionality.
      • Mentored junior developers through code reviews, pairing, and technical support across project teams.
      • Supported backlog breakdown, sprint planning, acceptance testing, and technical documentation.
      • Worked directly with stakeholders to clarify requirements, manage expectations, and resolve complex delivery issues.

      Selected achievements:
      • Diplomacy mobile app and admin portal: Led development of a CMS-integrated mobile app and admin platform, including ETL synchronisation and junior developer support, contributing to a successful MVP and continued client engagement.
      • Healthcare multi-application system: Helped lead delivery of a secure architecture spanning web and mobile applications; implemented core functionality and AWS-aligned deployment practices, with project progress tracking around 13% ahead of estimate.`,
    },
    {
      id: "junior-developer",
      title: "Junior Developer, Scorchsoft Ltd",
      imageUrl: jnrLevelDeveloperImg,
      redirectUrl: "https://www.scorchsoft.com/",
      text: `Sept 2020 – July 2022

      Contributed to 6 client projects, developing features across the stack while strengthening delivery, estimation, and SDLC knowledge.
      • Built and maintained application features across frontend, backend, databases, and deployment environments.
      • Clarified requirements, estimated work packages, and delivered within Kanban-based team workflows.
      • Investigated and resolved defects across code, integrations, and infrastructure.
      • Completed first project approximately 13% ahead of original estimate, demonstrating strong adaptability and rapid learning.`,
    },
  ],

  education: [
    {
      id: "masters-mechanical-engineering",
      title: "University of Exeter, Master's Degree in Mechanical Engineering",
      imageUrl: technicalDrawingImg,
      redirectUrl: "https://engineering.exeter.ac.uk/research/",
      text: `Sept 2015 – May 2019
      
      • Awarded a First Class Degree with Dean’s Commendation.
      • Completed a final project studying the thermal impact of phase change materials in buildings using computational modelling and
      applied machine learning with Python.
      • Coursework included advanced mathematics and business studies.`,
    },
    {
      id: "research-bursary-weather-system",
      title: "University of Exeter, Research Bursary in Extreme Weather Generation System",
      imageUrl: blizzardImg,
      redirectUrl: "https://engineering.exeter.ac.uk/research/",
      text: `May 2018 – Aug 2018

      • Developed an efficient extreme weather generation system for building simulations. 
      May 2018 – Aug 2018 
      • Applied techniques such as: Imputation, Copulas, FFTs and Genetic Algorithms using MATLAB and Python. `,
    },
  ],

  skills: [
    {
      id: "frameworks",
      title: "Frameworks",
      imageUrl: frameworksImg,
      text: `Expert:
      Django, Flask, React, React Native, Express, Laravel, Next.js

      Proficient:
      FastAPI, Pytest, Unittest, Jest, Mocha, Yii2`,
    },
    {
      id: "databases",
      title: "Databases",
      imageUrl: databasesImg,
      text: `Expert:
      MySQL, PostgreSQL, SQLite, DynamoDB, MongoDB, Data modelling and schema design

      Proficient:
      Cassandra, BigQuery ML`,
    },
    {
      id: "devops-tools",
      title: "DevOps Tools",
      imageUrl: devopsToolsImg,
      text: `Expert:
      Docker, Bitbucket, Github Actions workflows, Jira, Kubernetes, Jaeger, OpenTelemetry, AWS ECS, EC2, CodePipeline, ECR

      Proficient:
      Terraform, OpenVPN, Prometheus, Loki, Airflow, Kafka, AWS CloudFormation, Route 53`,
    },
    {
      id: "methodologies",
      title: "Methodologies",
      imageUrl: softwareDevelopmenMethologiesImg,
      text: `Expert:
      Scrum, Agile, Code Review, CI/CD, Microservices, Kanban

      Proficient:
      Test driven development`,
    },
    {
      id: "cloud-platforms",
      title: "Cloud Platforms",
      imageUrl: cloudPlatformsImg,
      text: `Expert:
      AWS, Google Cloud

      Proficient:
      Azure`
    },
    {
      id: "generative-ai",
      title: "Generative AI",
      imageUrl: generativeAIImg,
      text: `Expert:
      Prompt engineering, multi-provider LLM integration, RAG, output validation, prompt-injection mitigation, PII redaction

      Proficient:
      Human-in-the-loop workflows, AI-assisted forecasting`
    },
  ],

  projects: [
    {
      id: "administration-systems",
      title: "Administration Systems",
      imageUrl: systemAdministratorImg,
      redirectUrl: "https://github.com/StevenB96",
      text: `Two seperate projects mirror the functionality I worked with at Scorchsoft, but use alternative technologies to demonstrate adaptability across stacks.
      • Built two equivalent systems using different modern stacks: a Django + MongoDB-based Prescription Manager & OAuth Identity Provider and a Next.js + full-stack TypeScript Theatre Ticket Booking App.
      • Demonstrated technology portability: applied equivalent architectural patterns across different stacks.
      • Recreated identity, authentication, and domain management systems: implemented OAuth 2.0 flows, GraphQL APIs.
      • Designed layered, decoupled architectures: separating data access, business logic, application services, and UI layers.
      • Implemented complex data and domain modelling: managed healthcare entities (prescriptions, users, facilities) and theatre entities (performances, bookings, seating) with structured relational and document-based approaches.
      • Delivered full-stack system capabilities: including CRUD administration interfaces, real-time analytics dashboards, booking workflows, and secure API layers.`,
    },
    {
      id: "ai-business-workflow-portfolio",
      title: "AI Business Workflow Portfolio",
      imageUrl: aiBusinessAutomationImg,
      redirectUrl: "https://github.com/StevenB96/ai-sdlc-workflow-projects",
      text: `Shows AI supporting real business workflows using a practical, lightweight stack.
      • Built two AI workflow projects: AI Incident Triage & Release Notes API for technical users and AI Feedback Operations Hub for non-technical users.
      • Used OpenAI API and Anthropic Claude API in separate provider-specific implementations to compare behaviour.
      • Developed with Python, GitHub Actions, JSON Schema, pytest, and Google Apps Script, with Google Sheets, Forms, and emailused for lightweight automation.
      • Applied business-safe defaults: sanitised data, human approval for customer-facing output, and secure key handling via .env,GitHub Secrets, and Script Properties.`,
    },
    {
      id: "cloud-native-observability-&-event-driven-etl-in-kubernetes",
      title: "Cloud-Native Observability & Event-Driven ETL in Kubernetes",
      imageUrl: observabilityImg,
      redirectUrl: "https://github.com/StevenB96/obs-etl-k8s-demo-project",
      text: `Showcases enterprise-grade telemetry, event-driven processing, and automated data pipelines.
      • Built a cloud-native Flask system integrated with Kafka to generate work requests and emit telemetry.
      • Implemented full observability stack: OpenTelemetry, Jaeger, Prometheus, Loki, Promtail, and Grafana for distributed tracing,
      metrics, and log correlation.
      • Designed event-driven ETL pipelines: Kafka (KRaft) and Apache Airflow orchestrating a Fetch-Transform-Write workflow.
      • Applied SRE practices: tracing, logging, monitoring, alerting, retries, and idempotent consumers.
      • Deployed Kubernetes-first infrastructure: Kind, Helm 3, YAML manifests, and scripts for provisioning, validation, and testing.`,
    },
        {
      id: "ai-tooling-&-risk-mitigation-in-financial-systems",
      title: "AI Tooling & Risk Mitigation in Financial Systems",
      imageUrl: finanicalSystemsImg,
      redirectUrl: "https://github.com/StevenB96/ai_tool-risk_mitigation-demo-project",
      text: `Demonstrates hardened, production-ready AI systems for regulated financial environments.
      • Built a full-stack Flask app with a layered architecture across interface, logic, data, validation, and domain layers.
      • Supported four workflows: RAG Chatbot, Document Analysis, Forecasting + Generative Insights, Automated Onboarding.
      • Implemented AI safety and security controls: prompt-injection mitigation, Pydantic schema validation, PII redaction, JWT/JTI session tracking, scrypt hashing, bleach sanitisation, and flask-talisman headers.
      • Integrated enterprise AI and data services: OpenAI GPT-4o-mini, Vertex AI Gemini, OpenAI embeddings, custom vector search, SQLite, and Google BigQuery/BQML.`,
    },
    {
      id: "movie-predictor",
      title: "Movie Predictor",
      imageUrl: filmSetImg,
      redirectUrl: "https://github.com/StevenB96/aws-etl-project",
      text: `Developed a Flask web and Extract, Transform, Load (ETL) profit prediction application.
      • Implemented Docker containerization for consistent deployment.
      • Deployed on AWS using ECS, AWS Lambda, Amazon S3, AWS CodePipeline, and AWS CloudFormation.
      • Utilised scikit-learn for machine learning predictions and Matplotlib for data visualizations.`,
    },
  ],

  certifications: [
    { id: "aws-cloud-practitioner", title: "AWS Cloud Practitioner" },
    { id: "ibm-django-development", title: "IBM Django Development" },
    { id: "ibm-nodejs", title: "IBM Node.js" },
    { id: "ibm-microservices-serverless", title: "IBM Microservices & Serverless" },
    { id: "ibm-python-data-science", title: "IBM Python for Data Science" },
    { id: "ibm-nosql-databases", title: "IBM NoSQL Databases" },
    { id: "ibm-etl-data-pipelines", title: "IBM ETL & Data Pipelines" },
    {
      id: "ibm-containers",
      title: "IBM Containers (Docker, Kubernetes, OpenShift)",
    },
    { id: "ibm-monitoring-observability", title: "IBM Monitoring & Observability" },
    { id: "ibm-application-security", title: "IBM Application Security" },
    {
      id: "ibm-building-generative-ai",
      title: "IBM Building Generative AI-Powered Applications with Python",
    },
    { id: "ibm-generative-ai", title: "IBM Generative AI" },
    {
      id: "bcs-intermediate-enterprise-solution-architecture",
      title: "BCS Intermediate Enterprise & Solution Architecture",
    },
    {
      id: "bcs-foundation-architecture-concepts",
      title: "BCS Foundation in Architecture Concepts",
    },
    { id: "lpi-linux-essentials", title: "LPI Linux Essentials" },
    { id: "google-agile-project-management", title: "Google Agile Project Management" },
    { id: "quickbooks-bookkeeping-basics", title: "QuickBooks Bookkeeping Basics" },
    {
      id: "cvs-interacting-with-customers",
      title: "CVS Health Interacting with Customers",
    },
  ],

  courses: [
    {
      id: "skills-bootcamp-cloud-aws",
      title: "Skills Bootcamp in Cloud (AWS)",
      imageUrl: awsCloudPractitionerImg,
      text: `Oct 2023 – Feb 2024
      • Covered AWS Cloud Practitioner fundamentals: including the shared responsibility model, IAM, security, deployments, operations, and billing concepts. 
      • Completed a major personal project and group presentation: applying AWS concepts to practical, real-world scenarios. `,
    },
    {
      id: "full-stack-web-development-course",
      title: "Full Stack Web Development Course",
      imageUrl: fullStackDevelopmentImg,
      text: `Mar 2020 – June 2020

      • Developed core software engineering skills: programming, web development, databases, frameworks, libraries, APIs, and foundational data engineering and machine learning concepts. 
      • Completed multiple mini-projects and final presentations: demonstrated practical application of skills through project work showcased to potential employers. `,
    },
  ],

  languages: [
    { id: "norwegian", title: "Norwegian", text: "B2 — Upper Intermediate" },
    { id: "german", title: "German", text: "B1 — Intermediate" },
    { id: "swedish", title: "Swedish", text: "A2 — Elementary" },
    { id: "french", title: "French", text: "A2 — Elementary" },
    { id: "portuguese", title: "Portuguese", text: "A2 — Elementary" },
  ],

  interests: [
    {
      id: "sports",
      title: "Football, Badminton, Running",
      text: "Enjoying physical challenge and teamwork.",
    },
    {
      id: "dancing",
      title: "Dancing",
      text: "Salsa, Bachata, Lindy Hop — focusing on movement and social aspects.",
    },
    {
      id: "singing",
      title: "Singing",
      text: "Member of a choir, contributing to group sound and harmony.",
    },
  ],
};