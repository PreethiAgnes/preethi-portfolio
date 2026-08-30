export const profile = {
  name: 'Preethi Agnes Thomas',
  title: 'Senior DevOps & Platform Engineer',
  tagline: 'DevSecOps · Cloud Security Engineering · Site Reliability Engineering',
  location: 'Dubai, UAE',
  email: 'preethiagnest@gmail.com',
  github: 'https://github.com/preethiagnes',
  linkedin: 'https://www.linkedin.com/in/preethi-agnes-thomas',
  resumeUrl: '/resume.pdf',
  summary:
    "Senior DevOps Engineer with 9+ years across Cloud, DevOps, DevSecOps, and Platform Engineering — deep hands-on expertise in AWS, Kubernetes, Infrastructure as Code, and CI/CD automation. I support large-scale enterprise applications in the aviation domain, with a focus on high availability, disaster recovery, security, observability, and production reliability. I build the tooling I use, too — including agentic-AI-assisted workflows for infrastructure and incident response.",
}

export const stats = [
  { label: 'Years of Experience', value: '9+' },
  { label: 'Production Apps Owned', value: '6' },
  { label: 'Deployment Frequency Increase', value: '3x' },
  { label: 'Cloud Spend Reduced', value: '~20%' },
]

export const skillGroups = [
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Terraform', 'CloudFormation', 'Docker', 'Kubernetes (EKS)', 'ECS', 'Lambda', 'GitHub Actions', 'Azure DevOps', 'Harness', 'Jenkins'],
  },
  {
    category: 'Cloud Security',
    skills: ['Cloud Security Assessments', 'CIS AWS Foundations Benchmark', 'Security Architecture', 'Risk Assessment', 'AWS Security Best Practices'],
  },
  {
    category: 'Security Tooling',
    skills: ['Prowler', 'Veracode', 'Wiz', 'SonarCloud', 'Snyk'],
  },
  {
    category: 'Application Security',
    skills: ['SAST', 'DAST', 'SCA', 'IaC Security', 'Container Security', 'Vulnerability Management'],
  },
  {
    category: 'Identity & Access',
    skills: ['IAM', 'RBAC', 'IRSA', 'OIDC', 'AWS KMS', 'AWS Secrets Manager'],
  },
  {
    category: 'Observability',
    skills: ['Dynatrace', 'Dynatrace Davis AI', 'CloudWatch', 'New Relic', 'ELK Stack'],
  },
  {
    category: 'Agentic AI Engineering',
    skills: ['Claude Code', 'AI-assisted infra automation', 'AI-driven anomaly detection'],
  },
]

export const experience = [
  {
    company: 'Tescra Software Pvt Ltd — United Airlines',
    location: 'India & Dubai, UAE',
    role: 'Senior DevOps Engineer',
    period: '09/2024 — 07/2026',
    blurb:
      'Sole platform owner accountable for cloud infrastructure, security posture, and release reliability across 6 production applications serving US and India markets, reporting to Senior Leadership.',
    highlights: [
      'Integrated Veracode, Wiz, and SonarCloud into CI/CD pipelines, enforcing SAST/SCA/IaC/container scanning gates — blocking 100% of non-compliant builds from reaching production.',
      'Led the migration from AWS AppSync to Kong API Gateway, centralizing API traffic, routing, and operational control.',
      'Integrated Microsoft Entra ID with Kong Gateway via OAuth 2.0/OIDC, enforcing RBAC-based authorization for secure enterprise SSO.',
      'Managed AWS EKS clusters supporting Kong Gateway workloads with zero-downtime deployments.',
      'Implemented secure workload identity (IRSA) for Kubernetes, eliminating static credentials.',
      'Engineered CI/CD pipelines using Harness, GitHub Actions, and AWS CodePipeline — increasing deployment frequency by 3x.',
      'Adopted Claude Code and Dynatrace Davis AI to accelerate infra automation and sync monitoring with DR exercises.',
    ],
  },
  {
    company: 'Expleo Software Private Limited',
    location: 'India',
    role: 'Lead Software Engineer (DevOps)',
    period: '09/2023 — 09/2024',
    blurb:
      'Led a 3-engineer DevOps team owning cloud infrastructure design, release pipeline delivery, and platform automation across multiple client programmes, including a UAE-based banking client.',
    highlights: [
      'Designed multi-environment AWS infrastructure via CloudFormation across 4+ client projects, eliminating configuration drift.',
      'Built and governed CI/CD pipelines with Azure DevOps and GitHub Actions.',
      'Integrated Veracode and Snyk into every stage of the delivery lifecycle.',
      'Instrumented CloudWatch, New Relic, and ELK Stack — reducing mean-time-to-resolution by 35%.',
    ],
  },
  {
    company: 'PayPerform India Private Limited',
    location: 'India',
    role: 'Senior DevOps Engineer',
    period: '06/2021 — 08/2023',
    blurb:
      'Full accountability for SaaS platform infrastructure stability and release pipeline performance, mentoring 3 junior engineers.',
    highlights: [
      'Scaled AWS services (EC2, S3, RDS, VPC, IAM) sustaining ~99.9% uptime.',
      'Engineered AWS CodePipeline workflows, reducing release cycle time by ~30% and manual intervention by ~40%.',
      'Standardised Docker-based microservices infrastructure across environments.',
      'Enabled ~10–15% cloud cost optimization through usage analysis.',
    ],
  },
  {
    company: 'Maxpi Technologies',
    location: 'Bangalore',
    role: 'DevOps Engineer',
    period: '05/2019 — 06/2021',
    blurb: 'Administered AWS cloud infrastructure and release pipelines across production environments.',
    highlights: ['Implemented Docker containerization.', 'Configured Auto Scaling Groups and Application Load Balancers for high availability.'],
  },
  {
    company: 'Tata Consultancy Services',
    location: 'Chennai',
    role: 'System Engineer',
    period: '03/2017 — 05/2019',
    blurb: 'Supported enterprise application release operations across Linux environments.',
    highlights: ['Developed shell scripts and applied monitoring tools to maintain deployment consistency at scale.'],
  },
]

export const projects = [
  {
    name: 'DR Incident Report Generator',
    description:
      "An agentic tool that turns a disaster-recovery drill's raw event timeline into a polished incident report — a deterministic RTO/RPO scorecard plus a Claude-generated narrative (what worked, what didn't, recommendations).",
    tags: ['Python', 'Claude API', 'CLI', 'DR / SRE'],
    github: 'https://github.com/PreethiAgnes/dr-incident-report-generator',
    featured: true,
  },
  {
    name: 'CI/CD Failure Triage Agent',
    description:
      'A Claude-powered agent that triages failed GitHub Actions runs — classifies the failure, finds the root cause, and posts a suggested fix as a commit comment.',
    tags: ['GitHub Actions', 'Claude API', 'CI/CD'],
    github: 'https://github.com/PreethiAgnes/CI-CD-failure-triage-agent',
    featured: true,
  },
  {
    name: 'AI DevSecOps Demo',
    description:
      'A DevSecOps CI/CD pipeline demo — CodeQL, Snyk (SCA + SAST), SBOM generation, and GitOps-style deployment, exercised against an intentionally vulnerable Spring Boot app used as the scan target.',
    tags: ['CodeQL', 'Snyk', 'SBOM', 'GitOps'],
    github: 'https://github.com/PreethiAgnes/aidevsecopsdemo',
    featured: true,
  },
  {
    name: 'Stock-on-Hand Processor',
    description:
      'A production-minded DevOps case study built with FastAPI, deployed on Kubernetes via Helm and kOps, with infrastructure provisioned through Terraform and Ansible on AWS.',
    tags: ['FastAPI', 'Kubernetes', 'Helm', 'Terraform', 'Ansible'],
    github: 'https://github.com/PreethiAgnes/stock-on-hand-processor',
    featured: false,
  },
]

export const certifications = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services' },
]

export const education = {
  degree: 'Bachelor of Technology',
  school: 'Rajalakshmi Engineering College, Chennai, India',
}
