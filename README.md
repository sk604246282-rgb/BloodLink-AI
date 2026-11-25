# BloodLink AI

AI-assisted blood donor discovery and emergency coordination platform built for the BUiLDX hackathon.

## Project Title and Overview
BloodLink AI helps hospitals and requesters coordinate blood donor outreach through a structured request-to-response workflow while keeping clinical screening and medical decisions strictly with licensed blood centres. This prototype uses fictional sample records for demonstration purposes.

## Problem Statement
During medical emergencies, finding available blood donors is slowed down by fragmented contact information across calls and messages, urgent time pressure, and manual follow-up tracking across potential volunteers.

## Proposed Solution
BloodLink AI replaces scattered outreach with one structured workflow:
1. A hospital or requester creates a blood request (blood group, component, units, urgency, zone, and contact).
2. The system filters consented sample donor profiles matching the requested blood group.
3. Potential contacts are prioritised using zone match, distance, and response history.
4. Responses (Pending, Accepted, Declined, or Directed to Licensed Centre) and audit events are tracked in one view.
5. Interested volunteers are directed to a licensed blood centre for identity checks, donor fitness assessment, testing, and compatibility/issue.

## Key Features
- Emergency Request Form: Captures requester details, blood group, component, units, urgency, and location zone.
- Consent-Based Sample Donor Registration: Allows adding sample volunteers with explicit consent and voluntary/free participation terms.
- Priority Ranking & Response Tracking: Ranks matching sample profiles and tracks live counts for matched, pending, accepted, and centre-directed leads.
- Coordination Audit Log: Records request creation and status updates with timestamps.
- Clear Clinical Boundaries: Explicitly separates communication/coordination from medical screening, crossmatching, and transfusion decisions.

## Technologies Used
- Frontend & Prototype Logic: HTML5 (`index.html`), CSS3 (`style.css`), and JavaScript (`script.js`) with in-memory fictional sample data.
- Planned / Target Architecture Components: Backend services, access-controlled database, consent/audit storage, maps/notifications, and licensed blood centre workflows (not yet live in the basic prototype).

## Installation and Setup Instructions
1. Clone or download the repository from GitHub (`https://github.com/sk604246282-rgb/BloodLink-AI`).
2. Keep `index.html`, `style.css`, and `script.js` together in the same folder.
3. No external package installation or build step is required for the static prototype.

## How to Run the Project
1. Open `index.html` in any modern web browser (Chrome, Edge, Firefox, or mobile browser).
2. Fill out "1. Create Emergency Blood Request" and click "Search & Prioritise Consented Donors".
3. Test "Accept", "Decline", or "Direct to Centre" actions, register a sample volunteer, and check the "Coordination Audit Log".

## Project Architecture or Workflow
- User Interface: Hospital request form, sample volunteer registration, response tracker, and audit log (`index.html`, `style.css`).
- Application Logic: Input handling, blood-group and consent filtering, priority scoring, and status updates (`script.js`).
- Data & Services (Prototype vs. Target): Currently uses fictional in-memory sample records (`script.js`); target architecture includes secured storage, consent records, audit logs, and notification/map services.
- Licensed Blood Centre: Handles donor screening, testing, compatibility, and blood issue.

## Team Members and Contributions
- **Shivam Kumar (Team Lead)** — Team leadership, project coordination, prototype setup, and submission documentation.
- **Susmita Chanda** — Solution workflow, safety/consent framing, and presentation support.
- **Suhani Joshi** — Problem analysis, coordination flow, and presentation support.
- **Anushka Deshmukh** — Clinical boundaries, pilot/evaluation structure, and presentation support.
